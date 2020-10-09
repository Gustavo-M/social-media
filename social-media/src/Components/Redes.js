import React from 'react';
import styles from './Redes.module.css';
import instagram from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';
import youtube from '../img/youtube.svg';
import pinterest from '../img/pinterest.svg';
import twitter from '../img/twitter.svg';
import facebook from '../img/facebook.svg';

const Redes = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Redes sociais</h1>
        <ul className={styles.iconsRedes}>
          <li>
            <img src={instagram} alt=""/>
          </li>
          <li>
            <img src={linkedin} alt=""/>
          </li>
          <li>
            <img src={youtube} alt=""/>
          </li>
          <li>
            <img src={pinterest} alt=""/>
          </li>
          <li>
            <img src={twitter} alt=""/>
          </li>
          <li>
            <img src={facebook} alt=""/>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Redes;