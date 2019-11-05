var vet = [50, 60, 80, 100, 20]
var novo2 = []
var novo = []
var novo3 = []
/*
for(var i = 0; i < vet.length; i++){
    novo.push(vet[i]/10+vet[i])
    
} 
*/
novo = vet.map(function(valor){
    return valor+valor/10
})

novo2 = vet.map(function(valor){
    return valor/2
})

novo3 = vet.map(function(valor, num){
    return valor * num
})
console.log(novo)
console.log(novo2)
console.log(novo3)
geral = 0
for(var i = 0; i < vet.length; i++){
    geral += vet[i]
}
console.log(geral)
novo4 = vet.reduce(function(total, valor){
    return total + valor
})
console.log(novo4)

novo5 = vet.reduce(function(total, valor){
    console.log(valor/2)
    return total + valor/2
}, 0)
console.log(novo5)

novo5 = vet.reduce()