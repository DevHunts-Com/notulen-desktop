module.exports = {
    apps: [{
      name: 'notulen-desktop',
      script: 'node_modules/.bin/electron',
      args: '.',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      // max_memory_restart: '1G', // Restart aplikasi jika memori lebih dari 1GB
      log_file: 'combined.log', // File log gabungan
      out_file: 'out.log',      // File log output
      error_file: 'error.log',  // File log error
      merge_logs: true,         // Gabungkan log dari semua instance
      time: true                // Tambahkan timestamp pada log
    }]
  };
  