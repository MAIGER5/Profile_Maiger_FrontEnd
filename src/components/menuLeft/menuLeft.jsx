import React, { useState } from 'react';
import styles from './menuLeft.module.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdDeveloperMode } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { IoLanguageSharp } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { ImProfile } from "react-icons/im";
import { VscRadioTower } from "react-icons/vsc";
import { MdOutlineSensorOccupied } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";



export const MenuLeft = ({onMenuClick}) => {

  const [active, setActive] = useState('')
  
  const handleClick = (item)=>{
    setActive(item);
    onMenuClick(item)
  }

  return (
    <div className={styles.container}>
      {/* <div>hola mundo</div> */}
      <ul>
        <li onClick={ () => handleClick('fullStack')} className={`${!active || active === 'fullStack'? styles.backgroundFullStack:''}`}>
          <MdDeveloperMode/>
          <span>FULL STACK</span>
        </li>
        <li onClick={ () => handleClick('edcucation')} className={`${active === 'edcucation'? styles.backgroundFullStack1:''}`}>
          <PiStudentFill/>
          <span>Educación</span>
        </li>
        <li onClick={ () => handleClick('experience')} className={`${active === 'experience'? styles.backgroundFullStack2:''}`}>
          <GrUserExpert/>
          <span>Experiencia</span>
        </li>
        <li onClick={ () => handleClick('skills')} className={`${active === 'skills'? styles.backgroundFullStack3:''}`}>
          <GiSkills/>
          <span>Habilidades</span>
        </li>
        <li onClick={ () => handleClick('languaje')} className={`${active === 'languaje'? styles.backgroundFullStack4:''}`}>
          <IoLanguageSharp/>
          <span>Lenguaje</span>
        </li>
        <li onClick={ () => handleClick('myProjects')} className={`${active === 'myProjects'? styles.backgroundFullStack5:''}`}>
          <ImGithub/>
          <span>Mis Proyectos</span>
        </li>
        <li onClick={ () => handleClick('gitHub')} className={`${active === 'gitHub'? styles.backgroundFullStack6:''}`}>
          <ImProfile/>
          <span>GitHub</span>
        </li> 
        <ul className={styles.submenu}>
          <li onClick={ () => handleClick('telecommunications')}>
            <VscRadioTower/>
            <span>Telecomunicaciones</span>
          </li>
          <li onClick={ () => handleClick('ocpuational')}>
            <MdOutlineSensorOccupied/>
            <span>SG_SST</span>
          </li>
          <li li onClick={ () => handleClick('military')}>
            <FaPersonMilitaryRifle/>
            <span>Militar</span>
          </li>

        </ul>
        <li onClick={ () => handleClick('contact')}>
          <IoMdChatboxes/>
          <span>Chat & Contacto</span>
        </li>

      </ul>
    </div>
  )
}
