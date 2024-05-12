const darkTheme = document.getElementById('tema');


function enableDarkTheme() {
    document.querySelector('main').classList.add('dark-theme-main');
    document.body.classList.add('dark-theme-body');

    document.querySelector('#intro').classList.remove('intro');
    document.querySelector('#intro').classList.add('intro-dark');
}

function disableDarkTheme() {
    document.querySelector('main').classList.remove('dark-theme-main');
    document.body.classList.remove('dark-theme-body');
    document.querySelector('#intro').classList.add('intro');
    document.querySelector('#intro').classList.remove('intro-dark');
}

darkTheme.addEventListener('change', function(){
    if (this.checked){
        enableDarkTheme();
    }else{
        disableDarkTheme();
    }
});

//scroll
document.addEventListener('DOMContentLoaded', function() {
    const enlacesHeader = document.querySelectorAll('header a');
    enlacesHeader.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace siga el href #

            const targetId = this.getAttribute('href'); // Obtiene el ID del destino del enlace
            const targetElement = document.querySelector(targetId); // Selecciona el elemento destino

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Hace scroll suavemente hacia el elemento destino
            }
        });
    });
});


