import React from 'react';
import styles from './navBar.module.css'

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="#seccion1">Sección 1</a></li>
        <li><a href="#seccion2">Sección 2</a></li>
        <li><a href="#seccion3">Sección 3</a></li>
        <li><a href="#seccion3">Sección 3</a></li>
        <li><a href="#seccion3">Sección 3</a></li>
      </ul>
    </nav>
  )
}
