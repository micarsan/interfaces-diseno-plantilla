window.addEventListener("load", function () {
    document.querySelector('#content aside div.button').addEventListener('click', function() {
        document.querySelector('#content aside').classList.toggle('active');
    });
});