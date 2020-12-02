import React from 'react';
import styles from './TemplateInstagram.module.css';
import logoInstagram from '../img/logo-insta.svg';
import fotoPreview from '../img/foto.svg';
import iconLike from '../img/icon-like.svg';
import iconComments from '../img/icon-comments.svg';
import iconArchive from '../img/icons-archive.svg';

const TemplateRedesSocial = ({descricao, imgPost}) => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerPost}>
          <img src={logoInstagram} alt="Instagram"/>
          <p>Anselmo Carlos</p>
        </div>
          <img className={styles.imagePreview} src={imgPost === null ? fotoPreview : imgPost} alt=""/>        
        <div className={styles.contentPost}>
          <div className={styles.iconsLike}>
              <img src={iconLike} alt=""/>
              <img src={iconComments} alt=""/>
          </div>
          <img src={iconArchive} alt=""/>
        </div>
        <div className={styles.footerPost}>
          <p>{descricao === null | descricao === '' ? 'Aqui vai o texto descritivo desse post' : descricao}</p>  
        </div>
      </div>
    </section>
  )
}

export default TemplateRedesSocial;