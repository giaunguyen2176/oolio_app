import {IProduct} from '../models/Product';
import { baseUrl } from '../constants';

export function index() {
  return new Promise<IProduct[]>((resolve) =>
    fetch(`${baseUrl}/products`)
        .then((res) => res.json())
        .then((json) => {
          resolve(json.data);
        })
  );
}

const ProductService = {
  index
};

export default ProductService;