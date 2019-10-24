const valores = [7.7, 8.9, 6.3, 9.3] //a contagem dos arrays começa com 0, 1, 2, 3, 4
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //length diz quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //tirar o ultimo valor do array e retira
delete valores[0] // tira o primeiro elemento do array
console.log(valores)

console.log(typeof valores)