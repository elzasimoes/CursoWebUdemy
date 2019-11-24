Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callblack(this[i], i, this)) { 
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos =  [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4499, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.499, fragil: true },
    { nome: 'Copo de Plástico', preco: 24.099, fragil: true },
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 2500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))

