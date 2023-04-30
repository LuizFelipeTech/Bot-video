const readline = require('readline-sync')

function start(){
  const conteudo = {}
	
  conteudo.termoDePesquisa = pergunteERetorneOTermoDePesquisa()
  conteudo.prefix = askAndReturnPrefix()

  function pergunteERetorneOTermoDePesquisa() {
    return readline.question('Type a Wikipedia search term:')	
  
  }
  
  function askAndReturnPrefix() {
  const prefixes = ['Who is', 'What is', 'The history of']
  const selectedPrefixIndex = readline.keyInSelect(prefixes)
  const selectedPrefixText = prefixes[selectedPrefixIndex]

  return selectedPrefixText
  }
  
  console.log(conteudo)
}

start()

