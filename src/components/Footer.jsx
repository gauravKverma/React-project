import { Link } from "react-router-dom"
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerLinks}>
            <Link className={styles.link} to="/faq">FAQ</Link>
            <Link className={styles.link} to="/aboutUs">About Us</Link>
            <Link className={styles.link} to="/contact">Contact Us</Link>
            <Link className={styles.link} to="/authentic">Authenticity</Link>
            <Link className={styles.link} to="/top">We are No.1</Link>
        </div>
        <div className={styles.footerIcons}>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>
        </div>
    </div>
  )
}

export default Footer