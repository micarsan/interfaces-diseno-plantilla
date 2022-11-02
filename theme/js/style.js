
window.addEventListener("load", function(){

    // Blur efect when focus on header search input and animations
    document.querySelector('#searchbox input').addEventListener("focus", function(){
        
        let header_h1 =  document.querySelector('header .header_top h1');
        
        header_h1.classList.add('blur');

        let available_width = header_h1.offsetWidth + 74;
        let input_width = available_width/2;
        let input_margin = available_width/4;
        
        if( available_width < 550 ) {
            input_width = available_width-25;
            input_margin = 0;
        }

        document.querySelector('header #searchbox input').style.width = input_width + 'px';
        document.querySelector('header #searchbox input').style.marginRight = input_margin +'px';
    });
    
    document.querySelector('#searchbox input').addEventListener("focusout", function(){
        
        document.querySelector('header .header_top h1').classList.remove('blur');

        document.querySelector('header #searchbox input').style.width = '';
        document.querySelector('header #searchbox input').style.marginRight = '';

    });

    

    // User box
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

    }

}