//par nome/valor
const saudacao = '0pa' //contexto léxico 1

function exec(){
    const saudacao = 'Faaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Elza',
    idade: 2,
    peso: 90,
    endereco: {
        logradouro: 'Rua Bc',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)