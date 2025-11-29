import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate required fields
    const errors: Record<string, string> = {};
    
    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen).';
    }
    
    if (!data.email || !isValidEmail(data.email)) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    
    if (!data.subject) {
      errors.subject = 'Bitte wählen Sie einen Betreff aus.';
    }
    
    if (!data.message || data.message.trim().length < 10) {
      errors.message = 'Bitte geben Sie eine Nachricht ein (mindestens 10 Zeichen).';
    }
    
    if (!data.privacy) {
      errors.privacy = 'Bitte akzeptieren Sie die Datenschutzerklärung.';
    }
    
    // If there are validation errors, return them
    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Bitte überprüfen Sie Ihre Eingaben.',
          errors
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    // In production, you would send an email here
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      preferredContact: data.preferredContact,
      timestamp: new Date().toISOString()
    });
    
    // TODO: Implement email sending
    // Example with Resend, SendGrid, or Nodemailer:
    // await sendEmail({
    //   to: 'info@atelier-kl.de',
    //   from: 'noreply@atelier-kl.de',
    //   subject: `Neue Kontaktanfrage: ${data.subject}`,
    //   html: generateEmailTemplate(data)
    // });
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Ihre Nachricht wurde erfolgreich gesendet.'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to generate email template (for future implementation)
// function generateEmailTemplate(data: any): string {
//   return `
//     <h2>Neue Kontaktanfrage</h2>
//     <p><strong>Name:</strong> ${data.name}</p>
//     <p><strong>E-Mail:</strong> ${data.email}</p>
//     ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
//     <p><strong>Betreff:</strong> ${data.subject}</p>
//     <p><strong>Nachricht:</strong></p>
//     <p>${data.message.replace(/\n/g, '<br>')}</p>
//     ${data.preferredContact ? `<p><strong>Bevorzugter Rückrufzeitpunkt:</strong> ${data.preferredContact}</p>` : ''}
//   `;
// }

