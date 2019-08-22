
import { EventEmitter } from 'super-event-emitter';

interface Product {
    name: string;
    price: number;
}

class CartService extends EventEmitter {

    addProduct(product: Product) {
        this.emit('new-product', { product });
    }

}

function main() {
    const s = new CartService();
    s.on('new-product', (payload) => console.log({ payload }));

    const car: Product = { name: 'Ferrari', price: 23 };
    s.addProduct(car);
}

main();
