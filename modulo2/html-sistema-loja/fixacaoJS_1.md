ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let output = 2000
  for (let i = 0; i < qtdeCarrosVendidos; i++) {
    let valorCarro = valorTotalVendas / qtdeCarrosVendidos
    output += 100 + valorCarro * 0.05
  }
  
  return output
}
ˋˋˋ