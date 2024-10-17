import React from 'react';
import styles from './profesionalProfile.module.css'
import { useNavigate } from 'react-router-dom'

export const ProfesionalProfile = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <div className={styles.container}>
      <div className={styles.menuLeft}></div>
      <div className={styles.contentRight}></div>
      {/* <button
        onClick={()=> handleNavigate('/') }
      >Back</button> */}

    </div>
  )
}
