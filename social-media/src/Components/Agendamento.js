import React from 'react';
import styles from './Agendamento.module.css';
import Redes from './Redes';
import DataPublicacao from './DataPublicacao';
import TextoPost from './TextoPost';
import Upload from './Upload';

const Agendamento = ()=> {

  return (
    <div className={styles.content}>
      <div className={styles.contentDados}>
        <Redes />
        <DataPublicacao />
      </div>
      <div>
        <TextoPost />
        <Upload />
      </div>
    </div>
  )
}

export default Agendamento;