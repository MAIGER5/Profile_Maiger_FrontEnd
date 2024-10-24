import React, { useContext } from 'react';
import styles from './courses.module.css'
import { DataContext } from '../../../../dataContext/dataContext';


export const Courses = () => {

  const data = useContext(DataContext)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }


  return (
    <div className={styles.container}>
      {
        data.map((el)=>(
          <div className={styles.card} key={el.id}>
            <div className={styles.img}>{el.icon}</div>
            <div className={styles.textBox}>
              <div className={styles.textContent}>
                <span className={styles.h1}>{el.title}</span>
                <span className={styles.span}>{el.date}</span>
              </div>
              <span className={styles.p}>{el.subtitle}</span>
            </div>
          </div>
  
        ))
      }
    </div>
  )
}
