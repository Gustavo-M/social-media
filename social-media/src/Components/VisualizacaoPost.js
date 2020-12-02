import React from 'react';
import styles from './VisualizacaoPost.module.css';
import postImage from '../img/post.svg';
import TemplateInstagram from './TemplateInstagram';
import TemplateLinkedin from './TemplateLinkedin';

const VisualizacaoPost = ({redeSelected, contentPost, imagemPost, datasPost}) => {

  function selectRedes(rede){
    switch (rede) {
      case 'Instagram':
        return <TemplateInstagram descricao={contentPost} imgPost={imagemPost}/>;
      case 'Linkedin':
        return <TemplateLinkedin descricao={contentPost} imgPost={imagemPost} dataPost={datasPost}/>;
      default:
        return (
          <div className={styles.contentPreview}>
             <p>Aguardando conteúdo. Informe os canais e <br/>as mídias desejadas para visualização.</p>
             <img src={postImage} alt=""/>
          </div>
        );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Visualização do post</h1>
        {
          selectRedes(redeSelected)
        }
      </div>
    </div>
  )
}

export default VisualizacaoPost;