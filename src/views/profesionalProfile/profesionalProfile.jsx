import React from 'react';
import styles from './profesionalProfile.module.css'
import { useNavigate } from 'react-router-dom';
import { CardColors, CardName, MenuLeft } from '../../import_And_export/import_And_export';
import { Widgets } from '../../components/widgets/widgets';

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
        <Widgets/>
      </div>
      <button
        onClick={()=> handleNavigate('/') }
      >Back</button>

    </div>
  )
}
