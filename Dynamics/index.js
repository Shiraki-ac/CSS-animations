document.addEventListener('DOMContentLoaded', function(){
    const modcss1 = document.getElementById('modcss1');
    const modcss2 = document.getElementById('modcss2');
    const modcss3 = document.getElementById('modcss3');
    const modcss4 = document.getElementById('modcss4');
    const modcss5 = document.getElementById('modcss5');
    const modcss6 = document.getElementById('modcss6');

    modcss1.onclick = girar;
    modcss2.onclick = cambiar;
    modcss3.onclick = mover;
    modcss4.onclick = pequeno;
    modcss5.onclick = eliminar;
    modcss6.onclick = agrandar;

    function girar() {
        const imagen = document.querySelector('.img1');
        if (imagen.style.transform === 'rotate(45deg)') {
            imagen.style.transform = 'none';
        } else {
            imagen.style.transform = 'rotate(45deg)';
        }
    }

    function cambiar() {
        const imagen = document.querySelector('.img2');
        if (imagen.src === 'nueva-imagen.jpg') {
            imagen.src = 'https://i.pinimg.com/originals/07/90/ab/0790ab2e4e0e578223367ac5e7bbe19d.jpg';
        } else {
            imagen.src = 'https://images.vexels.com/media/users/3/135604/isolated/preview/1126ab94d700e99242bf21458f4b4b84-icono-de-c--rculo-de-cara-de-gato-by-vexels.png';
        }
    }

    function mover() {
        const imagen = document.querySelector('.img3');
        if (imagen.style.transform === 'translateX(100px)') {
            imagen.style.transform = 'none';
        } else {
            imagen.style.transform = 'translateX(100px)';
        }
    }

    function pequeno() {
        const imagen = document.querySelector('.img4');
        if (imagen.style.transform === 'scale(0.5)') {
            imagen.style.transform = 'none';
        } else {
            imagen.style.transform = 'scale(0.5)';
        }
    }

    function eliminar() {
        const imagen = document.querySelector('.img5');
        if (imagen.style.display === 'none') {
            imagen.style.display = 'block';
        } else {
            imagen.style.display = 'none';
        }
    }

    function agrandar() {
        const imagen = document.querySelector('.img6');
        if (imagen.style.transform === 'scale(1.5)') {
            imagen.style.transform = 'none';
        } else {
            imagen.style.transform = 'scale(1.5)';
        }
    }
});
