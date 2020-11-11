import React from 'react';
import styles from './Agendamento.module.css';
import Redes from './Redes';
import DataPublicacao from './DataPublicacao';
import TextoPost from './TextoPost';
import Upload from './Upload';
import Footer from './Footer';
import VisualizacaoPost from './VisualizacaoPost';

const Agendamento = ()=> {

  const [check, setCheck] = React.useState('');
  const [flagRedes, setFlagRedes] = React.useState('');

  function info(params){
    setCheck(params);
  }

  function flRedes(rd){
    setFlagRedes(rd);
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentDados}>
          <div className={styles.box1}>
            <Redes flag={info} socialMd={flRedes} />
            <DataPublicacao flag={info} /> 
          </div>
          <div className={styles.preview}>
            <VisualizacaoPost redeSelected={flagRedes} />
          </div>
          <div className={styles.box2}>
            <TextoPost flag={info} />
            <Upload flag={info} />
          </div>
        </div>
      </div>
      <Footer redes={check}/>
    </>
  )
}

export default Agendamento;