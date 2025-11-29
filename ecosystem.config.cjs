module.exports = {
  apps: [
    {
      name: 'atelier-kl',
      script: 'npm',
      args: 'run preview',
      cwd: '/home/exit/Dokumente/AtelierKL/project',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 4321
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true
    }
  ]
};

