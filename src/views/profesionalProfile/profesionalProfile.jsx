import React, { useState } from 'react';
import styles from './profesionalProfile.module.css'
import { useNavigate } from 'react-router-dom';
import { BotonBack, CardName, Educations, Experience, FullStack, LikePost, MenuLeft } from '../../import_And_export/import_And_export';

export const ProfesionalProfile = () => {

  const [selectedContent, setSelectedContend] = useState('fullStack')

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  const handleMenuClick = (view)=>{
    setSelectedContend(view)
  }


  return (
    <div className={styles.container}>
      <div className={styles.menuLeft}>
        <MenuLeft onMenuClick={handleMenuClick}/>
      </div>
      <div className={styles.contentRight}>
        {selectedContent === 'fullStack' && <FullStack/>}
        {selectedContent === 'edcucation' && <Educations/>}
        {selectedContent === 'experience' && <Experience/>}
        {selectedContent === 'languaje' && <FullStack/>}
        {selectedContent === 'skills' && <FullStack/>}
        {selectedContent === 'myProjects' && <FullStack/>}
        {selectedContent === 'otherProfiles' && <FullStack/>}
        {selectedContent === 'telecommunications' && <FullStack/>}
        {selectedContent === 'ocpuational' && <FullStack/>}
        {selectedContent === 'military' && <FullStack/>}
        {selectedContent === 'contact' && <FullStack/>}
      </div>
      <div onClick={()=> handleNavigate('/')} className={styles.botonBack}>
        <BotonBack/>
      </div>

    </div>
  )
}
