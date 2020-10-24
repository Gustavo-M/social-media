import React from 'react';
import styles from './Redes.module.css';

import { socialMedia } from './DataRedes.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedinIn, faYoutube, faPinterestP, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faLinkedinIn, faYoutube, faPinterestP, faTwitter, faFacebookF);

const Redes = () => {

  const [active, setActive] = React.useState('');

  const newOrder = socialMedia.data.map((item) => (
    {
      id: item.id,
      name: item.name,
      icon: item.icon,
      status: item.status
    }
  ))

  newOrder.push(newOrder.splice(0,1)[0]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Redes sociais</h1>

        <ul className={styles.iconsRedes}>
          {newOrder.map((iconRedes) => (
            <li key={iconRedes.id}>
              <button 
                disabled={iconRedes.status === 'disabled'}
                onClick={() => 
                setActive(iconRedes.name)} 
                className={active === iconRedes.name ? styles.enabled : ''}>
                  <FontAwesomeIcon                
                    icon={['fab', `${iconRedes.icon}`]} 
                 />
              </button>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Redes;