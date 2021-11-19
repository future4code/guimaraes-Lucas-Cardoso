// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a largura')
  const area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Digite o ano atual')
  const anoDeNascimento = prompt('Digite o ano de nascimento')
  const idade = anoAtual - anoDeNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu e-mail')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let output = []
  const cor1 = prompt('Digite sua cor favorita')
  const cor2 = prompt('Digite sua segunda cor favorita')
  const cor3 = prompt('Digite sua terceira cor favorita')
  output.push(cor1, cor2, cor3)

  console.log(output)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0]
  const ultimo = array[array.length - 1]

  array[0] = ultimo
  array[array.length - 1] = primeiro

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt('Digite o ano atual')
  const anoNascimento = prompt('Digite seu ano de nascimento')
  const anoEmissao = prompt('Digite o ano de emissão do RG')

  console.log(anoAtual - anoEmissao >= 5)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const mais18 = prompt('Tem mais de 18?')
  const EMCompleto = prompt('Ensino médio completo?')
  const horario = prompt('Tem disponibilidade de horário?')

  console.log(mais18 === "sim" && EMCompleto === "sim" && horario === "sim")
}