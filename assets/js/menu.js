document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/data/menu.json")
    .then((res) => res.json())
    .then((data) => {
      renderItems("burgers", data.burgers);
      renderItems("hotdogs", data.hotdogs);
    });

  function renderItems(seccionId, items) {
    const container = document.querySelector(`#${seccionId} .menu-items`);
    container.innerHTML = "";

    items.forEach((item) => {
      container.innerHTML += `
        <div class="item">
          <img src="${item.imagen}" alt="${item.nombre}">
          <h3>${item.nombre}</h3>
          <p>${item.descripcion}</p>
        </div>
      `;
    });
  }
});
