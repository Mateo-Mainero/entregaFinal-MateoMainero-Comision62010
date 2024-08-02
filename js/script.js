
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    //********************* HEADER *********************
    function renderHeader() {
        const header = document.createElement('header');               
        app.appendChild(header);
        
    }
    

                                 //NAVEGADOR 
 
 function renderNav() {
    const app = document.getElementById('app'); 
    const nav = document.createElement('nav');     
    const navMenu = document.createElement('div');
    navMenu.className = 'nav-menu';

    // Crear el contenedor del video de fondo
    const videoBackground = document.createElement('div');
    videoBackground.className = 'video-background';

    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.id = 'backgroundVideo';

    const source = document.createElement('source');
    source.src = 'https://assets.turismocity.com/img/video-space1920x490.mp4';
    source.type = 'video/mp4';

    video.appendChild(source);
    videoBackground.appendChild(video);

    // Agregar el video de fondo al body
    document.body.appendChild(videoBackground);

    // Crear el enlace del logo
    const logoLink = document.createElement('a');
    logoLink.href = '#';  // Usamos '#' como marcador por defecto

    const logo = document.createElement('img');
    logo.src = './img/icono2.png'; 
    logo.alt = 'logo';
    logo.className = 'nav-logo';

    logoLink.appendChild(logo); // Colocar la imagen dentro del enlace

    // Manejar la navegación al hacer clic en el logo
    logoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        // Lógica para navegar a la sección renderHome
        renderHome();
    });

    nav.appendChild(logoLink); // Colocar el enlace del logo en la barra de navegación

    // Crear los botones de navegación
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', renderHome);

    const cartButton = document.createElement('button');
    cartButton.textContent = 'Carrito';
    cartButton.addEventListener('click', renderCart);

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'Beneficios';
    aboutButton.addEventListener('click', renderAbout);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contacto';
    contactButton.addEventListener('click', renderContact);

    const themeSwitch = document.createElement('label');
    themeSwitch.className = 'switch';
    const sunIcon = '<span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>';
    const moonIcon = '<span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>';

    themeSwitch.innerHTML = `
        ${moonIcon}
        <input type="checkbox" class="input">
        <span class="slider"></span>
        ${sunIcon}
    `;

    const themeCheckbox = themeSwitch.querySelector('.input');
    themeCheckbox.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme', this.checked);
        localStorage.setItem('theme', this.checked ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeCheckbox.checked = true;
    }

    // Botones al menú de navegación
    navMenu.appendChild(homeButton);
    navMenu.appendChild(cartButton);
    navMenu.appendChild(aboutButton);
    navMenu.appendChild(contactButton);
    navMenu.appendChild(themeSwitch);

    const menuIcon = document.createElement('button');
    menuIcon.className = 'icon';
    menuIcon.innerHTML = '<i class="fa fa-bars"></i>';
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('responsive');
    });

    nav.appendChild(navMenu);
    nav.appendChild(menuIcon); 
    app.appendChild(nav);
}

