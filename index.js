module.exports = () => {
    let a = 1;
    const c = "const variable";
    a = new Promise((resolve, reject) => {
        resolve('resolved value!!!!');
    });
    a.then(data => {
        console.log(data);
    });

    class Car {
        constructor() {
            this.name = 1;
        }
    }

}

{
    let [a, b, ...c] = [1, 2, 3];
    let { e, d, f } = { a: 1, b: 3, e: 34, d: 4, f: 56 };

}

{
    let s = Symbol();

    typeof s;
}

{
    async function getStockPriceByName(name) {
        const symbol = await getStockSymbol(name);
        const stockPrice = await getStockPrice(symbol);
        return stockPrice;
    }

    getStockPriceByName('goog').then(function (result) {
        console.log(result);
    });
}

{
    function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }

    var hw = helloWorldGenerator();
}

{
    // 老写法
    try {
        Object.defineProperty(target, property, attributes);
        // success
    } catch (e) {
        // failure
    }

    // 新写法
    if (Reflect.defineProperty(target, property, attributes)) {
        // success
    } else {
        // failure
    }
}

let son = require('./modules/son.js');