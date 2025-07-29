const carrito = [];

document.addEventListener('DOMContentLoaded', () => {
  fetch('assets/data/menu.json')
    .then(response => response.json())
    .then(data => {
      renderItems(data.burgers, document.querySelector('#burgers .menu-items'));
      renderItems(data.hotdogs, document.querySelector('#hotdogs .menu-items'));
    })
    .catch(err => console.error('Error al cargar el menú', err));

  document.getElementById('vaciar-carrito').addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
  });

  document.getElementById('enviar-pedido').addEventListener('click', enviarWhatsApp);

  document.getElementById('carrito-minimizado').addEventListener('click', () => {
    document.getElementById('carrito').classList.remove('oculto');
    document.getElementById('carrito-minimizado').classList.add('oculto');
  });
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

    const desc = document.createElement('p');
    desc.textContent = item.descripcion;

    const precio = document.createElement('p');
    precio.textContent = `$${item.precio}`;

    const btn = document.createElement('button');
    btn.textContent = 'Agregar a Orden';
    btn.addEventListener('click', () => agregarAlCarrito(item));

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(desc);
    div.appendChild(precio);
    div.appendChild(btn);

    container.appendChild(div);
  });
}

function agregarAlCarrito(item) {
  carrito.push(item);
  actualizarCarrito();
  document.getElementById('carrito').classList.remove('oculto');
  document.getElementById('carrito-minimizado').classList.add('oculto');
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  let total = 0;
  carrito.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = `${prod.nombre} - $${prod.precio}`;
    lista.appendChild(li);
    total += prod.precio || 0;
  });
  document.getElementById('total').textContent = total.toFixed(2);
  document.getElementById('mini-total').textContent = total.toFixed(2);
  document.getElementById('mini-cantidad').textContent = carrito.length;
  if (carrito.length === 0) {
    document.getElementById('carrito').classList.add('oculto');
    document.getElementById('carrito-minimizado').classList.add('oculto');
  } else {
    document.getElementById('carrito-minimizado').classList.remove('oculto');
  }
}

function enviarWhatsApp() {
  let mensaje = 'Mi pedido:%0A';
  let total = 0;
  carrito.forEach(prod => {
    mensaje += `- ${prod.nombre} ($${prod.precio})%0A`;
    total += prod.precio || 0;
  });
  mensaje += `Total: $${total.toFixed(2)}`;
  const url = `https://wa.me/?text=${mensaje}`;
  window.open(url, '_blank');
}
