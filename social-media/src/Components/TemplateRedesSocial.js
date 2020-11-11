import React from 'react';
import styles from './TemplateRedesSocial.module.css';
import logoInstagram from '../img/logo-insta.svg';
import fotoPreview from '../img/foto.svg';

const TemplateRedesSocial = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerPost}>
          <img src={logoInstagram} alt="Instagram"/>
          <p>Anselmo Carlos</p>
        </div>
        <img className={styles.imagePreview} src={fotoPreview} alt=""/>
        <div className={styles.iconsLike}>
            <img src="" alt=""/>
            <img src="" alt=""/>
        </div>
        <img src="" alt=""/>
        <p>Descrição</p>
      </div>
    </section>
  )
}

export default TemplateRedesSocial;