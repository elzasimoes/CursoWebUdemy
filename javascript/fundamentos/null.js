let valor //não inicializada
console.log(valor)


valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) não pode ler

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir
console.log(!!produto.preco)
//delete produto.preco deixar vazio
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
