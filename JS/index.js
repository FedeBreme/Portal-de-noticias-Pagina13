var slideIndex = 0;
            showSlides();
    
            function showSlides() {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {slideIndex = 1}
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active";
                setTimeout(showSlides, 2000); // Cambiar imagen cada 2 segundos
            }
    
            function plusSlides(n) {
                showSlides(slideIndex += n);
            }
    
            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

/*LOGIN*/

function login(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'Camila' && password === '12345') {
      window.location.href = 'index.html?index=' + encodeURIComponent(username);
    } else {
      document.getElementById('error-message').textContent = 'Ese usuario no existe';
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const usuario = urlParams.get('usuario');
  
    if (usuario) {
      const bienvenidaElement = document.getElementById('bienvenida');
      bienvenidaElement.textContent = `Bienvenido/a ${usuario}`;
    }
  });
