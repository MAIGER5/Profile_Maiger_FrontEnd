import React from 'react';
import styles from './skills.module.css'
import { data_fistCardSkills } from '../../../data/data_fistCardSkills'
import { DataContext } from '../../../dataContext/dataContext'
import { FirstCadLanguaje } from '../components/firstCadLanguaje/firstCadLanguaje'
import { EducationOther } from '../components/educationOther/educationOther'
import { data_skills, data_skills1 } from '../../../data/data_skills'



export const Skills = () => {

  const data1 = data_fistCardSkills
  const data2 = data_skills
  const data3 = data_skills1


  return (
    <div className={styles.container}>
      <DataContext.Provider value={data1}>
        <FirstCadLanguaje/>
      </DataContext.Provider>
      <section>
        <div>
          <DataContext.Provider value={data2}>
            <EducationOther/>
          </DataContext.Provider>
        </div>
        <div>
          <DataContext.Provider value={data3}>
            <EducationOther/>
          </DataContext.Provider>
        </div>

      </section>

    </div>
  )
}
