
window.addEventListener("load", function(){

    // Efecto blur a nav cuando hagamos foco en búsqueda
    document.querySelector('#searchbox input').addEventListener("focus", function(){
        document.querySelector('header nav').classList.add('blur');
    });
    document.querySelector('#searchbox input').addEventListener("focusout", function(){
        document.querySelector('header nav').classList.remove('blur');
    });

    

    // Capa de usuario
    document.querySelector('header #userbox>a').addEventListener('click', function(){
        this.parentNode.classList.toggle('active');
    });


    // product galleries
    product_gallery();

});

function product_gallery(){
    
    // Landscape Galleries
    let galleries = document.querySelectorAll('.product-gallery');
    for( let gallery of galleries ) {
        
        // buttons
        let scrool_width = gallery.querySelector('img').offsetWidth + 20;
        
        gallery.querySelector('button.left').addEventListener('click', function(){
            gallery.querySelector('div').scrollLeft += -scrool_width;
        });

        gallery.querySelector('button.right').addEventListener('click', function(){
            gallery.querySelector('div').scrollLeft += scrool_width;
        });

/*        gallery.querySelector('div').addEventListener('scrool', function(){
            if( gallery.querySelector('div').scrollLeft == 0 ) {
                console.log(gallery.querySelector('div').scrollLeft);
            }
        });
*/
    }

}