import React from 'react';
import styles from './firstCardExperience.module.css'
import { BotonUsefull } from '../../../botonUsefull/botonUsefull';
import imagen from '../../../../utils/MERN-main.jpg'

export const FirstCardExperience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxImg}>
        <img src={imagen} alt="" />
        {/* <img src='https://media.licdn.com/dms/image/v2/D4D12AQEVgnR6B9CviA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686293618422?e=2147483647&v=beta&t=rHEfRM2FRHMf32Qx6w1jSLHELbfi4Pr-h6yyBkELveM' alt="" /> */}
      </div>
      <div>
        <span>Bienvenidos  <strong>Recruiter</strong></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore sunt, nulla non molestiae fuga similique aperiam quibusdam explicabo..</p>
      <BotonUsefull title={'Repositorios'}/>
      </div>
    </div>
  )
}
