import React from 'react'
import styles from "./about.module.css"

const AboutUs = () => {
  return (
    <div className={styles.maindiv}>
        <h1 className={styles.heading}>About Us</h1>
        <h2 className={styles.para}>We are the Best. We know it, You know it and the whole world knows it. <br />
        We are Sadak Chaap.</h2>
    </div>
  )
}

export default AboutUs