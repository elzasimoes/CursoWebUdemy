const notas = [6.1, 7.4, 9.8, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'Elza',
    sobrenome:'Simoes',
    idade: 25,
    peso: 90
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

