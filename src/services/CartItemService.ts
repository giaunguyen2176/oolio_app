import {IProduct} from '../models/Product';
import {ICartItem} from '../models/CartItem';

export function add(product: IProduct, quantity: number) {
  return new Promise<ICartItem>((resolve) =>
      resolve({
        product: product,
        quantity: quantity
      })
    // fetch(`${baseUrl}/products`)
    //     .then((res) => res.json())
    //     .then((json) => {
    //       resolve(json.data);
    //     })
  );
}

const CartItemService = {
  add,
};

export default CartItemService;