import React from 'react'
import styles from './GameItem.module.scss'

export default function GameItem({game}) {
  return (
    <div className={styles.Game}>
      <a href="">
        <div className={styles.Game__wrapper}>
          <div className={styles.Game__img}>
            <img src={game.image} alt="" />
          </div>
          <div className={styles.Game__title}>
            {game.title}
          </div>
          {
            game.new == true 
            ? 
            <div className={styles.Game__new}>
              <span>Новое в epic</span>
            </div>
            : 
            null
          }
          <div className={styles.Game__price}>
            {
              game.price == 'Бесплатно' || game.price == 'Скоро появится' 
              ?
              <p>{game.price}</p> 
              :
              game.sale == null
              ? 
              <span>{game.price + ' ₽'}</span> 
              : 
              <div className={styles.Game__sale}>
                <span>{'-' + game.sale + ' %'}</span>
                <span>{game.price + ' ₽'}</span>
                <span>{(game.sale == 100) ? 'Бесплатно' : game.price - (game.price * (game.sale/100)) + ' ₽'}</span>
              </div>
            }
          </div>
        </div> 
      </a>
    </div>
  )
}
