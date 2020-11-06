import React from 'react';
import styles from './Footer.module.css';

const Footer = ({redes}) => {

  function handleClick(){
    console.log("Hello");
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
                
      <button onClick={handleClick} className={styles.links}>Cancelar</button>
        <div className={styles.groupButtons}>          
          <button>Salvar rascunho</button>
          <button disabled={redes === ''} className={styles.footerBtnActive}>Agendar</button>
        </div>
      </div>
    </section>
  )
}

export default Footer;