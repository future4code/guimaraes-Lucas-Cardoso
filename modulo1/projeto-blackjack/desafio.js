if (!confirm('Bem-vindo ao jogo de Blackjack!' + "\n" + "Quer iniciar uma nova rodada?")) {
   alert('O jogo acabou.')
} else {
   blackjack()
}

function blackjack () {
   const usuario = comprarCartas()[0]
   const computador = comprarCartas()[1]
   let continuar = true

   while (continuar) {
      if (!confirm(
         `Suas cartas são ${suasCartas(usuario)}. A carta revelada do computador é ${computador[0].texto}.`+"\n"+
         "Deseja comprar mais uma carta?"
         ) || pontuacao(usuario) > 21) {
         continuar = false
         resultado(usuario, computador)
      } else {
         usuario.push(comprarCarta())
         if (pontuacao(usuario) > 21) {
            continuar = false
            resultado(usuario, computador)
         }
      }
   }
}

function comprarCartas () {
   const usuario = [comprarCarta(), comprarCarta()]
   const computador = [comprarCarta(), comprarCarta()]
   let semDoisA = false

   while (!semDoisA) {
      if (computador[0].valor === 11 && computador[1].valor === 11) {
         usuario = [comprarCarta(), comprarCarta()]
         computador = [comprarCarta(), comprarCarta()]
      } else if (usuario[0].valor === 11 && usuario[1].valor === 11) {
         usuario = [comprarCarta(), comprarCarta()]
         computador = [comprarCarta(), comprarCarta()]
      } else {
         semDoisA = true
         return [usuario, computador]
      }
   }
}

function suasCartas (arr) {
   let output = ""
   for (let i = 0; i < arr.length; i++) {
      output += `${arr[i].texto} `
   }

   return output
}

function pontuacao (arr) {
   let output = 0
   for (let i = 0; i < arr.length; i++) {
      output += arr[i].valor
   }

   return output
}

function checarVitoria (usuario, computador) {
   const pontosUsuario = pontuacao(usuario)
   const pontosComputador = pontuacao(computador)

   if (pontosUsuario > 21) {
      return 'O computador ganhou!'
   } else if (pontosComputador > 21) {
      return 'O usuário ganhou!'
   } else if (pontosUsuario > pontosComputador) {
      return 'O usuário ganhou!'
   } else if (pontosComputador > pontosUsuario) {
      return 'O computador ganhou!'
   } else {
      return 'Empatou!'
   }
}

function resultado (usuario, computador) {
   return alert(`Usuario - Cartas: ${suasCartas(usuario)}- Pontuação: ${pontuacao(usuario)}`+"\n"+
      `Computador - Cartas: ${suasCartas(computador)}- Pontuação: ${pontuacao(computador)}`+"\n"+
      `${checarVitoria(usuario, computador)}`)
}