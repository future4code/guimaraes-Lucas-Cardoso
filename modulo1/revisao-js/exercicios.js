// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((number) => number % 2 == 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((number) => number % 2 == 0).map((number) => number * number)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maior = num1 > num2 ? num1 : num2
    const menor = num1 < num2 ? num1 : num2
    const divisivel = maior % menor === 0

    const obj = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: maior - menor,
    }

    return obj
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = []
    let contadorPares = 0

    for (let i = 0; i < n; i++) {
        pares.push(contadorPares)
        contadorPares += 2
    }

    return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}