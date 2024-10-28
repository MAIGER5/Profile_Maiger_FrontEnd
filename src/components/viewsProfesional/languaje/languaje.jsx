import React from 'react';
import styles from './languaje.module.css';
import { DataContext } from '../../../dataContext/dataContext';
import { data_firstCardLanguaje } from '../../../data/data_firstCardLanguaje';
import { FirstCadLanguaje } from '../components/firstCadLanguaje/firstCadLanguaje';
import { data_secondCardLanguaje } from '../../../data/data_secondCardLanguaje';
import { SecondCardLanguaje } from '../components/secondCardLanguaje/secondCardLanguaje';




export const Languaje = () => {

  const data = data_firstCardLanguaje;
  const data1 = data_secondCardLanguaje


  return (
    <div className={styles.container}>
      <DataContext.Provider value={data}>
        <FirstCadLanguaje/>
      </DataContext.Provider>
      <DataContext.Provider value={data1}>
        <SecondCardLanguaje/>
      </DataContext.Provider>
    </div>
  )
}
