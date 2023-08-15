import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          © 2023 Avinesh Pratap Singh, Indian Institute of Technology (ISM), Dhanbad.
        </p>
      </div>
    </div>
  );
};

export default Footer;
