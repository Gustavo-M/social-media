import React from 'react';
import styles from './TemplateLinkedin.module.css';
import logoLinkedin from '../img/linke.png';
import fotoPreview from '../img/foto.svg';
import iconCurtir from '../img/curtir.svg';
import iconComentarios from '../img/comentarios.svg';
import iconCompartilhar from '../img/compartilhar.svg';

const TemplateRedesSocial = ({descricao, imgPost, dataPost}) => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerPost}>
          <img src={logoLinkedin} alt="Linkedin"/>
          <div>
            <p>Anselmo Carlos</p>
            <p className={styles.dataStyle}>{dataPost}</p>
          </div>
        </div>
          <p className={styles.txtDescricao}>{descricao === null | descricao === '' ? 'Aqui vai o texto descritivo desse post' : descricao}</p>
          <img className={styles.imagePreview} src={imgPost === null ? fotoPreview : imgPost} alt=""/>        
        <div className={styles.contentPost}>
          <div className={styles.comments}>
            <p>5 comentários</p>
          </div>
        </div>
        <div className={styles.iconsLike}>
              <img src={iconCurtir} alt=""/>
              <img src={iconComentarios} alt=""/>
              <img src={iconCompartilhar} alt=""/>
          </div>
      </div>
    </section>
  )
}

export default TemplateRedesSocial;