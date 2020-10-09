import React from 'react';
import styles from '../Components/Header.module.css';
import logo from '../img/mlabs-logo.svg';
import avatar from '../img/avatar.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <NavLink to="/">
          <img src={logo} alt="Mlabs"/>
        </NavLink>
        <div className={styles.dadosAvatar}>
          <img src={avatar} alt="Mlabs"/>
          <h1>Anselmo Carlos</h1>
        </div>
      </div>
    </section>
  )
}

export default Header;