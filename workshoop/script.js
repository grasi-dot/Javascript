function impar(entrada) {
  if (entrada % 2 === 0) {
   return alert('Este numero é par');
  }else {
   return alert('Este numero é impar');
  }
}

function estacoes(entrada){
  mes = entrada.toLowerCase()

  if ((mes === 'dezembro') || (mes === 'janeiro') || (mes === 'fevereiro')){
   return alert('A estação é Verão');
  } else if ((mes === 'marco') || (mes === 'abril') || (mes === 'maio')){
   return alert('A estação é Outono');
  } else if ((mes === 'junho') || (mes === 'julho') || (mes === 'agosto')){
    return alert('A estação é Inverno');
  } else if ((mes === 'setembro') || (mes === 'outubro') || (mes === 'novembro')){
   return alert('A estação é Primavera');
  } else {
   return alert('Entrada invalida');
  }
}

function temperatura(entrada){
  fahrenheit = (entrada * 9/5 ) + 32

  return alert(`A conversão para fahrenheit é: ${fahrenheit}°F`);
}

function primo(entrada) {
  
  if (entrada <= 1){
    return alert(`O ${entrada} não é primo.`)
  }

  for (let i = 2; i <= entrada; i++) {
    if (entrada % i === 0) {
      return alert(`O ${entrada} não é primo.`);
    }
  }

  return alert(`O ${entrada} é primo.`);
}

function somatorio(entrada) {
  let soma = 0
  for (let i = 1; i <= entrada; i++) {
    soma = soma + i
  }

  return alert(`O somatorio de numeros é ${soma}`);
}

function cubo(entrada) {
  cubo =  entrada ** 3;

  return alert(`O cubo é: ${cubo}`);
}

function divisivel(entrada1, entrada2) {
  if (entrada1 % entrada2 === 0){
    return alert(`O primeiro numero é divisivel pelo segundo `);
  } else {
    return alert(`O segundo numero  não é divisivel pelo segundo `);
  }
}


let entrada1 = prompt("Qual é o numero 1")

let entrada2 = prompt("Qual é o numero 2")


console.log(divisivel(entrada1, entrada2))