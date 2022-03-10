import React from 'react';
import styles from './Cart.module.scss';

export default function Cart(props) {
  return (
    <div className={styles.Cart}>
      <span className={styles.Cart__title}>{props.text.title}</span>
      <span className={styles.Cart__count}>{props.text.span}</span>
    </div>
  )
}
