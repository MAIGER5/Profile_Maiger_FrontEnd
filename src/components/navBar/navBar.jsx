import React from 'react';
import styles from './navBar.module.css';
import { PiCodeFill, PiCodeSimpleFill } from "react-icons/pi";


export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="#seccion1"><PiCodeSimpleFill /></a></li>
        <li><a href="#seccion2"></a></li>
        <li><a href="#seccion3"></a></li>
        <li><a href="#seccion3"></a></li>
        <li><a href="#seccion3"><PiCodeFill /></a></li>
      </ul>
    </nav>
  )
}
