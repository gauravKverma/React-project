import React from 'react'
import styles from "./contact.module.css";

const ContactUs = () => {
  return (
    <div className={styles.maindiv}>
        <h1 className={styles.heading}>Contact</h1>
        <p className={styles.para1}>If you want to talk to us, dial 100 using your mobile phone. As soon as someone picks up file a complaint and we will gladly help you.</p>
        <p className={styles.para}>If you want to talk to our customer support, give us some money then we can provide you customer support. We don't believe in customer satisfaction. </p>
        <p className={styles.para}>Good talk. Have a great day :)</p>
    </div>
  )
}

export default ContactUs