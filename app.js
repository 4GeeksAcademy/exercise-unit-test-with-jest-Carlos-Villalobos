console.log("Hello World")
const sum = (numero1,numero2) => {
    return numero1 + numero2;    
}

console.log(sum(7,3));


const fromDollarToYen = (dolar) => {
    return 0.0068 * dolar;
}

const fromEuroToDollar = (euro) => {
    return 1.07 * euro;
}

const fromYenToPound = (yen) => {
    return 0.0053 * yen;
}

module.exports = {sum,fromDollarToYen, fromEuroToDollar, fromYenToPound};