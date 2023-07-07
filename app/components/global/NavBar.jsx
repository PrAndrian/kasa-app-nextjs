import React from 'react';
import styles from '../../css/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
  const logo = '/images/logo.png'

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image 
          className={styles.logo} 
          src={logo} 
          priority={true} 
          alt="Logo"
          width={145}
          height={47}
        />
          
      </Link>

      <div id={styles.links}>
        <Link href="/">
          Accueil
        </Link>
        <Link href="/a-propos">
          A propos
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
