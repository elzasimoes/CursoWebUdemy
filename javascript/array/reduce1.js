const alunos = [
    
    { nome: 'João', nota: 6.3, bolsista: false},
    { nome: 'Elza', nota: 7.3, bolsista: true},
    { nome: 'Joana', nota: 8.3, bolsista: false},
    { nome: 'Jéssica', nota: 9.3, bolsista: true},
    { nome: 'Joãozinho', nota: 5.3, bolsista: false},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)
