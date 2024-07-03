import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          © 2023 Made By Ujjwal Jindal Revised by Avinesh Pratap Singh, IIT Dhanbad.
        </p>
      </div>
    </div>
  );
};

export default Footer;
