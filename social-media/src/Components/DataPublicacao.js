import React from 'react';

import { format, parseISO } from 'date-fns';

import styles from './DataPublicacao.module.css';

const DataPublicacao = () => {

  const [data, setData] = React.useState('');
  const [hora, setHora] = React.useState('');

  function handleChange(event) {
   const dataFormatada = format( parseISO(event.target.value), 'dd/MM/yyyy');
   //setData(dataFormatada);
   console.log(dataFormatada);
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Data de publicação</h1>
        <form>
          <input type="date" value={data} onChange={handleChange}/>
          <input type="time" name="time" value={hora} onChange={(event) => setHora(event.target.value)}/>
        </form>
      </div>
    </section>
  )
}

export default DataPublicacao;