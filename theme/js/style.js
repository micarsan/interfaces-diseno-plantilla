
window.addEventListener("load", function(){

    //añadimos efecto blur a nav cuando hagamos foco en búsqueda
    document.querySelector('#searchbox input').addEventListener("focus", function(){
        document.querySelector('header nav').classList.add('blur');
    });
    document.querySelector('#searchbox input').addEventListener("focusout", function(){
        document.querySelector('header nav').classList.remove('blur');
    });

    
    //Capa de usuario
    document.querySelector('header #userbox').addEventListener('click', ()==> {
        //this.classList.toggle('active');
    });

});