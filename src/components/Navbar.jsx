import React from 'react'
import styles from "./navbar.module.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h2 className={styles.heading}>Sadak Chaap</h2>
        <div className={styles.linksDiv}>
            <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="/men">Men</Link>
            <Link className={styles.link} to="/women">Women</Link>
        </div>
        <ShoppingCartOutlinedIcon/> 
    </div>
  )
}

export default Navbar