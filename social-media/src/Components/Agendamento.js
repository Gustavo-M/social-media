import React from 'react';
import styles from './Agendamento.module.css';
import Redes from './Redes';
import DataPublicacao from './DataPublicacao';
import TextoPost from './TextoPost';
import Upload from './Upload';
import Footer from './Footer';

const Agendamento = ()=> {

  const [check, setCheck] = React.useState('');

  function info(params){
    setCheck(params);   
    console.log('rede', params);
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentDados}>
          <Redes flag={info} />
          <DataPublicacao flag={info} />
        </div>
        <div>
          <TextoPost flag={info} />
          <Upload />
        </div>
      </div>
      <Footer redes={check}/>
    </>
  )
}

export default Agendamento;