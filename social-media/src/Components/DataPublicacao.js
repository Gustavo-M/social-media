import React from 'react';

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from './DataPublicacao.module.css';

const DataPublicacao = ({flag, content, contentHora}) => {

  const [data, setData] = React.useState('');
  const [hora, setHora] = React.useState('');

  function handleChange(event) {
   const dataFormatada = format( parseISO(event.target.value), `dd 'de' MMMM yyyy`, {locale: ptBR});
   setData(dataFormatada);
   flag(dataFormatada)
   content(dataFormatada);
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
              contentHora(event.target.value);
            })}/>
        </form>
      </div>
    </section>
  )
}

export default DataPublicacao;