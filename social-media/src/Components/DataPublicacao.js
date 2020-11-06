import React from 'react';

import { format, parseISO } from 'date-fns';

import styles from './DataPublicacao.module.css';

const DataPublicacao = ({flag}) => {

  const [data, setData] = React.useState('');
  const [hora, setHora] = React.useState('');

  function handleChange(event) {
   const dataFormatada = format( parseISO(event.target.value), 'dd/MM/yyyy');
   setData(dataFormatada);
   flag(dataFormatada)
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Data de publicação</h1>
        <form>
          <input type="date" onChange={handleChange}/>
          <input 
            type="time" 
            name="time" 
            value={hora} 
            onChange={((event) => {
              setHora(event.target.value); 
              flag(event.target.value);
            })}/>
        </form>
      </div>
    </section>
  )
}

export default DataPublicacao;