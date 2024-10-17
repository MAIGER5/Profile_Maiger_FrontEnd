import React, { useState } from 'react';
import styles from './botonLikeComment.module.css'
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";



export const BotonLikeComment = () => {

  const [like, setLike] = useState(0)
  const [comment, setComment] = useState(0)

  const handleAddLike = () => {
    setLike(like + 1)
  }

  const handleAddComment = () => {
    setComment(comment + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.likeBoton}>
        <AiFillLike 
          onClick={() => handleAddLike()}
        />
        <span>{like}</span>
      </div>
      <div className={styles.likeBoton}>
        <FaComment
          onClick={() => handleAddComment()}
        />
        <span>{comment}</span>
      </div>
    </div>

  )
}

export default BotonLikeComment