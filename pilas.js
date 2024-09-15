const Pilas = document.getElementById('Lista de frutas y verduras');
const enviarButton = document.getElementById('Enviar');
const resultado = document.getElementById('resultado');

let seleccionar = [];

enviarButton.addEventListener('click', () => {
  seleccionar = [];
  const checkboxes = Pilas.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      seleccionar.push(checkbox.id);
    }
  });
  if (seleccionar.length > 4) {
    alert('Por favor solo seleccione 4 gracias!');
  } else {
    resultado.innerText = `Seleccionaste: ${seleccionar.join(', ')}`;
  }
});