import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';


const cld = new Cloudinary({
  cloud: {
    cloudName: 'dbn2bb4e2'
  }
});



export const cloudinary_Home = {
  myPicture: cld.image('perfil_o4lenu')
}