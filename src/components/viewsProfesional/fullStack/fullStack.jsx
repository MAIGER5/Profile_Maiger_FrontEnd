import React from 'react';
import styles from './fullStack.module.css'
import { CardName } from '../../cardName/cardName'
import { CardColors } from '../../cardColors/cardColors'
import { LikePost } from '../../likePost/likePost'

export const FullStack = () => {
  return (
    <div className={styles.container}>
      <CardName/>
      <CardColors/>
      <LikePost/>
    </div>
  )
}
