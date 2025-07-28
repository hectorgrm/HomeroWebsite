document.addEventListener('DOMContentLoaded', () => {
  fetch('assets/data/menu.json')
    .then(response => response.json())
    .then(data => {
      renderItems(data.burgers, document.querySelector('#burgers .menu-items'));
      renderItems(data.hotdogs, document.querySelector('#hotdogs .menu-items'));
    })
    .catch(err => console.error('Error al cargar el menú', err));
});

function renderItems(items, container) {
  if (!container || !Array.isArray(items)) return;
  container.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    const img = document.createElement('img');
    img.src = item.imagen;
    img.alt = item.nombre;
    const h3 = document.createElement('h3');
    h3.textContent = item.nombre;
    const p = document.createElement('p');
    p.textContent = item.descripcion;
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    container.appendChild(div);
  });
}
