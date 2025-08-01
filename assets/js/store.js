function isStoreOpen() {
  const status = localStorage.getItem('storeStatus');
  return status !== 'closed';
}

function applyStoreStatus() {
  const open = isStoreOpen();
  const openSec = document.querySelector('.estado-open');
  const closedSec = document.querySelector('.estado-cerrado');
  if (openSec) openSec.style.display = open ? 'block' : 'none';
  if (closedSec) closedSec.style.display = open ? 'none' : 'block';

  const waLink = document.querySelector('a.boton');
  if (waLink) waLink.style.display = open ? 'inline-block' : 'none';

  if (!open) {
    const cart = document.getElementById('carrito');
    const mini = document.getElementById('carrito-minimizado');
    if (cart) cart.classList.add('oculto');
    if (mini) mini.classList.add('oculto');
  }
  window.storeOpen = open;
}

document.addEventListener('DOMContentLoaded', applyStoreStatus);
