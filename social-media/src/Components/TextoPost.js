import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import Picker from 'emoji-picker-react';
import styles from './TextoPost.module.css';


const TextoPost = ({flag, content}) => {
  
  const [mensagem, setMensagem] = React.useState('');
  const [open, setOpen] = React.useState(false);


  const onEmojiClick = (_, emojiObject) => {
    setMensagem(mensagem + emojiObject.emoji);
    flag(mensagem + emojiObject.emoji);
    content(mensagem + emojiObject.emoji);
    setOpen(false);
  };

  function handleClick(){
    setOpen(!open)
  }

  function handleChange({target}){
    setMensagem(target.value);
    flag(target.value);
    content(target.value);
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Texto do post</h1>
        <div className={styles.containerForm}>
          <form>
            <textarea value={mensagem} className={styles.txtArea} onChange={handleChange} 
            placeholder="Aqui vai o texto descritivo desse post"/>
            <FontAwesomeIcon icon={faSmile} onClick={handleClick} className={styles.iconSmile} />
          </form>
        </div>
        <div className={styles.boxEmoji}> 
          {open && <Picker disableAutoFocus={false} disableSearchBar={true} disableSkinTonePicker={true} onEmojiClick={onEmojiClick} />}
        </div>
      </div>
    </section>
  )
}

export default TextoPost;