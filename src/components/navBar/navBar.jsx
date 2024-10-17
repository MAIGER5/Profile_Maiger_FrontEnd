import React, { useEffect, useState } from 'react';
import styles from './navBar.module.css';
import { PiCodeFill, PiCodeSimpleFill } from "react-icons/pi";
import {useLocation } from 'react-router-dom'


export const NavBar = () => {

  const [active, setActive] = useState(false);

  const location = useLocation();

  useEffect(()=>{
    location.pathname === '/'? setActive(true): setActive(false);

  }, [location])


  return (
    <>
      {
        active && (
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
    </>
  )

}
