import React, { useState } from 'react';
import styles from './experience.module.css';
import { data_Experience } from '../../../data/data_Experience';
import { DataContext } from '../../../dataContext/dataContext';
import { ManyExperiences } from '../components/manyExperiences/manyExperiences';


export const Experience = () => {

const [data] = useState(data_Experience)

  return (
    <div className={styles.container}>
      <DataContext.Provider value={data}>
        <ManyExperiences/>
      </DataContext.Provider>
    </div>
  )
}
