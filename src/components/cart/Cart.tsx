import React, {} from 'react';
import {useAppSelector} from '../../app/hooks';
import {
  selectItems, selectTotal
} from './slice';
import styles from './Cart.module.css';
import {CartItem} from '../cartItem/CartItem';
import {DiscountCodes} from "../discountCodes/DiscountCodes";

export function Cart() {
  const items = useAppSelector(selectItems);
  const totalValue = useAppSelector(selectTotal);
  let cartItems;
  let discountCodes;
  let total;

  if (items.length <= 0) {
    cartItems = <p className="text-center mb-4">You don't have any items in your cart. Add one now!</p>;
  } else {
    cartItems =
      <div className="table-responsive">
        <table className="table text-left">
          <thead>
          <tr>
            <th className={styles.name}>Name</th>
            <th className={styles.price}>Price</th>
            <th className={styles.quantity}>Quantity</th>
            <th className={styles.total}>Total</th>
          </tr>
          </thead>
          <tbody>
          {
            items.map((item) => <CartItem key={item.product.id} data={item}/>)
          }
          </tbody>
        </table>
      </div>;
    discountCodes = <DiscountCodes/>
    total =
      <div className="row row-cols-1 row-cols-md-2 mt-5 mb-3 text-">
        <div className="col"/>
        <div className="col">
          <div className="row mb-3 text-center">
            <div className="col">
              <p className="display-6 text-end">Total: ${totalValue}</p>
            </div>
          </div>
        </div>
      </div>;
  }

  return (
    <div>
      <h2 className="display-6 text-center mb-4">Your cart</h2>
      {cartItems}
      {discountCodes}
      {total}
    </div>
  );
}
