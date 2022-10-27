import {ICartItem} from '../models/CartItem';

export function checkout(items: ICartItem[], codes: string[]) {
  return new Promise<number>((resolve) =>
      resolve(200)
    // fetch(`${baseUrl}/products`)
    //     .then((res) => res.json())
    //     .then((json) => {
    //       resolve(json.data);
    //     })
  );
}

const CheckoutService = {
  checkout,
};

export default CheckoutService;