import React, {} from 'react';
import {} from '../../app/hooks';
import {

} from './slice';
import {ICartItem} from '../../models/CartItem';
import styles from './CartItem.module.css';

interface CartItemProps {
  data: ICartItem
}

export function CartItem(props: CartItemProps) {
  return (
    <tr className="cart-item">
      <th scope="row" className="text-start name">{props.data.product.name}</th>
      <td className="price">
        ${props.data.product.price}
      </td>
      <td className="text-center quantity">
        x{props.data.quantity}
      </td>
      <td className={`total ${styles.total}`}>
        ${Math.round(props.data.product.price * props.data.quantity * 100) / 100}
      </td>
    </tr>
  );
}
