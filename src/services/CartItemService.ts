import {IProduct} from '../models/Product';
import {ICartItem} from '../models/CartItem';
import {baseUrl} from '../constants';

export function index() {
  return new Promise<IProduct[]>((resolve) =>
    fetch(`${baseUrl}/cart_items`)
      .then((res) => res.json())
      .then((json) => {
        resolve(json.data);
      })
  );
}

export function add(product: IProduct, quantity: number) {
  return new Promise<ICartItem>((resolve) =>
    fetch(`${baseUrl}/cart_items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({productId: product.id, quantity: quantity})
    })
        .then((res) => res.json())
        .then((json) => {
          resolve({
            product: json.data.product,
            quantity: json.data.quantity
          });
        })
  );
}

const CartItemService = {
  index,
  add
};

export default CartItemService;