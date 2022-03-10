import React from 'react';
import styles from './HomePage.module.scss';
import { SwiperSlide } from 'swiper/react';
import GameCarousel from '../../components/GameCarousel/GameCarousel.jsx';
import GameItem from '../../components/GameItem/GameItem.jsx'

const SalesGames = [
  {
    image: 'https://cdn1.epicgames.com/offer/4b9bd8b8a4804e088d3412062a4f0251/EGS_AeternaNoctis_AeternumGameStudios_S2_1200x1600-479ed20ef823e230a49345b6b6657780?h=854&resize=1&w=640',
    title: 'Aeterna Noctis',
    sale: 20,
    price: 515,
    new: false,
    id: 1,
  },
  {
      image: 'https://cdn1.epicgames.com/edaebe133189475c9fd853858b7fa9ac/offer/EGS_TheTenants_AncientForgeStudio_S2-1200x1600-6ff72dbe1bcb1cdb3345714c8ab8b4a7.jpg?h=854&resize=1&w=640',
      title: 'The Tenants',
      sale: 25,
      price: 449,
      new: false,
      id: 2,
  },
  {
    image: 'https://cdn1.epicgames.com/spt-assets/04494b55395c46af9d3fdb2a03ac42d3/download-car-tuning-simulator-offer-e8hyt.png?h=854&resize=1&w=640',
    title: 'Car Tuning Simulator',
    sale: 30,
    price: 22,
    new: false,
    id: 3,
  },
  {
    image: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HordeCore_DigitalityStudios_S2_1200x1600-5e5a51fd6ff0190fe470feb1e92bf8f7?h=854&resize=1&w=640',
    title: 'HordeCore',
    sale: null,
    price: 289,
    new: false,
    id: 4,
  },
  {
    image: 'https://cdn1.epicgames.com/spt-assets/e6fac44e52844cb19b96d63c465ab1c9/download-a-musical-story-offer-n1kkg.png?h=854&resize=1&w=640',
    title: 'A Musical Story',
    sale: 10,
    price: 349,
    new: false,
    id: 5,
  },
  {
    image: 'https://cdn1.epicgames.com/spt-assets/75ad53ddde12415face033838ca0a6da/download-what-lies-in-the-multiverse-offer-nb21d.jpg?h=854&resize=1&w=640',
    title: 'What Lies in the Multiverse',
    sale: 10,
    price: 349,
    new: true,
    id: 6,
  },
  {
  image: 'https://cdn1.epicgames.com/spt-assets/c6d68f6dca604fce9040b5e534c60cec/download-beholder-3-offer-i48aa.png?h=854&resize=1&w=640',
  title: 'Beholder 3',
  sale: 20,
  price: 349,
  new: true,
  id: 7,
  },
  {
  image: 'https://cdn1.epicgames.com/spt-assets/555b34e18d6d4c6d9cf89533866089cb/download-zombie-rollerz-offer-k2b0m.png?h=854&resize=1&w=640',
  title: 'Zombie Rollerz: Pinball Heroes',
  sale: 10,
  price: 399,
  new: false,
  id: 8,
  },
  {
  image: 'https://cdn1.epicgames.com/spt-assets/2e1bb8583f904be0b70f55a9a36b5e1e/download-wife-quest-offer-d5t67.jpg?h=854&resize=1&w=640',
  title: 'Wife Quest',
  sale: 25,
  price: 149,
  new: true,
  id: 9,
  },
  {
  image: 'https://cdn1.epicgames.com/spt-assets/91e2fe08057e4b79b0300eb4ce6a00af/download-cryofall-offer-8ugl2.jpg?h=854&resize=1&w=640',
  title: 'CryoFall',
  sale: 30,
  price: 549,
  new: true,
  id: 10,
  },
  {
  image: 'https://cdn1.epicgames.com/spt-assets/63bbc6139c1a4cd6a4c2c11c8d21e55d/download-guardian-of-lore-offer-1et5q.png?h=854&resize=1&w=640',
  title: 'Guardian of Lore',
  sale: 25,
  price: 299,
  new: false,
  id: 11,
  },
  {
  image: 'https://cdn1.epicgames.com/spt-assets/6c01371e776d4efbad4176efb96fab0f/download-baldurs_gate_dark_alliance-offer-1qab0.png?h=854&resize=1&w=640',
  title: 'Assassins Creed ValhallaBaldurs Gate: Dark Alliance',
  sale: 20,
  price: 649,
  new: false,
  id: 12,
  },
  {
  image: 'https://cdn1.epicgames.com/6009be9994c2409099588cde6f3a5ed0/offer/EGS_CitiesSkylines_ColossalOrder_S2-1200x1600-753257537706de74735d2bc3eb656b67.jpg?h=854&resize=1&w=640',
  title: 'Cities Skylines',
  sale: null,
  price: 'Скоро появится',
  new: false,
  id: 13,
  },
]

export default function HomePage() {

  return (
    <div className={styles.Home}>

      <div>
        <GameCarousel game={{
          list: SalesGames.map(g => <SwiperSlide><GameItem game={g} key={g.id} /></SwiperSlide>), 
          title: 'Игры со скидками',
          link: '/',
          id: 1
        }} 
        />
      </div>

      <div>
        <GameCarousel game={{
          list: SalesGames.map(g => <SwiperSlide><GameItem game={g} key={g.id} /></SwiperSlide>), 
          title: 'Прославление женщин в играх',
          id: 2
        }} 
        />
      </div>

      <div>
        <GameCarousel game={{
          list: SalesGames.map(g => <SwiperSlide><GameItem game={g} key={g.id} /></SwiperSlide>), 
          title: 'Недавно обновленные',
          
          id: 3
        }} 
        />
      </div>

      <div>
        <GameCarousel game={{
          list: SalesGames.map(g => <SwiperSlide><GameItem game={g} key={g.id} /></SwiperSlide>), 
          title: 'Наиболее популярные',
          link: '/',
          id: 4
        }} 
        />
      </div>
    
    </div>
  )
}
