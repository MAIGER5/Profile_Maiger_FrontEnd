import React from 'react';
import styles from './projets.module.css'
import { CardProjects } from '../components/cardProjects/cardProjects';
import { data_poryectsCard } from '../../../data/data_poryectsCard';
import { DataContext } from '../../../dataContext/dataContext';



export const Projects = () => {

  const data = data_poryectsCard

  if (!data || !Array.isArray(data ) || data.length === 0 ) {
    <div>Data no avalible at the moment</div>
  }


  return (
    <div className={styles.container}>
      <DataContext.Provider value={data}>
        <CardProjects/>
      </DataContext.Provider>
    </div>  
  )
}
