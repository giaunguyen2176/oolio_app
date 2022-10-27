import React, {useState} from 'react';
import {IProduct} from '../../models/Product';
import {
  addToCart
} from './slice';
import {useAppDispatch} from '../../app/hooks';

interface ProductProps {
  data: IProduct
}

export function Product(props: ProductProps) {
  const [quantity, setQuantity] = useState('1');
  const quantityValue = Number(quantity) || 1;
  const dispatch = useAppDispatch();

  const onIncrease = (e: any) => {
    if (Number(e.target.value) > 0) {
      setQuantity(e.target.value);
    }
  }

  return (
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">{props.data.name}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${props.data.price}</h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{props.data.description}</li>
        </ul>
        <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
          <div className="col">
            <input className="form-control form-control-lg"
                   type="number" placeholder="Quantity"
                   aria-label=".form-control-lg example"
                   value={quantityValue}
                   onChange={onIncrease}
            />
          </div>
          <div className="col">
            <button type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    onClick={() => { dispatch(addToCart({product: props.data, quantity: quantityValue})); }}
            >Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
