import React from 'react';
import styles from './profesionalProfile.module.css'
import { useNavigate } from 'react-router-dom';
import { BotonBack, CardColors, CardName, LikePost, MenuLeft } from '../../import_And_export/import_And_export';

export const ProfesionalProfile = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <div className={styles.container}>
      <div className={styles.menuLeft}>
        <MenuLeft/>
      </div>
      <div className={styles.contentRight}>
        <CardName/>
        <CardColors/>
        <div>
          <LikePost/>
        </div>
      </div>
      <div onClick={()=> handleNavigate('/')} className={styles.botonBack}>
        <BotonBack/>
      </div>

    </div>
  )
}
