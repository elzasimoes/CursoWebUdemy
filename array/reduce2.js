const alunos = [
    
    { nome: 'João', nota: 6.3, bolsista: false},
    { nome: 'Elza', nota: 7.3, bolsista: true},
    { nome: 'Joana', nota: 8.3, bolsista: false},
    { nome: 'Jéssica', nota: 9.3, bolsista: true},
    { nome: 'Joãozinho', nota: 5.3, bolsista: false},
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))