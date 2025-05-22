document.getElementById("calcButton").addEventListener("click", function () {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  let resultado = peso / altura ** 2;
  
  alert("Su imc es de: " + resultado.toFixed(2));
});