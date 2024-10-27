function calculate(number){
  let tabuada = document.querySelector("#tabuada tbody");

  tabuada.innerHTML = '';

  for (multiplicator = 0; multiplicator <= 10; multiplicator++) {
    let result = number * multiplicator;
    let template = `
      <td>${number}</td>
      <td>x</td>
      <td>${multiplicator}</td>
      <td>=</td>
      <td>${result}</td>
    `;

    let tr = document.createElement('tr');
    tr.innerHTML = template;
    tabuada.append(tr);
    document.getElementById("tabuada").style.display = 'table';
  }
}


document.getElementById("calculateBtn").addEventListener("click", function() {
  let number = document.getElementById("number").value;

  calculate(number);

});