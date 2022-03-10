import React from 'react';
import { Swiper, useSwiper } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import { GrPrevious, GrNext, GrFormNext } from 'react-icons/gr'
import 'swiper/css/navigation';
import 'swiper/css';
import styles from './GameCarousel.module.scss';

export default function GameCarousel(props) {

  const swiper = useSwiper();

  return (
    
    <div className={styles.Carousel}>
      <div className={styles.Carousel__header}>
        <div className={styles.Carousel__title}>
          {
            props.game.link != null
            ?
            <a href={props.game.link}>{props.game.title} <GrFormNext /></a>
            :
            props.game.title
          }
        </div>
        <div className={styles.Carousel__buttons}>
          <button className={'prev'+`${props.game.id}`} onClick={() => swiper.slidePrev()}><GrPrevious /></button>
          <button className={'next'+`${props.game.id}`} onClick={() => swiper.slideNext()}><GrNext /></button>
        </div>
      </div>
      <div className={styles.Carousel__wrapper}>
        <Swiper
          className='swiper-no-swiping'
          modules={[Navigation, Scrollbar]}
          spaceBetween={30}
          slidesPerView={6}
          slidesPerGroup={6}
          scrollbar={{ draggable: false }}
          navigation={{ nextEl: '.next'+`${props.game.id}`, prevEl: '.prev'+`${props.game.id}` }}
        >
          {props.game.list}
        </Swiper>
      </div>
    </div>

  )
}
