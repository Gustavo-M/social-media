import React from 'react';
import styles from './TextoPost.module.css';

const TextoPost = () => {
  
  const [mensagem, setMensagem] = React.useState('');

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Texto do post</h1>
        <form>
          <textarea value={mensagem} onChange={({ target }) => setMensagem(target.value)} 
          placeholder="Aqui vai o texto descritivo desse post"/>
        </form>
      </div>
    </section>
  )
}

export default TextoPost;