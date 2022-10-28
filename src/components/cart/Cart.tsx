import React, {useEffect, useMemo, useState} from 'react';
import {debounce} from 'lodash';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
  indexAsync,
  checkoutAsync,
  clearCartAsync,
  selectItems,
  selectTotal
} from './slice';
import styles from './Cart.module.css';
import {CartItem} from '../cartItem/CartItem';
import {DiscountCodes} from '../discountCodes/DiscountCodes';

export function Cart() {
  const items = useAppSelector(selectItems);
  const totalValue = useAppSelector(selectTotal);
  const [appliedCodes, setAppliedCodes] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  let cartItems;
  let discountCodes;
  let total;

  const onCodesChanged = (codes: string[]) => {
    setAppliedCodes(codes);
  }

  const debounceDispatch = useMemo(
    () => debounce((action) => {
      dispatch(action);
    }, 500),
    [dispatch]
  );

  useEffect(() => {
   dispatch(indexAsync());
  }, [dispatch]);

  useEffect(() => {
    debounceDispatch(checkoutAsync({items, codes: appliedCodes}));
  }, [debounceDispatch, items, appliedCodes])

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
            <th className={`text-center ${styles.total}`}>Quantity</th>
            <th className={`text-end ${styles.total}`}>Total</th>
          </tr>
          </thead>
          <tbody>
          {
            items.map((item) => <CartItem key={item.product.id} data={item}/>)
          }
          </tbody>
        </table>
      </div>;
    discountCodes = <DiscountCodes appliedCodes={appliedCodes} onCodesChanged={onCodesChanged}/>
    total =
      <div className="row row-cols-1 row-cols-md-2 mt-5 mb-3 text-">
        <div className="col">
          <button type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                  onClick={() => { dispatch(clearCartAsync()); setAppliedCodes([]); }}
          >Clear the cart</button>
        </div>
        <div className="col">
          <div className="row mb-3 text-center">
            <div className="col">
              <p className="display-6 text-end cart-total">Total: ${totalValue}</p>
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
