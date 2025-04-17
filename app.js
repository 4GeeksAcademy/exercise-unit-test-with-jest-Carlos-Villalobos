console.log("Hello World")
const sum = (numero1,numero2) => {
    return numero1 + numero2;    
}

console.log(sum(7,3));


const fromDollarToYen = (dolar) => {
    return dolar * 143;
}

const fromEuroToDollar = (euro) => {
    return 1.07 * euro;
}

const fromYenToPound = (yen) => {
    return 0.01 * yen;
}

module.exports = {sum,fromDollarToYen, fromEuroToDollar, fromYenToPound};