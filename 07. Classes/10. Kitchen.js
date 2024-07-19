class Kitchen {
    menu = {};
    productsInStock = {}; 
    actionsHistory = [];

    constructor(budget) {
        this.budget = budget;
    }

    loadProducts(data) {
        let parsedData = data.map(x => x.split(' ')).map(([productName, productQuantity, productPrice]) => ({ productName, productQuantity: Number(productQuantity), productPrice: Number(productPrice) }));

        parsedData.forEach(product => {
            if (this.budget >= (product.productPrice)) {
                if (!(product.productName in this.productsInStock)) {
                    this.productsInStock[product.productName] = 0;
                }

                this.productsInStock[product.productName] += product.productQuantity;

                this.budget = this.budget - product.productPrice;

                //console.log(`Successfully loaded ${product.productQuantity} ${product.productName}`)
                this.actionsHistory.push(`Successfully loaded ${product.productQuantity} ${product.productName}`);
            }
            else {
                //console.log(`There was not enough money to load ${product.productQuantity} ${product.productName}`);
                this.actionsHistory.push(`There was not enough money to load ${product.productQuantity} ${product.productName}`);
            }
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        
        if (!this.menu[meal]) {
            
            this.menu[meal] = {
                price,
                neededProducts: neededProducts.map(x => x.split(' ')).map(([productName, productQuantity]) => ({ productName, productQuantity: Number(productQuantity) }))
            }

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }
        else {
            return `The ${meal} is already in our menu, try something different.`
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length > 0) {
            console.log(Object.entries(this.menu).map(([meal, details]) => `${meal} - $${details.price.toFixed(2)}`).join('\n').trimEnd());
        }
        else {
            console.log('Our menu is not ready yet, please come later...');
        }
    }

    makeTheOrder(meal) {
        if (!(meal in this.menu)) {
            console.log(`There is not ${meal} yet in our menu, do you want to order something else?`);
        }
        else {
            let neededProducts = this.menu[meal].neededProducts;
            let canMake = true;

            neededProducts.forEach(neededProduct => {
                if (!this.productsInStock[neededProduct.productName] || this.productsInStock[neededProduct.productQuantity] < neededProduct.productQuantity) {
                    canMake = false;
                }
            });

            if (canMake) {

                neededProducts.forEach(product => {
                    this.productsInStock[product.productName] -= product.productQuantity;
                });

                this.budget += this.menu[meal].price;

                console.log(`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`)
            }
            else {
                console.log(`For the time being, we cannot complete your order (${meal}), we are very sorry...`);
            }

        }
    }
}

let test = new Kitchen(150);

console.log(test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

test.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);

test.showTheMenu();

test.makeTheOrder('frozenYogurt');