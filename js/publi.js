// Ejecutar createPubli una vez que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', createPubli);

function createPubli() {
    // Crear el div .brands-wrapper
    const brandsWrapper = document.createElement('div');
    brandsWrapper.className = 'brands-wrapper';
    
    const brandsText = document.createElement('span');
    brandsText.className = 'hidden-xs hidden-sm brands-text hidden-md';
    brandsText.textContent = 'Compará cientos de sitios de viajes en una sola búsqueda';

    const brandsContainer = document.createElement('div');
    brandsContainer.className = 'brands-container';

    const brandImages = [
        { src: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/brands/Pax.png', title: 'Asistencia al viajero', alt: 'Asistencia al viajero' },
        { src: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/brands/Booking.png', title: 'Booking', alt: 'Booking' },
        { src: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/brands/Avantrip.png', title: 'Avantrip', alt: 'Avantrip' },
        { src: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/brands/Flybondi.png', title: 'Flybondi', alt: 'Flybondi' },
        { src: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/brands/Volala.png', title: 'Volala', alt: 'Volala' },
        { src: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/brands/Atrapalo.png', title: 'Atrapalo', alt: 'Atrapalo' },
        { src: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/brands/JetSmart.png', title: 'JetSmart', alt: 'JetSmart' }
    ];

    brandImages.forEach(brand => {
        const a = document.createElement('a');
        a.target = '_blank';

        const img = document.createElement('img');
        img.src = brand.src;
        img.title = brand.title;
        img.alt = brand.alt;

        a.appendChild(img);
        brandsContainer.appendChild(a);
    });

    brandsWrapper.appendChild(brandsText);
    brandsWrapper.appendChild(brandsContainer);

    // Agregar el div .brands-wrapper al contenedor principal
    document.getElementById('publi-container').appendChild(brandsWrapper);
    
}
