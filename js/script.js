
const relojes = [
  {
    nombre: "Casio",
    tipo: "digital",
    precio: 19.99,
    descripcion: "Clásico, económico y duradero.",
    imagen: "img/Casio.jpg",
    enlace: "https://www.amazon.es/"
  },
  {
    nombre: "Lotus",
    tipo: "digital",
    precio: 95.00,
    descripcion: "Reloj automático japonés con excelente calidad.",
    imagen: "img/Lotus.jpg",
    enlace: "https://www.amazon.es/"
  },
  {
    nombre: "Lotus Clásico",
    tipo: "digital",
    precio: 70.00,
    descripcion: "Funciona con luz, diseño militar y fiable.",
    imagen: "img/LotusVerde.jpg",
    enlace: "https://www.amazon.es/"
  },
  {
    nombre: "Tag Heuer Carrera",
    tipo: "digital",
    precio: 6400.00,
    descripcion: "Automático elegante ideal para vestir.",
    imagen: "img/TagHeuerCarrera.jpg",
    enlace: "https://www.amazon.es/"
  },
  {
    nombre: "Tissot",
    tipo: "digital",
    precio: 925.00,
    descripcion: "Sencillo, cómodo y perfecto para el día a día.",
    imagen: "img/Tissot.jpg",
    enlace: "https://www.amazon.es/"
  },
  {
    nombre: "Emporio Armani",
    tipo: "digital",
    precio: 310.97,
    descripcion: "Estilo submarino asequible y vistoso.",
    imagen: "img/EmporioArmani.jpeg",
    enlace: "https://www.amazon.es/"
  },
   {
    nombre: "Philipp Plein",
    tipo: "digital",
    precio: 523.15,
    descripcion: "Estilo submarino asequible y vistoso.",
    imagen: "img/PhilippPlein.jpg",
    enlace: "https://www.amazon.es/"
  },
   {
    nombre: "Festina",
    tipo: "digital",
    precio: 143.10,
    descripcion: "Estilo submarino asequible y vistoso.",
    imagen: "img/Festina.jpg",
    enlace: "https://www.amazon.es/"
  }
];

let paginaActual = 1;
const relojesPorPagina = 4;

function mostrarCatalogo(lista, pagina = 1) {
  const contenedor = document.getElementById('catalogo');
  contenedor.innerHTML = '';
  const inicio = (pagina - 1) * relojesPorPagina;
  const fin = inicio + relojesPorPagina;
  const paginaRelojes = lista.slice(inicio, fin);

  paginaRelojes.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <h3>${item.nombre}</h3>
      <p>${item.descripcion}</p>
      <p class="precio">${item.precio.toFixed(2)} €</p>
      <a href="${item.enlace}" target="_blank"><button class="boton-compra">Comprar</button></a>
    `;
    contenedor.appendChild(div);
  });

  mostrarPaginacion(lista);
}

function mostrarPaginacion(lista) {
  const totalPaginas = Math.ceil(lista.length / relojesPorPagina);
  const paginacion = document.getElementById('paginacion');
  paginacion.innerHTML = '';
  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = i === paginaActual ? 'active' : '';
    btn.onclick = () => {
      paginaActual = i;
      mostrarCatalogo(lista, paginaActual);
    };
    paginacion.appendChild(btn);
  }
}

function ordenar(direccion) {
  const copia = [...relojes];
  copia.sort((a, b) => direccion === 'asc' ? a.precio - b.precio : b.precio - a.precio);
  mostrarCatalogo(copia, paginaActual);
}

mostrarCatalogo(relojes);
