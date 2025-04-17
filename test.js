const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 143 yen", function () {
    const {fromDollarToYen} = require('./app.js');
    const yenes = fromDollarToYen(3.5);
    const expected = 3.5 * 143;
    expect(fromDollarToYen(3.5)).toBe(500.5);
    
})

test("One yen should be 0.01 pound", function () {
    const {fromYenToPound} = require('./app.js');
    const pound = fromYenToPound(3.5);
    const expected = 3.5 * 0.01;
    expect(fromYenToPound(3.5)).toBe(0.035);
    
})