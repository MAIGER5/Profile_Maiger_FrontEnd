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
import { MdOutlineContacts } from "react-icons/md";
import { VscRadioTower } from "react-icons/vsc";
import { MdOutlineSensorOccupied } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";





export const MenuLeft = () => {


  return (
    <div className={styles.container}>
      <div>hola mundo</div>
      <ul>
        <li>
          <MdDeveloperMode/>
          <span>FULL STACK</span>
        </li>
        <li>
          <PiStudentFill/>
          <span>Educación</span>
        </li>
        <li>
          <GrUserExpert/>
          <span>Experiencia</span>
        </li>
        <li>
          <IoLanguageSharp/>
          <span>Lenguaje</span>
        </li>
        <li>
          <GiSkills/>
          <span>Habilidades</span>
        </li>
        <li>
          <ImGithub/>
          <span>Mis Proyectos</span>
        </li>
        <li>
          <ImProfile/>
          <span>Otros Perfiles</span>
        </li>
        <ul className={styles.submenu}>
          <li>
            <VscRadioTower/>
            <span>Telecomunicaciones</span>
          </li>
          <li>
            <MdOutlineSensorOccupied/>
            <span>SG_SST</span>
          </li>
          <li>
            <FaPersonMilitaryRifle/>
            <span>Militar</span>
          </li>

        </ul>
        <li>
          <MdOutlineContacts/>
          <span>Inf. de Contacto</span>
        </li>

      </ul>
    </div>
  )
}
