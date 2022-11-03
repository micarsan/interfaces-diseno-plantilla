
window.addEventListener("load", function () {

    // Blur efect when focus on header search input and animations
    document.querySelector('#searchbox input').addEventListener("focus", function () {

        let header_h1 = document.querySelector('header .header_top h1');

        header_h1.classList.add('blur');

        let available_width = header_h1.offsetWidth + 74;
        let input_width = available_width / 2;
        let input_margin = available_width / 4;

        if (available_width < 550) {
            input_width = available_width - 25;
            input_margin = 0;
        }

        document.querySelector('header #searchbox input').style.width = input_width + 'px';
        document.querySelector('header #searchbox input').style.marginRight = input_margin + 'px';
    });

    document.querySelector('#searchbox input').addEventListener("focusout", function () {

        document.querySelector('header .header_top h1').classList.remove('blur');

        document.querySelector('header #searchbox input').style.width = '';
        document.querySelector('header #searchbox input').style.marginRight = '';

    });



    // User box
    document.querySelector('header #userbox>a').addEventListener('click', function () {
        this.parentNode.classList.toggle('active');
    });


    // product galleries
    product_gallery();

    // product gallery full screen image
    let images = document.querySelectorAll('.product-gallery img');
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            full_screen_image(i);
    });

    }
});

/**
 * Create and insert image in full screen
 * Need index of array
 */
function full_screen_image(index_key) {

    if (document.querySelector('#full-screen-image') ) {
        document.querySelector('#full-screen-image button.left').remove();
        document.querySelector('#full-screen-image button.right').remove();
        document.querySelector('#full-screen-image img').remove();

        var container = document.querySelector('#full-screen-image');
    } else {
        var container = document.createElement('div');
        container.id = 'full-screen-image';
    }

    let images = document.querySelectorAll('.product-gallery img');

    let image = images[index_key];
    
    if (!document.querySelector('#overlay_image')) {
        let overlay_image = document.createElement('div');
        overlay_image.id = 'overlay_image';
        overlay_image.classList.add('overlay');
        overlay_image.classList.add('show');

        container.appendChild(overlay_image);
    }
    

    let left_button = document.createElement('button');
    left_button.classList.add('left');
    left_button.innerHTML = '&#10132;';

    if( index_key > 0 ) {
        left_button.addEventListener('click', function(){
            full_screen_image(index_key-1);
        });
    }

    let right_button = document.createElement('button');
    right_button.classList.add('right');
    right_button.innerHTML = '&#10132;';
    
    if( index_key < images.length-1 ) {
        right_button.addEventListener('click', function(){
            full_screen_image(index_key+1);
        });
    }

    if (index_key == images.length-1) {
        right_button.addEventListener('click', function(){
            index_key = 0;
            full_screen_image(index_key);
        });
    }

    if (index_key == 0) {
        left_button.addEventListener('click', function(){
            index_key = images.length-1;
            full_screen_image(index_key);
        });
    }

    let img = document.createElement('img');

    img.setAttribute('src', image.getAttribute('src'));
    img.setAttribute('style', 'height: 95%; margin: auto; z-index:15;');

    container.appendChild(left_button);
    container.appendChild(img);
    container.appendChild(right_button);

    document.body.appendChild(container);

    setTimeout(() => {
        container.classList.add('show');
        full_screen_image_buttons();
    }, 10);

    
    
    document.querySelector('.overlay.show').addEventListener('click', function () {
        console.log('overlay click');
        overlay(false);
        container.remove();
    });
}

/**
 * Insert back and next buttons on full screen image
 */
function full_screen_image_buttons() {
    let image = document.querySelector('#full-screen-image img');
    if (image) {
        let position = image.getBoundingClientRect();
        console.log(position)
        let positionleft = position.left + window.scrollX;
        let positionright = position.right;
        let izquierda = document.querySelector('#full-screen-image button.left');
        let right = document.querySelector('#full-screen-image button.right');
        let width = image.offsetWidth;
        izquierda.setAttribute('style', 'left: ' + (positionleft - 25) + 'px; z-index:20;')
        right.setAttribute('style', 'right: ' + (positionright - width - 25) + 'px; z-index:20;')
    }

}

window.addEventListener("resize", function () {
    // product galleries
    product_gallery();
    full_screen_image_buttons();
});

function product_gallery() {

    // Landscape Galleries
    let galleries = document.querySelectorAll('.product-gallery');
    for (let gallery of galleries) {

        let scrool_width = gallery.querySelector('img').offsetWidth + 20;

        // Image width (full width in mobile portrait)
        let image_width = gallery.querySelector('div').offsetWidth - 4;
        if (image_width < 500) {

            // Check and create if <style data-gallery> not exist
            if (!document.querySelector('style[data-gallery]')) {
                let style = document.createElement('style');
                style.setAttribute('data-gallery', '');
                document.head.appendChild(style);
            }

            let images = gallery.querySelectorAll('img');
            document.querySelector('style[data-gallery]').textContent = '.product-gallery.landscape div div>img, .product-gallery.portrait div div>img { width: ' + image_width + 'px; } ';

            scrool_width = image_width + 20;
        } else {
            if (document.querySelector('style[data-gallery]')) {
                document.querySelector('style[data-gallery]').remove();
            }
        }

        // buttons
        gallery.querySelector('button.left').addEventListener('click', function () {
            gallery.querySelector('div').scrollLeft += -scrool_width;
        });

        gallery.querySelector('button.right').addEventListener('click', function () {
            gallery.querySelector('div').scrollLeft += scrool_width;
        });

    }

}


/**
 * Show or hide overlay layer
 */
function overlay(status) {
    if (status) {
        document.getElementById('overlay').classList.add('show');
    } else {
        document.getElementById('overlay').classList.remove('show');
    }
}

