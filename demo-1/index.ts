
import { EventEmitter } from "super-event-emitter";

class CartService extends EventEmitter {

    addProduct(product: Product) {
        this.emit('new-product', { product });
    }

}