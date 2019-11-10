//operador rest(juntar)/spread(espalhar)

const funcionario = { nome: 'Maria', salario: 13312312}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//usar spread com array

const grupoA = ['João', 'Pedro', 'Maria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal())