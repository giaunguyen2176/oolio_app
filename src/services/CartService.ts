import {baseUrl} from '../constants';

export function clear() {
  return new Promise<[]>((resolve) =>
    fetch(`${baseUrl}/cart`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((json) => {
        resolve(json.data);
      })
  );
}

const CheckoutService = {
  clear,
};

export default CheckoutService;