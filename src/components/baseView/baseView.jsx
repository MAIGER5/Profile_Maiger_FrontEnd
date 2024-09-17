import React, { useEffect } from 'react';
import styles from './baseView.module.css';
import {Cloudinary} from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react'

export const BaseView = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  }); 

  const myImage = cld.image('primerFondo')

  const colores = [
    'rgba(34, 40, 49, 0.5)',   // #222831 con opacidad 0.5
    'rgba(57, 62, 70, 0.5)',   // #393e46 con opacidad 0.5
    'rgba(249, 109, 0, 0.5)',  // #f96d00 con opacidad 0.5
    'rgba(219, 216, 227, 0.5)' // #dbd8e3 con opacidad 0.5
  ];
  
  const arr_Tr = new Array(100).fill(null);
  const arr_Td = new Array(100).fill(null);


  useEffect(()=>{

    const celdas = document.querySelectorAll('td');
  
    celdas.forEach((celda)=>{
      celda.addEventListener('mouseover', ()=>{
        const colorAleatory = colores[Math.floor(Math.random()*colores.length)];
        celda.style.background = colorAleatory;
      });
  
      celda.addEventListener('mouseleave', ()=>{
        setTimeout(() => {
        celda.style.background = '';
        }, 100);
      })
    })

    return ()=>{
      celdas.forEach((celda)=>{
        celda.removeEventListener('mouseover', ()=>{});
        celda.removeEventListener('mouseleave', ()=>{});
      });
    }
  }, [])


  return (
    <div className={styles.container}>


      <section>

        {/* <AdvancedImage cldImg={myImage}/> */}

        <table>
          <tbody>
            {
              arr_Tr.map((_, rowIndex)=>(
                <tr key={rowIndex}>
                  {
                    arr_Td.map((_, celIndex)=>(
                      <td key={celIndex}>

                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>

      </section>
      
    </div>
  )
}
