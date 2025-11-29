# ATELIER KL - Business Website

A professional, accessible, and high-performing business website for ATELIER KL, an abstract art studio offering unique artworks and creative workshops.

## 🎨 Features

- **Modern Design System**: Custom design tokens with brand colors, typography, and spacing
- **Responsive Layout**: Mobile-first design that works on all devices
- **Content Collections**: Structured content for artworks, workshops, and testimonials
- **Interactive Components**: Gallery with lightbox, filterable artwork grid, workshop cards
- **Contact Forms**: Validated forms with client and server-side validation
- **SEO Optimized**: Meta tags, Open Graph, structured data, sitemap
- **Accessibility**: WCAG AA compliant with keyboard navigation and ARIA labels
- **Performance**: Optimized images, lazy loading, code splitting

## 🚀 Tech Stack

- **Framework**: Astro 5.2.5
- **Hosting**: Vercel with edge optimization
- **Styling**: Custom CSS with design tokens
- **Content**: Content Collections with TypeScript schemas
- **Images**: Astro Assets + Vercel Image Optimization

## 🧞 Commands

| Command | Action |
|:--------|:-------|
| \`npm install\` | Install dependencies |
| \`npm run dev\` | Start dev server at \`localhost:4321\` |
| \`npm run build\` | Build for production to \`./dist/\` |
| \`npm run preview\` | Preview production build locally |

## 🎨 Design System

### Colors
- **Brand Beige**: \`#c9bdb0\` - Primary brand color
- **Black**: \`#000000\` - Text and accents
- **White**: \`#ffffff\` - Backgrounds
- **Olive**: \`#8a8d7f\` - Secondary accent

### Typography
- **Headlines**: Manrope (fallback: Inter Tight)
- **Body**: Inter (fallback: system fonts)

## 📝 Content Management

### Adding Artworks

Create a new JSON file in \`src/content/artworks/\`

### Adding Workshops

Create a new JSON file in \`src/content/workshops/\`

## 🚀 Deployment

The site is configured for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will auto-deploy on push to main branch

## ✅ Next Steps

1. **Add Real Images**: Replace placeholder images with actual artwork photos
2. **Implement Email**: Set up email service for contact form
3. **Add Analytics**: Implement privacy-first analytics
4. **Content**: Add more artworks, workshops, and testimonials
5. **Testing**: Test forms, navigation, and accessibility

## �� License

Copyright © 2024 ATELIER KL. All rights reserved.
