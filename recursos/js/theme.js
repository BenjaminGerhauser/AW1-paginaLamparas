const toggleButton = document.getElementById('boton-tema');
const currentTheme = localStorage.getItem('theme') || 'light';
const buttonImage = document.getElementById('boton-imagen');
// const logo = document.getElementById('contenedor-logo');

// Establecer el tema al cargar la página
document.documentElement.setAttribute('data-theme', currentTheme);


if (currentTheme === 'dark') {
  buttonImage.src = 'recursos/imagenes/logos/sidebar/bx-sun.svg';
} else {
  buttonImage.src = 'recursos/imagenes/logos/sidebar/bx-moon.svg';
}

toggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');  // Guarda la preferencia en localStorage
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); // Guarda la preferencia en localStorage
  }
  if (buttonImage.src.includes('recursos/logos/sidebar/bx-moon.svg')) {
    buttonImage.src = 'recursos/logos/sidebar/bx-sun.svg';
  } else {
    buttonImage.src = 'recursos/logos/sidebar/bx-moon.svg';
  }
  // logo.classList.toggle('brillo-desactivado');
});
