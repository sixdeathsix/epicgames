import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchInput.module.scss'

export default function SearchInput() {
  return (
    <div className={styles.Search}>
      <AiOutlineSearch className={styles.Search__icon}></AiOutlineSearch>
      <input type="text" placeholder='Поиск' className={styles.Search__input}/>
    </div>
  )
}
