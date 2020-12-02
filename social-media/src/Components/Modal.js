import React from 'react';
import ImgModal from '../img/img-modal.svg';
import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({id = 'modal', modal, setModal, dados}) => {

  //console.log("oi", dados);

  const navigate = useNavigate();

  function close(){
    setModal(false);
  }

  const handleClickOut = (e) => {
    if(e.target.id === id){
      close();
      navigate('/lista');
    }
  }

  if(modal)
  return (
    <>
      <section id={id} className={styles.modal} onClick={handleClickOut}>
        <div className={styles.container}>
          <img src={ImgModal} alt="Smile"/>
          <h1>Agendado com sucesso!</h1>
          <button onClick={() => setModal(false)}>OK</button>
        </div>
      </section>
    </>
  )
  return null;
}

export default Modal;