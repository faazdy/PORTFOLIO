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

