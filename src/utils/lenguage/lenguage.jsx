import React, { useEffect, useRef, useState } from 'react';
import styles from './lenguage.module.css'



export const Lenguage = () => {

  const [active, setActive] = useState(false);

  const refer = useRef([]);

  const handlerMouseOver = (div) => {
    div.style.background = '#e26f36';
  }

  const handlerMouseOut = (div) => {
    div.style.background = '';
  }

  useEffect(() => {

    refer.current.forEach(div => {
      if(div){
        div.addEventListener('mouseover', () => handlerMouseOver(div))
        
        div.addEventListener('mouseout', () => handlerMouseOut(div))
      }
    })

    return () => {
      refer.current.forEach(div => {
        if(div){
          div.removeEventListener('mouseover', () => handlerMouseOver(div))
          div.removeEventListener('mouseout', () => handlerMouseOut(div))
        }
      })
    }
  }, [])



  return (
    <ul className={styles.container}>
      <li ref={el => refer.current[0] = el}>EN</li>
      <li ref={el => refer.current[1] = el}>ES</li>
    </ul>
  )
}
