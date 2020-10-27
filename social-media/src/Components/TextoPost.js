import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import Picker from 'emoji-picker-react';
import styles from './TextoPost.module.css';


const TextoPost = () => {
  
  const [mensagem, setMensagem] = React.useState('');
  const [open, setOpen] = React.useState(false);


  const onEmojiClick = (event, emojiObject) => {
    setMensagem(emojiObject.emoji + mensagem);
  };

  function handleClick(){
    setOpen(!open)
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Texto do post</h1>
        <form>
          <textarea value={mensagem} className={styles.txtArea} onChange={({ target }) => setMensagem(target.value)} 
          placeholder="Aqui vai o texto descritivo desse post"/>
          <FontAwesomeIcon icon={faSmile} onClick={handleClick} className={styles.iconSmile} />
        </form>
        

        {mensagem ? (
          <span>You chose: {mensagem.emoji}</span>
        ) : (
          <span>No emoji Chosen</span>
        )}
        {open && <Picker onEmojiClick={onEmojiClick} />}


      </div>
    </section>
  )
}

export default TextoPost;