document.addEventListener('DOMContentLoaded', renderNav);

                          //seccion ver carrito 
    function renderCart() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container cart-container';
    
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            const emptyCartMsg = document.createElement('p');
            emptyCartMsg.textContent = 'No hay viajes en el carrito.';
            emptyCartMsg.className = 'empty-cart-msg';
            container.appendChild(emptyCartMsg);
        } else {
            let total = 0;
    
            const cartItemsContainer = document.createElement('div');
            cartItemsContainer.className = 'cart-items';
    
            cart.forEach(item => {
                total += item.price;
    
                const card = document.createElement('div');
                card.className = 'card cart-card';
    
                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.name;
                card.appendChild(image);
    
                const details = document.createElement('div');
                details.className = 'card-details';
    
                const itemName = document.createElement('h3');
                itemName.textContent = item.name;
    
                const itemPrice = document.createElement('p');
                itemPrice.textContent = `Precio: $${item.price}`;
    
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Eliminar del carrito';
                removeButton.className = 'btn-carrito btn-danger';
                removeButton.addEventListener('click', () => removeFromCart(item));
    
                // Creación del icono de eliminar (SVG)
                const trashIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                trashIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                trashIcon.setAttribute('width', '16');
                trashIcon.setAttribute('height', '16');
                trashIcon.setAttribute('fill', 'currentColor');
                trashIcon.setAttribute('class', 'bi bi-trash3');
                trashIcon.setAttribute('viewBox', '0 0 16 16');
                trashIcon.innerHTML = `<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>`;
    
                removeButton.appendChild(trashIcon);
    
                details.appendChild(itemName);
                details.appendChild(itemPrice);
                details.appendChild(removeButton);
    
                card.appendChild(details);
                cartItemsContainer.appendChild(card);
            });
    
            const totalContainer = document.createElement('div');
            totalContainer.className = 'cart-summary';
    
            const totalText = document.createElement('p');
            totalText.className = 'cart-p';
            totalText.textContent = `Total a pagar: $${total}`;
    
            const pagarButton = document.createElement('button');
            pagarButton.textContent = 'Pagar';
            pagarButton.className = 'btn-pagar btn-success';
            pagarButton.addEventListener('click', () => handlePagar(cart));
    
            totalContainer.appendChild(totalText);
            totalContainer.appendChild(pagarButton);
    
            container.appendChild(cartItemsContainer);
            container.appendChild(totalContainer);
        }
    
        app.appendChild(container);
    }

    function handlePagar(viaje) {
        let title = `¡Estas seguro de comprar ${viaje.length} viaje${viaje.length > 1 ? 's' : ''}!`;
    
        Swal.fire({
            title: title,
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Comprar!",
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('cart');
    
                const viajeNames = viaje.map(viaje => viaje.name).join(", ");
                
    
                Swal.fire({
                    title: "¡Comprado!",
                    text: `Compraste ${viajeNames}`,
                    icon: "success"
                });
    
                renderCart();
            } else {
                Swal.fire({
                    title: "¡Pago cancelado!",
                    text: "Tu compra fue cancelada.",
                    icon: "error"
                });
            }
        });
    }

    function addToCart(viaje) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(viaje);
        localStorage.setItem('cart', JSON.stringify(cart));
        Swal.fire({
            title: `${viaje.name} 
            se agrego al carrito!`,
            icon: 'success',
            showConfirmButton: false,
            footer: '<span class="rojo"> Esta  informacion es importante!</span>',
            timer: 1200,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            
        });
     
    }
    


