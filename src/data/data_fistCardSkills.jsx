import React from 'react';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";


export const data_fistCardSkills =   {
  id:1,
  title:'Este es el titulo de la vista de Languaje',
  subtitle:'mis lenguajes los cuales estoy hablando',
  view:'skills',
  botonsCircle:[
    {
      id:1,
      icon:<MdOutlineWorkspacePremium/>,
      text:'Habilidades Profesionales',
      level:''
    },
    {
      id:2,
      icon:<FaPersonArrowUpFromLine/>,
      text:'Habilidades Blandas',
      level:''
    }
  ],
}