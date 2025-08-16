import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} MIRA Market
    </footer>
  );
};

export default Footer;
