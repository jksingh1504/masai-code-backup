import React from 'react'
import styles from "./stylesheets/PuppyCard.module.css"

const PuppyCard = ({url}) => {
  return (
    <div className={styles.PuppyCard}>
        <img src={url} alt="puppy_image" />
    </div>
  )
}

export default PuppyCard