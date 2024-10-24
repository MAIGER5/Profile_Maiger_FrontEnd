import React, { useContext } from 'react';
import styles from './educationOther.module.css';
import { DataContext } from '../../../../dataContext/dataContext';

export const EducationOther = () => {

  const data = useContext(DataContext);

  console.log(data)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }




  return (
    <div className={styles.container}>
      {
        data.map((el)=>(
          <div key={el.id} className={styles.cardLong}>
            {el.icon}
            <div>
              <span>{el.title}</span>
              <span>{el.subtitle}</span>
            </div>
            <span>{el.date}</span>
          </div>
        ))
      }
    </div>
  )
}
