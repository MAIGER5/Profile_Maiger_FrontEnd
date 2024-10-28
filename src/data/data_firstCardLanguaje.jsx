import React from 'react';
import { MdOutlineLanguage } from "react-icons/md";
import { TbMessageLanguage } from "react-icons/tb";



export const data_firstCardLanguaje = 
  {
    id:1,
    title:'Este es el titulo de la vista de Languaje',
    subtitle:'mis lenguajes los cuales estoy hablando',
    view:'languaje',
    botonsCircle:[
      {
        id:1,
        icon:<TbMessageLanguage/>,
        text:'Español',
        level:'Nativo'
      },
      {
        id:2,
        icon:<MdOutlineLanguage/>,
        text:'English',
        level:'B2 - (Pre-Advanced - Level 10)'
      }
    ],
  }

