import React from 'react';
import styles from './secondCardLanguaje.module.css';
import imagen2 from '../../../../utils/277670_Pre-Advanced (Level 10)_pagenumber.001.png'

export const SecondCardLanguaje = () => {
  return (
    <div className={styles.card}>
      <div>
        <img src={imagen2} alt="" />
      </div>
      <div className={styles.card__content}>
        <p className={styles.card__title}>Card Title</p>
        <p className={styles.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>
  )
}
