import React, {useEffect, useState} from 'react';
import {Product} from '../product/Product';
import {IProduct} from '../../models/Product';
import ProductService from '../../services/ProductService';

export function Products() {
  const [items, setItems] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductService.index()
      .then((items: IProduct[]) => {
        setItems(items);
      });
  });

  return (
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      {
        items.map((item) =>
          <div className="col" key={item.id}>
            <Product data={item}/>
          </div>
        )
      }
    </div>
  );
}
