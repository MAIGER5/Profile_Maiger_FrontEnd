import React from 'react';
import styles from './home.module.css'
import { HomeContent1, HomeContent2 } from '../../import_And_export/import_And_export';



export const Home = () => {


  return (
    <div className={styles.container}>
      <div className={styles.firstView}>
        <HomeContent1/>
      </div>
      <div className={styles.secondView}>
        <HomeContent2/>
      </div>
    </div>
  )
}

