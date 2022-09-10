function calcular(tipo, valor) {

  if (tipo == "acao") {
    if (valor == "c") {
      document.getElementById('tela_calc').value = ''
    }
    if(valor == "+" || valor == "-" || valor == "*" || valor == "/" || valor == ".") {
      document.getElementById('tela_calc').value += valor
    }
    if(valor == "=") {
      var valor_tela = document.getElementById('tela_calc').value
      document.getElementById('tela_calc').value = eval(valor_tela)
    }
  }

  else if (tipo == "valor") {
    document.getElementById('tela_calc').value += valor
  }
  
}