// --------------------------------------------- HTML -------------------------------------------------------------------------------------------------------



                                        //seccion home 
    function renderHome() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container';

        const lugares = [
            { id: 1, name: 'Escapada Punta Cana', price: 3899, image: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/offer-iata/retina/PUJ-4.jpg' },
            { id: 2, name: 'Maravillosa Bayahibe', price: 4106, image: 'https://images.weserv.nl/?url=https://s3.amazonaws.com/mean.machine-dev/1666708292040_LRM%20%281%29.jpg&h=218' },
            { id: 3, name: 'Punta Cana de 8 a 12 días all inclusive', price: 1951, image: 'https://images.weserv.nl/?url=https://www.deturista.com/entity/deturista/images/Product/1684/medium/punta_cana_b.jpg&h=218' },
            { id: 4, name: 'Porto Seguro All Inclusive', price: 2951, image: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/offer-iata/retina/BPS-1.jpg' },
            { id: 5, name: 'Playa del Carmen', price: 2745, image: 'https://images.weserv.nl/?url=https://s3.amazonaws.com/mean.machine-dev/1659015656851_image%20-%202022-07-28T104051.285.jpg&h=218' },
            { id: 7, name: 'Cumbuco', price: 2472, image: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/offer-iata/retina/1BU.jpg' },
            { id: 8, name: 'MSC a Brasil y Uruguay', price: 1816, image: 'https://images.weserv.nl/?url=https://www.atrapalo.com.ar/common/photo/cru/139486/0/ticr_640_350.jpg&h=218' },
            { id: 9, name: 'Maravillosa Bayahibe', price: 2857, image: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/offer-iata/retina/CUN.jpg' },
            { id: 10, name: 'Multidestino Bayahibe y Punta Cana', price: 2901, image: 'https://images.weserv.nl/?url=https://www.sritour.com.ar/images/productos/1020/Punta-Cana-x-10-dias-con-All-Inclusive_92.png?55&h=218' },
            { id: 11, name: 'Cancún y Riviera Maya', price: 1950, image: 'https://images.weserv.nl/?url=https://s3.amazonaws.com/mean.machine-dev/1666708292040_LRM%20%281%29.jpg&h=218' },
            { id: 12, name: 'Tulum All Inclusive', price: 3148, image: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/offer-iata/retina/TQO.jpg' },
            { id: 11, name: 'Varadero y La Habana', price: 1950, image: 'https://assets.turismocity.com/cdn-cgi/image/format=auto/img/offer-iata/retina/BY1-1.jpg' },
        ];

        lugares.forEach(lugar => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${lugar.image}" alt="${lugar.name}">
                <h3 class="h3-card" >${lugar.name}</h3>
                <p class="p-card" >Precio: $${lugar.price}</p>

                <div class="boton-div">
                    <button data-id="${lugar.id}" class="btn btn-primary botonn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/> </svg> Agregar al carrito</button>
                </div>
                <li data-v-097c0db5="" class="airline-item"><a data-v-097c0db5="" href="//www.aerolineas.com.ar/" class=""><img data-v-097c0db5="" width="10px" src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/providers/favicon/svg/AR.svg" alt="Aerolineas_Argentinas"> Aerolíneas Argentinas</a></li>
            `;
            card.querySelector('button').addEventListener('click', () => addToCart(lugar));
            container.appendChild(card);
        });

        app.appendChild(container);
        
    }




    




                                 //Seccion Beneficios

     function renderAbout() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container';
    
        container.innerHTML = `
            <section id="about-intro">
            <img data-v-1e5d41f9="" alt="home-footer-vuelos" data-src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/home/Vuelos_2.svg" src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/home/Vuelos_2.svg" lazy="loaded">
                <h3>El mejor buscador de vuelos</h3>
                <p>Cuando buscás en Travel Project nosotros nos encargamos del trabajo pesado.</p>
                <p>Comparamos rápidamente miles de vuelos de todas las agencias de viajes y te mostramos el más barato y conveniente.</p>
                <p>Así de simple.</p>
            
            <img data-v-1e5d41f9="" alt="home-footer-ahorra" data-src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/home/Ahorra_2.svg" src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/home/Ahorra_2.svg" lazy="loaded">
                <h3>Ahorrá tiempo y dinero</h3>
                <p>Si un vuelo te interesa, nosotros nos ocupamos.</p>
                <p>Creá gratis una alerta de precio y enterate primero si baja de precio.</p>
                <p>Viajar se trata de disfrutar, por eso no queremos hacerte perder tiempo.</p>    
            </section>
            
            <section id="our-team">
            
            <img data-v-1e5d41f9="" alt="home-footer-elegi" data-src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/home/Elegi_2.svg" src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/home/Elegi_2.svg" lazy="loaded">
                <h3>¡Llegá primero a las ofertas!</h3>
                <p>Somos expertos en encontrar vuelos en oferta.</p>
                <p>Cuando creemos que pueden interesarte, te avisamos inmediatamente para que puedas aprovecharlas.</p>
                <p>Ah, ¿sabías que registrarse es gratis y no lleva más que un click?</p>
            
            <img data-v-1e5d41f9="" alt="home-footer-redes" data-src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/home/Redes_2.svg" src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/home/Redes_2.svg" lazy="loaded">
                <h3>Seguinos</h3>
                <p>Si un vuelo te interesa, nosotros nos ocupamos.</p>
                <p>Creá gratis una alerta de precio y enterate primero si baja de precio.</p>
                <p>Viajar se trata de disfrutar, por eso no queremos hacerte perder tiempo.</p>
                
            </section>
    
            <section id="why-choose-us">
            <div class="team-members">
                    <div class="team-member">
                        <img src="https://st2.depositphotos.com/1518767/7621/i/450/depositphotos_76210335-stock-photo-smiling-travel-agent-looking-at.jpg" alt="Miembro del equipo">
                        <h4>John Wick</h4>
                        <p>Agente de viajes con más de 12 años de experiencia en el mercado.</p>
                    </div>
                    <div class="team-member">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqrn9iC3rTjYubk0oaQCvdXrV8oEhNHKZbUR2pcn_03JyGhbpLvqPHPoD7N_BRlnpk5E&usqp=CAU" alt="Miembro del equipo">
                        <h4>Sarah Connor</h4>
                        <p>Especialista en ventas y atención al cliente, comprometida con la satisfacción total.</p>
                    </div>
                </div>
            </section>
    
            
        `;
    
        app.appendChild(container);
    }





                                   //Seccion Contacto 
    function renderContact() {
        clearContainer();
        
        const container2 = document.createElement('div');
        container2.className = 'container';
    
        const h1 = document.createElement('h1');
        h1.className = 'h1-contact';
        h1.innerHTML = 'Contactanos';
    
        const divPadre = document.createElement('div');
        divPadre.className = 'div-padre';
    
        const form = document.createElement('form');
        form.className = 'form-form';
        form.innerHTML = `
            <input type="text" id="name" placeholder="Nombre" required class="form-control">
            <input type="email" id="email" placeholder="Correo Electrónico" required class="form-control">
            <textarea id="message" placeholder="Mensaje" required class="form-control textarea"></textarea>
            <div class="div-btn-form">
                <button type="submit" class="btn-form btn-primary">Enviar</button>
            </div>
        `;
        form.addEventListener('submit', handleContactSubmit);
    
        divPadre.appendChild(h1);
        divPadre.appendChild(form);
        container2.appendChild(divPadre);
        app.appendChild(container2);
    }
    
    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
    function handleContactSubmit(event) {
        
        const name = document.getElementById('name').value;
       

        event.preventDefault();
        Swal.fire({
            title: `${name} tu mensaje fue enviado!`,
            icon: 'success',
            showConfirmButton: false,
            footer: '<span class="rojo"> Esta  informacion es importante!</span>',
            timer: 1300,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            
        });


        // Limpia el formulario después de enviarlo
        clearForm();
    }
    function removeFromCart(viaje) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== viaje.id);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        
        Swal.fire({
            title: `${viaje.name} 
            se elimino al carrito!`,
            icon: 'error',
            showConfirmButton: false,
            footer: '<span class="rojo"> Esta  informacion es importante!</span>',
            timer: 1300,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            
        });
    }



    function clearContainer() {
        const container = document.querySelector('.container');
        if (container) {
            container.remove();
        }
    }


                                 //Alert Notificaciones

function showAlert() {
    // Crear el contenedor de la alerta
    const alertContainer = document.createElement('div');
    alertContainer.className = 'custom-alert';

    // Crear el elemento de la imagen
    const alertImage = document.createElement('img');
    alertImage.src = './img/iconoAlert.png'; 
    alertImage.alt = 'Notification Image';
    alertImage.className = 'alert-img';

    // Crear el mensaje de la alerta
    const alertMessage = document.createElement('p');
    alertMessage.textContent = '¡Tu próximo viaje, aquí!';
    alertMessage.className = 'alert-message';

    const alertMessageDos = document.createElement('p');
    alertMessageDos.textContent = 'Activá las notificaciones y recibí nuestras mejores ofertas';
    alertMessageDos.className = 'alert-messageDos';

    // Crear el botón para cerrar la alerta
    const alertButton = document.createElement('button');
    alertButton.textContent = 'Cerrar';
    alertButton.className = 'alert-button';
    alertButton.onclick = () => {
        alertContainer.style.display = 'none';
    };

    // Añadir la imagen, mensaje y botón al contenedor de la alerta
    alertContainer.appendChild(alertImage);
    alertContainer.appendChild(alertMessage);
    alertContainer.appendChild(alertMessageDos);
    alertContainer.appendChild(alertButton);

    // Añadir el contenedor de la alerta al body
    document.body.appendChild(alertContainer);
    }
    


   // Aqui corro la app
   
    renderHeader();
    renderNav();
    renderHome();
    renderAbout();
    renderContact(); 
    showAlert();        
});





