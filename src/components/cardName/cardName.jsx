import React from 'react';
import styles from './cardName.module.css';
import { Widgets } from '../widgets/widgets';

export const CardName = () => {
  return (
    <div className={styles.container}>
      <h1>¡Hola! Soy Desarrollador Full Stack</h1>
      <Widgets/>
    </div>
  )
}
