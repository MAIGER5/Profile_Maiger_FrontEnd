import React, { useState } from 'react';
import styles from './educations.module.css'
import { DataContext } from '../../../dataContext/dataContext';
import { EducationsCard1 } from '../components/educationsCard1/educationsCard1';
import { EducationOther } from '../components/educationOther/educationOther';
import { data_OthersEducations } from '../../../data/data_OthersEducations';
import { data_courses } from '../../../data/data_courses';
import { Courses } from '../components/courses/courses';



export const Educations = () => {

  const dataOthers = data_OthersEducations;
  const dataCourses = data_courses;

  const [data] = useState(dataOthers)
  const [data2] = useState(dataCourses)

  return (
    <div className={styles.container}>
      <EducationsCard1/>
      <div className={styles.tecnogyCourses}>
        <DataContext.Provider value={data}>
          <EducationOther/>
        </DataContext.Provider>
        <DataContext.Provider value={data2}>
          <Courses/>
        </DataContext.Provider>

      </div>
    </div>
  )
}
