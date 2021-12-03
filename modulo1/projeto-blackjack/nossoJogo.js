// console.log('Bem vindo(a) ao jogo de Blackjack!')

// if (!confirm('Boas vindas ao jogo de Blackjack!')) {
//    console.log('O jogo acabou')
// } else {
//    blackjack()
// }

// function pontuacaoTotal (obj) {
//    return obj.carta1.valor + obj.carta2.valor
// }

// function blackjack () {
//    const usuario = {
//       carta1: comprarCarta(),
//       carta2: comprarCarta(),
//    }
//    const computador = {
//       carta1: comprarCarta(),
//       carta2: comprarCarta(),
//    }

//    console.log(`Usuário - cartas: ${usuario.carta1.texto} ${usuario.carta2.texto} - pontuação ${pontuacaoTotal(usuario)}`)
//    console.log(`Computador - cartas: ${computador.carta1.texto} ${computador.carta2.texto} - pontuação ${pontuacaoTotal(computador)}`)

//    if (pontuacaoTotal(usuario) > 21) {
//       console.log('O computador ganhou!')
//    } else if (pontuacaoTotal(computador) > 21) {
//       console.log('O usuário ganhou!') 
//    } else if (pontuacaoTotal(usuario) > pontuacaoTotal(computador)) {
//       console.log('O usuário ganhou!')
//    } else if (pontuacaoTotal(computador) > pontuacaoTotal(usuario)) {
//       console.log('O computador ganhou!')
//    } else {
//       console.log('Empate')
//    }
// }