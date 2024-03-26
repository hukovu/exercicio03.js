function somar(...valores){
    return valores.reduce((total, valor) => total + valor, 0);
}
//Exemplos de uso:
console.log(somar(1, 2)); //saída será: 3
console.log(somar(1, 2, 3, 4)); //saída será: 10
console.log(somar(2, 3, 4, 5, 6, 7, 8)); //saída será: 35    
console.log(somar(2, 34, 5, 6, 7, 8, 98, 90, 3, 3, 4, 4, 56, 7, 78, 7, 8, 9)); //saída será: 409