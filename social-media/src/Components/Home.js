import React from 'react';
import styles from '../Components/Home.module.css';
import home from '../img/home-post.svg';

const Home= () => {

  return (
    <section className={styles.container}>
      <img src={home} alt="vetor-post"/>
      <button>Agendar post</button>
    </section>
  )
}

export default Home;