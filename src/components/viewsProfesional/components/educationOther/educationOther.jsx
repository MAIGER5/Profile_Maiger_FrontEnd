import React, { useContext } from 'react';
import styles from './educationOther.module.css';
import { DataContext } from '../../../../dataContext/dataContext';

export const EducationOther = () => {

  const data = useContext(DataContext);

  console.log(data)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }


  const handleChangeColor = ()=>{
    return data[0].view === 'skills'
    ? styles.containerAltern_0
    : data[0].view === 'skills2'
    ? styles.containerAltern_1
    :''
  }

  return (
    <div className={`${styles.container} ${handleChangeColor()}`}>
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
