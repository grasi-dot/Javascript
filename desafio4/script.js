class imcClass {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }

  calculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return "Valor invalido";
    }
    const imc = this.weight / (this.height ** 2);
    return imc.toFixed(2);
  }

  result() {
    const imc = this.calculate();
    if (isNaN(imc)) return "Erro: IMC inválido. Verifique os valores inseridos.";

    if (imc < 18.5) {
      return `Seu IMC é ${imc} (Abaixo do peso)`;
    } else if (imc < 24.9) {
      return `Seu IMC é ${imc} (Peso normal)`;
    } else if (imc < 29.9) {
      return `Seu IMC é ${imc} (Sobrepeso)`;
    } else {
      return `Seu IMC é ${imc} (Obesidade)`;
    }
  }
}

document.getElementById("calcularBtn").addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  
  const imc = new imcClass(weight, height);
  document.getElementById("resultado").textContent = imc.result();
  
  document.getElementById("weight").value = '';
  document.getElementById("height").value = '';
});
