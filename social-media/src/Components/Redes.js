import React from 'react';
import styles from './Redes.module.css';
import instagram from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';
import youtube from '../img/youtube.svg';
import pinterest from '../img/pinterest.svg';
import twitter from '../img/twitter.svg';
import facebook from '../img/facebook.svg';

const Redes = () => {

  const [redes, setRedes] = React.useState(null);

  function handleClick ({target}){
    setRedes(target.alt);
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Redes sociais</h1>
        <ul className={styles.iconsRedes}>
          <li>
              <img src={instagram} alt="Instagram" onClick={handleClick} 
              className={redes === 'Instagram' ? `${styles.clic}` : ''}/>
          </li>
          <li>
              <img src={linkedin} alt="Linkedin" onClick={handleClick} 
              className={redes === 'Linkedin' ? `${styles.clic}` : ''}/>
          </li>
          <li>
             <img src={youtube} alt="Youtube"/>
          </li>
          <li>
             <img src={pinterest} alt="Pinterest"/>
          </li>
          <li>
             <img src={twitter} alt="Twitter"/>
          </li>
          <li>
             <img src={facebook} alt="Facebook"/>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Redes;