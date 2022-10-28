import {ICartItem} from '../models/CartItem';
import {baseUrl} from '../constants';

export function checkout(items: ICartItem[], codes: string[]) {
  return new Promise<number>((resolve) =>
    fetch(`${baseUrl}/checkout`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: items, codes: codes})
    })
      .then((res) => res.json())
      .then((json) => {
        resolve(json.data);
      })
  );
}

const CheckoutService = {
  checkout,
};

export default CheckoutService;