import React from 'react';
import styles from './Agendamento.module.css';
import Redes from './Redes';
import DataPublicacao from './DataPublicacao';
import TextoPost from './TextoPost';
import Upload from './Upload';
import Footer from './Footer';
import VisualizacaoPost from './VisualizacaoPost';

const Agendamento = ({setFinalData}) => {

  const [check, setCheck] = React.useState(null);
  const [flagRedes, setFlagRedes] = React.useState(null);
  const [txtPost, setTxtPost] = React.useState(null);
  const [imgPost, setImgPost] = React.useState(null);
  const [dataPost, setDataPost] = React.useState(null);
  const [horaPost, setHoraPost] = React.useState(null);

  React.useEffect(() => {
    setFinalData({
      redeSocial: flagRedes,
      descricao: txtPost,
      image: imgPost,
      datas: dataPost,
      horas: horaPost
    });
  }, [dataPost, flagRedes, horaPost, imgPost, txtPost, setFinalData]);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentDados}>
          <div className={styles.box1}>
            <Redes flag={setCheck} socialMd={setFlagRedes} />
            <DataPublicacao content={setDataPost} contentHora={setHoraPost} flag={setCheck} /> 
          </div>
          <div className={styles.preview}>
            <VisualizacaoPost contentPost={txtPost} imagemPost={imgPost} datasPost={dataPost} redeSelected={flagRedes} />
          </div>
          <div className={styles.box2}>
            <TextoPost content={setTxtPost} flag={setCheck} />
            <Upload content={setImgPost} flag={setCheck} />
          </div>
        </div>
      </div>
      <Footer redes={check}/>
    </>
  )
}

export default Agendamento;