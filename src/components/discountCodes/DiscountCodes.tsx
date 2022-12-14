import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
  apply,
  remove,
  applyCodes,
  selectItems
} from './slice';

interface DiscountCodesProps {
  onCodesChanged?: (codes: string[]) => void,
  appliedCodes: string[],
}

export function DiscountCodes(props: DiscountCodesProps) {
  const items = useAppSelector(selectItems);
  const [code, setCode] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.appliedCodes.length) {
      dispatch(applyCodes(props.appliedCodes));
    }
  }, [dispatch, props])

  useEffect(() => {
    if (props.onCodesChanged) {
      props.onCodesChanged(items);
    }
  }, [props, items]);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
        <div className="col"/>
        <div className="col">
          <div className="row mb-3 text-center">
            <div className="col-8">
              <input className="form-control code"
                     type="text" placeholder="CODE: MICROSOFT/AMAZON/FACEBOOK"
                     value={code}
                     onChange={(e: any) => setCode(e.target.value)}
              />
            </div>
            <div className="col">
              <button type="button"
                      className="w-100 btn btn-primary btn-apply"
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
                      <span className="discount-code">{item}</span>
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
