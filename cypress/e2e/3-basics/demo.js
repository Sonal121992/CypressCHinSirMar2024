let num = [11, 22, 33, 44]
let sum = num.reduce(function(acc,ele, index,arr){
    return acc + ele
},0)
console.log(sum)