import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
  apply,
  remove,
  selectItems
} from './slice';

export function DiscountCodes() {
  const items = useAppSelector(selectItems);
  const [code, setCode] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
        <div className="col"/>
        <div className="col">
          <div className="row mb-3 text-center">
            <div className="col-8">
              <input className="form-control"
                     type="text" placeholder="CODE: MICROSOFT/AMAZON/FACEBOOK"
                     value={code}
                     onChange={(e: any) => setCode(e.target.value)}
              />
            </div>
            <div className="col">
              <button type="button"
                      className="w-100 btn btn-primary"
                      onClick={() => { if (!code) return; dispatch(apply(code)); setCode(''); }}
              >Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col"/>
        <div className="col"/>
        <div className="col">
          <ul className="list-group list-group-flush">
            {
              items.map((item) =>
                <li key={item} className="list-group-item align-content-around">
                  <div className="row text-center">
                    <div className="col-8 text-start">
                      <span>{item}</span>
                    </div>
                    <div className="col text-end">
                      <button type="button"
                              className="btn-close"
                              aria-label="Close"
                              onClick={() => { dispatch(remove(item)); }}
                      />
                    </div>
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
