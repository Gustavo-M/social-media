import React from 'react';
import styles from './VisualizacaoPost.module.css';
import postImage from '../img/post.svg';
import TemplateRedesSocial from './TemplateRedesSocial';

const VisualizacaoPost = ({redeSelected}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Visualização do post</h1>
        {
          redeSelected === 'Instagram' 
          
          ? <TemplateRedesSocial /> 
          
          : <div className={styles.contentPreview}>
              <p>Aguardando conteúdo. Informe os canais e <br/>as mídias desejadas para visualização.</p>
              <img src={postImage} alt=""/>
            </div>
        }
      </div>
    </div>
  )
}

export default VisualizacaoPost;