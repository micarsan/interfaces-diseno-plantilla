window.addEventListener("load", function(){

    let images = document.querySelectorAll('.product-gallery img');
    for( let image of images ) {
        image.addEventListener('click', function(){
            overlay(true);

            let container = document.createElement('div');
            container.id='full-screen-image';
            
            let img = document.createElement('img');
            img.setAttribute('src', image.getAttribute('src'));
            img.setAttribute('style', 'height: 95%; margin: auto;')
            
            container.appendChild(img);
            document.body.appendChild(container);

            setTimeout(() => {
                container.classList.add('show');
            }, 10);

            container.addEventListener('click', function(){
                overlay(false);
                container.remove();
            });
        });
    }

});