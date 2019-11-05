const escola = [{
    nome: 'Turma M',
    alunos: [{
        nome: 'Fulano',
        nota: 9.1
    }, {
        nome: 'Ciclano',
        nota: 8.1
    }, {
        nome: 'Belclano',
        nota: 7.1
    }, {
        nome: 'Triclano',
        nota: 6.1
    }, {
        nome: 'Quadrilano',
        nota: 5.1
    }, {
        nome: 'Quintano',
        nota: 2.1
    }, {

    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)