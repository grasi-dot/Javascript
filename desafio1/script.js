
function concatFuncion(input1, input2) {
  let concat = input1 + ' ' + input2;

  return alert(`Concatenação: ${concat}`);
}

function sumFuncion(input1, input2) {
  let sum = input1 + input2;

  return alert(`A soma é: ${sum}`);
}

function subtractionFuncion(input1, input2) {
  let subtraction = input1 - input2;

  return alert(`A subtração é: ${subtraction}`);
}

function multiplicationFuncion(input1, input2) {
  let multiplication = input1 * input2;

  return alert(`A multiplicação é: ${multiplication}`);
}

function divisionFuncion(input1, input2) {
  let division = input1 / input2;

  return alert(`A divisão é: ${division}`);
}

document.getElementById("concatBtn").addEventListener("click", function() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  concatFuncion(input1, input2);

  document.getElementById("input1").value = '';
  document.getElementById("input2").value = '';
});

document.getElementById("sumBtn").addEventListener("click", function() {
  let input1 = parseInt(document.getElementById("sumInput1").value);
  let input2 = parseInt(document.getElementById("sumInput2").value);

  sumFuncion(input1, input2);

  document.getElementById("sumInput1").value = '';
  document.getElementById("sumInput2").value = '';
});

document.getElementById("subtractionBtn").addEventListener("click", function() {
  let input1 = document.getElementById("subtractioInput1").value;
  let input2 = document.getElementById("subtractioInput2").value;

  subtractionFuncion(input1, input2);

  document.getElementById("subtractioInput1").value = '';
  document.getElementById("subtractioInput2").value = '';
});

document.getElementById("multiplicationBtn").addEventListener("click", function() {
  let input1 = document.getElementById("multiplicationInput1").value;
  let input2 = document.getElementById("multiplicationInput2").value;

  multiplicationFuncion(input1, input2);

  document.getElementById("multiplicationInput1").value = '';
  document.getElementById("multiplicationInput2").value = '';
});

document.getElementById("divisionBtn").addEventListener("click", function() {
  let input1 = document.getElementById("divisionInput1").value;
  let input2 = document.getElementById("divisionInput2").value;

  divisionFuncion(input1, input2);

  document.getElementById("divisionInput1").value = '';
  document.getElementById("divisionInput2").value = '';
});

