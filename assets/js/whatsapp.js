// Script to toggle WhatsApp button visibility based on config.json

document.addEventListener('DOMContentLoaded', () => {
  fetch('data/config.json')
    .then(resp => resp.json())
    .then(cfg => {
      const btn = document.getElementById('whatsapp-button');
      if (!btn) return;
      if (cfg.whatsappVisible) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    })
    .catch(err => console.error('Error loading config', err));
});
