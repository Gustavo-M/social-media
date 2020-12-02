import React from 'react';
import styles from './Footer.module.css';
import Modal from './Modal.js';

const Footer = ({redes}) => {

  const [modal, setModal] = React.useState(false);
  
  function handleClick(){
    setModal(true);
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <button className={styles.links}>Cancelar</button>
        <div className={styles.groupButtons}>          
          <button>Salvar rascunho</button>
          <button onClick={handleClick} disabled={redes === null} className={styles.footerBtnActive}>Agendar</button>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </section>
  )
}

export default Footer;