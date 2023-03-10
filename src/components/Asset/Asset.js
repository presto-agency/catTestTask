import React, {useState, useEffect} from "react";
import * as styles from "./asset.module.scss"
import {useDispatch} from "react-redux";

import {setPrice} from "../../store/ProductReducer";


const Asset = ({product = {}}) => {
  const dispatch = useDispatch()
  const [prod, setProduct] = useState(product)

  const formatNum = (num) => (Math.round((num) * 100) / 100).toFixed(2);

  const decValue = () => {
    setProduct(prev => ({...prev, count: prev.count - 1}))
  }

  const incValue = () => {
    setProduct(prev => ({...prev, count: prev.count + 1}))
  }

  useEffect(() => {
    dispatch(setPrice(prod))
  }, [prod])

  if (Object.keys(prod).length === 0) {
    return <p>Loading</p>
  }
  return (
    <li className={styles.asset}>
      <div className={styles.asset__img}>
        <img src={prod.src} alt="asset"/>
      </div>
      <div className={styles.asset__content}>
        <p>
          {prod.name}
        </p>
        <div className={styles.asset__content_nav}>
          <div>
            <button  disabled={prod.count <= 1} onClick={decValue}></button>
            <span>{prod.count}</span>
            <button className={styles.variant} onClick={incValue}></button>
          </div>
          <span>{formatNum(prod.count * prod.price)}</span>
        </div>
      </div>
    </li>
  );
};

export default Asset;