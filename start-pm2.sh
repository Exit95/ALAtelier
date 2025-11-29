#!/bin/bash

# ATELIER KL - PM2 Start Script
# Dieses Script startet die Website mit PM2

echo "🚀 Starte ATELIER KL Website mit PM2..."

# Erstelle logs Verzeichnis falls nicht vorhanden
mkdir -p logs

# Build die Website
echo "📦 Building Website..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build fehlgeschlagen!"
    exit 1
fi

echo "✅ Build erfolgreich!"

# Stoppe alte PM2 Prozesse falls vorhanden
echo "🛑 Stoppe alte PM2 Prozesse..."
pm2 delete atelier-kl 2>/dev/null || true

# Starte mit PM2
echo "▶️  Starte PM2..."
pm2 start ecosystem.config.cjs

# Speichere PM2 Konfiguration
echo "💾 Speichere PM2 Konfiguration..."
pm2 save

# Zeige Status
echo ""
echo "✅ ATELIER KL läuft jetzt mit PM2!"
echo ""
pm2 status
echo ""
echo "📊 Logs anzeigen: pm2 logs atelier-kl"
echo "🔄 Neustart: pm2 restart atelier-kl"
echo "🛑 Stoppen: pm2 stop atelier-kl"
echo "📈 Monitoring: pm2 monit"
echo ""
echo "🌐 Website läuft auf: http://localhost:4321"

