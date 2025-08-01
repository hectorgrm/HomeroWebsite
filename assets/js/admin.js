function updateStatusText() {
  const open = localStorage.getItem('storeStatus') !== 'closed';
  document.getElementById('estado').textContent = open ? 'Abierto' : 'Cerrado';
  document.getElementById('toggle').textContent = open ? 'Cerrar Tienda' : 'Abrir Tienda';
}

document.addEventListener('DOMContentLoaded', () => {
  updateStatusText();
  document.getElementById('toggle').addEventListener('click', () => {
    const open = localStorage.getItem('storeStatus') !== 'closed';
    localStorage.setItem('storeStatus', open ? 'closed' : 'open');
    updateStatusText();
  });
});
