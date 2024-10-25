import React from 'react';
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { ImCss3 } from "react-icons/im";
import { SiRedux } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoServer } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiAuthelia } from "react-icons/si";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoArrowForwardOutline } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { IoIosCloudUpload } from "react-icons/io";
import { SiBisecthosting } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { FaTools } from "react-icons/fa";


export const Data_FullStack = [
  {
    id:1,
    icon:<MdOutlineDeveloperMode/>,
    title:'FRONT-END',
    infoCard:[
      {
        Infid:1,
        Inficon:<IoLogoReact/>,
        Infspan:'React+Vite, Router-Dom',
        colorStyle:'#61DAFB'
      },
      {
        Infid:2,
        Inficon:<IoLogoJavascript/>,
        Infspan:'JavaScript (ES6+)',
        colorStyle:'#F7DF1E'
      },
      {
        Infid:3,
        Inficon:<BiLogoTypescript/>,
        Infspan:'TypeScript',
        colorStyle:' #3178C6'
      },
      {
        Infid:4,
        Inficon:<FaHtml5/>,
        Infspan:'HTML5',
        colorStyle:'#E34F26'
      },
      {
        Infid:5,
        Inficon:<ImCss3/>,    
        Infspan:'CSS: [CSS module, NextUI, Boostrap5, Material UI, Ionic ]',
        colorStyle:'#1572B6'
      },
      {
        Infid:6,
        Inficon:<SiRedux/>,    
        Infspan:'Redux',
        colorStyle:'#764ABC'
      },
    ]
  },
  {
    id:2,
    icon:<MdMiscellaneousServices/>,
    title:'BACK-END',
    infoCard:[
      {
        Infid:1,
        Inficon:<FaNodeJs/>,
        Infspan:'Node.JS',
        colorStyle:'#339933'
      },
      {
        Infid:2,
        Inficon:<SiExpress/>,
        Infspan:'Express',
        colorStyle:'#000000'
      },
      {
        Infid:3,
        Inficon:<SiAuthelia/>,
        Infspan:'OAuth y JWT (JSON Web Tokens)',
        colorStyle:'#FFB800'
      },
      {
        Infid:4,
        Inficon:<AiOutlineSafetyCertificate/>,
        Infspan:'SSL/TLS',
        colorStyle:'#3C763D'
      },
      {
        Infid:5,
        Inficon:<MdOutlineIntegrationInstructions/>,
        Infspan:'Integración de APIs',
        colorStyle:'#1E90FF'
      },
      {
        Infid:5,
        Inficon:<VscFileSubmodule/>,
        Infspan:'Modularizacion: [Microservicios, Monolítica]',
        colorStyle:'#6A0DAD'
      },
    ]
  },
  {
    id:3,
    icon:<IoServer/>,
    title:'BASE DE DATOS',
    infoCard:[
      {
        Infid:1,
        Inficon:<BiLogoPostgresql />,
        Infspan:'PostgreSQL',
        colorStyle:'#336791'
      },
      {
        Infid:2,
        Inficon:<SiMysql/>,
        Infspan:'MySQL',
        colorStyle:'#E48E00'
      },
      {
        Infid:3,
        Inficon:<SiMongodb/>,
        Infspan:'MongoDB',
        colorStyle:'#47A248',
      },
      {
        Infid:4,
        Inficon:<IoArrowForwardOutline/>,
        Infspan:'Diseño de los datos y manejo de consultas',colorStyle:'#142d4c'
      },
      {
        Infid:5,
        Inficon:<IoArrowForwardOutline/>,
        Infspan:'Seguridad, optimización del rendimiento',colorStyle:'#142d4c'
      },
      {
        Infid:6,
        Inficon:<IoArrowForwardOutline/>,
        Infspan:'Integración y administración eficiente ',colorStyle:'#142d4c'
      },

    ]
  },
  {
    id:4,
    icon:<FaTools/>,
    title:'DevOps & TOOLS',
    infoCard:[
      {
        Infid:1,
        Inficon:<FaGithub/>,
        Infspan:'GitBash, GitHub: [ Actions, WorkFlows ]',colorStyle:'#181717'
      },
      {
        Infid:2,
        Inficon:<GrDeploy/>,
        Infspan:'Despliegue automatizado en la nube',colorStyle:'#00ADEF'
      },
      {
        Infid:3,
        Inficon:<IoIosCloudUpload/>,
        Infspan:'Acceso FTP & SSH',
        colorStyle:'#0073E6'
      },
      {
        Infid:4,
        Inficon:<SiBisecthosting/>,
        Infspan:'Administraciòn de Hosting: [ Servicios Web, Mail, Dominio ]',
        colorStyle:'#3EB489'
      },
      {
        Infid:5,
        Inficon:<AiOutlineCloudServer/>,
        Infspan:'VPS',
        colorStyle:'#4F4F4F'
      },
      {
        Infid:5,
        Inficon:<FaNetworkWired/>,
        Infspan:'NetWorking',
        colorStyle:'#FF6600'
      },
    ]
  },

]