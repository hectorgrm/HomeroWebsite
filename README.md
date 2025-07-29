# 📝 Descripción del proyecto: Homer’s Burgers (Modelo JSON + HTML)

Este proyecto es una **landing page dinámica** para una hamburguesería, inspirada en *Homero Simpson*, construida con HTML, CSS y JavaScript.
El objetivo es permitir una presentación atractiva del menú, y facilitar futuras modificaciones por parte del cliente sin necesidad de tocar el código HTML directamente.

## 🎯 Objetivo actual

Separar los productos del menú en un archivo `JSON` externo (`menu.json`) que puede ser editado fácilmente, y cargarlos dinámicamente con `JavaScript`.

## 📂 Estructura del proyecto recomendada

```
homers-burgers/
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── menu.js
│   │   ├── img/
│   │   └── data/
│   │       └── menu.json
```

## 🧠 ¿Qué debe hacer Codex con este proyecto?

- Separar los productos del menú de `index.html` y cargarlos desde `menu.json`.
- Implementar `assets/js/menu.js` que lea el JSON y renderice dinámicamente los productos.
- Insertar `<script src="assets/js/menu.js">` antes de `</body>`.
- Asegurar que se use un servidor local (como Live Server) para que `fetch()` funcione correctamente en desarrollo.

## ✅ Ejemplo de `menu.json`

```json
{
  "burgers": [
    {
      "nombre": "D'oh Burger",
      "descripcion": "Carne jugosa, doble queso, y bacon crujiente.",
      "imagen": "https://i.imgur.com/W0r75yn.jpg"
    }
  ],
  "hotdogs": [
    {
      "nombre": "Donut Dog",
      "descripcion": "Hotdog estilo Springfield con aderezo rosa.",
      "imagen": "https://i.imgur.com/JCT3z1b.jpg"
    }
  ]
}
```

Esta estructura permitirá escalar a un sistema más avanzado con backend o CMS en el futuro.
✅ Ideal para presentar al cliente sin complicar el desarrollo inicial.

