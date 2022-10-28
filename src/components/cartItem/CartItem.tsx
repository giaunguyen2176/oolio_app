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
    <tr>
      <th scope="row" className="text-start">{props.data.product.name}</th>
      <td>
        ${props.data.product.price}
      </td>
      <td className="text-center">
        x{props.data.quantity}
      </td>
      <td className={styles.total}>
        ${Math.round(props.data.product.price * props.data.quantity * 100) / 100}
      </td>
    </tr>
  );
}
