import React from 'react';
import styles from '../Components/Home.module.css';
import home from '../img/home-post.svg';
import { NavLink } from 'react-router-dom';

const Home= () => {

  return (
    <section className={styles.container}>
      <img src={home} alt="vetor-post"/>
      <NavLink to="agendamento" className={styles.btnAgendar}>Agendar post</NavLink>
    </section>
  )
}

export default Home;