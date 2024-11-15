function storeProvision(stock, orders) {

    const storage = {}

    for (let i = 0; i < stock.length; i += 2) {
        storage[stock[i]] = Number(stock[i + 1]);
    }

    for (let i = 0; i < orders.length; i += 2) {
        if(!storage.hasOwnProperty(orders[i])) storage[orders[i]] = 0;
        storage[orders[i]] +=  Number(orders[i + 1]);
    }

    for (const product in storage) {
        console.log(`${product} -> ${storage[product]}`);
    };
    

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);