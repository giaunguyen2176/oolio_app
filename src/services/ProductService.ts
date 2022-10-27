import {IProduct} from '../models/Product';
// import { baseUrl } from '../../constants';

export function index() {
  return new Promise<IProduct[]>((resolve) =>
      resolve([
        {
          id: 1,
          name: 'Small pizza',
          description: 'Small size pizza with cheese',
          price: 12.99
        },
        {
          id: 2,
          name: 'Medium pizza',
          description: 'Medium size pizza with cheese',
          price: 15.99
        },
        {
          id: 3,
          name: 'Large pizza',
          description: 'Large size pizza with cheese',
          price: 21.99
        }
      ])
    // fetch(`${baseUrl}/products`)
    //     .then((res) => res.json())
    //     .then((json) => {
    //       resolve(json.data);
    //     })
  );
}

const ProductService = {
  index
};

export default ProductService;