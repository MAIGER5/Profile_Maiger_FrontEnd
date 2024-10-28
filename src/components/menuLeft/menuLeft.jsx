import React from 'react';
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

  


  return (
    <div className={styles.container}>
      <div>hola mundo</div>
      <ul>
        <li onClick={ () => onMenuClick('fullStack')}>
          <MdDeveloperMode/>
          <span>FULL STACK</span>
        </li>
        <li onClick={ () => onMenuClick('edcucation')}>
          <PiStudentFill/>
          <span>Educación</span>
        </li>
        <li onClick={ () => onMenuClick('experience')}>
          <GrUserExpert/>
          <span>Experiencia</span>
        </li>
        <li onClick={ () => onMenuClick('skills')}>
          <GiSkills/>
          <span>Habilidades</span>
        </li>
        <li onClick={ () => onMenuClick('languaje')}>
          <IoLanguageSharp/>
          <span>Lenguaje</span>
        </li>
        <li onClick={ () => onMenuClick('myProjects')}>
          <ImGithub/>
          <span>Mis Proyectos</span>
        </li>
        <li onClick={ () => onMenuClick('otherProfiles')}>
          <ImProfile/>
          <span>Otros Perfiles</span>
        </li>
        <ul className={styles.submenu}>
          <li onClick={ () => onMenuClick('telecommunications')}>
            <VscRadioTower/>
            <span>Telecomunicaciones</span>
          </li>
          <li onClick={ () => onMenuClick('ocpuational')}>
            <MdOutlineSensorOccupied/>
            <span>SG_SST</span>
          </li>
          <li li onClick={ () => onMenuClick('military')}>
            <FaPersonMilitaryRifle/>
            <span>Militar</span>
          </li>

        </ul>
        <li onClick={ () => onMenuClick('contact')}>
          <IoMdChatboxes/>
          <span>Chat & Contacto</span>
        </li>

      </ul>
    </div>
  )
}
