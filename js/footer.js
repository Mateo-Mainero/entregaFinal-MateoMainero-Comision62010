// FOOTER

function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'pie-pagina';

   

    const grupo1 = document.createElement('div');
    grupo1.className = 'grupo-1';

    const box1 = document.createElement('div');
    box1.className = 'box';
    const figure = document.createElement('figure');
    const aLogo = document.createElement('a');
    aLogo.href = './index.html';
    const imgLogo = document.createElement('img');
    imgLogo.src = './img/Bancos.jpg';
    imgLogo.alt = 'logo de footer';
    aLogo.appendChild(imgLogo);
    figure.appendChild(aLogo);
    box1.appendChild(figure);
    grupo1.appendChild(box1);

    const box2 = document.createElement('div');
    box2.className = 'box';
    const h2SobreNosotros = document.createElement('h2');
    h2SobreNosotros.textContent = 'Travel Project';
    const p1 = document.createElement('p');
    p1.textContent = 'Somos expertos en encontrar vuelos en oferta.';
    const p2 = document.createElement('p');
    p2.textContent = 'Cuando creemos que pueden interesarte, te avisamos inmediatamente para que puedas aprovecharlas, Travel Project siempre con vos.';
    box2.appendChild(h2SobreNosotros);
    box2.appendChild(p1);
    box2.appendChild(p2);
    grupo1.appendChild(box2);

    const box3 = document.createElement('div');
    box3.className = 'box';
    const h2Siguenos = document.createElement('h2');
    h2Siguenos.textContent = 'NUESTRAS REDES';
    const redSocial = document.createElement('div');
    redSocial.className = 'red-social';
    
    const socialMedia = [
        {name:'whatsapp', URL:'https://web.whatsapp.com/'},
        {name:'facebook', URL:'https://www.facebook.com/'},
        {name:'twitter', URL:'https://x.com/home?lang=es'},
        {name:'instagram', URL:'https://www.instagram.com/'},
    ];
    socialMedia.forEach(media => {
        const a = document.createElement('a');
        a.href = `${media.URL}`;
        a.target = "_blank";
        a.className = `fa fa-${media.name}`;
        redSocial.appendChild(a);
    });
    box3.appendChild(h2Siguenos);
    box3.appendChild(redSocial);
    grupo1.appendChild(box3);

    footer.appendChild(grupo1);

    const grupo2 = document.createElement('div');
    grupo2.className = 'grupo-2';
    const small = document.createElement('small');
    const currentYear = new Date().getFullYear();
    small.innerHTML = `&copy; ${currentYear} Todos los derechos reservados`;
    grupo2.appendChild(small);

    footer.appendChild(grupo2);


    
    document.querySelector('body').appendChild(footer);
}

// Llama a la funcion para renderizar el footer
renderFooter();