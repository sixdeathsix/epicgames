import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart.jsx'
import SearchInput from '../SearchInput/SearchInput.jsx';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.wrapper}>
        <div className={styles.Header__nav}>
          <SearchInput />
          <Link to="/" className={styles.Header__link}>
            Главная
          </Link>
          <Link to="" className={styles.Header__link}>
            Все игры
          </Link>
          <Link to="" className={styles.Header__link}>
            Новости
          </Link>
        </div>
        <div className={styles.Header__nav}>
          <Link to="" className={styles.Header__link}>
            <Cart text={{title: 'Список желаемого', span: '3'}} />
          </Link>
          <Link to="" className={styles.Header__link}>
            <Cart text={{title: 'Корзина', span: '2'}} />
          </Link>
        </div>
      </div>
    </div>
  )
}
