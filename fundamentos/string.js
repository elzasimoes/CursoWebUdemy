const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna a quarta letra da constante escola
console.log(escola.charAt(5)) //começa contando pelo 0
console.log(escola.charCodeAt(3)) //digito 3 e o código relacionado a ele
console.log(escola.indexOf('3')) //o indice dele
console.log(escola.substring(1)) //chamada passando o indice inicial
console.log(escola.substring(0, 3)) //indice 0 até o final
console.log('Escola' .concat(escola).concat("!")) //usar um literal, uma consstante e concatenou com uma exclamação
console.log(escola.replace(3, 'e')) //substituir palavras/letras
console.log('Ana, Maria, Pedro'.split(','))
