import React from 'react';
import styles from '../../css/Footer.module.css';
import Image from 'next/image';

function Footer() {
  const logoVar1 = '/images/logo_var1.png'
  return (
    <footer className={styles.footer}>
      <Image priority={false} src={logoVar1} width={100} height={50}  alt="Kasa_footer" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
