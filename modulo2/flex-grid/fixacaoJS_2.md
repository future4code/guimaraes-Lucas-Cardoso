```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let howManyTimes = 0
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      howManyTimes++
    }
  }
  
  if (howManyTimes > 0) {
    return `O número ${numeroEscolhido} aparece ${howManyTimes}x`
  } else {
    return 'Número não encontrado'
  }
}
```