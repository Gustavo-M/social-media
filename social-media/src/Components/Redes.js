import React from 'react';
import styles from './Redes.module.css';

import { socialMedia } from './DataRedes.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedinIn, faYoutube, faPinterestP, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faLinkedinIn, faYoutube, faPinterestP, faTwitter, faFacebookF);

const Redes = () => {

  const [active, setActive] = React.useState(true);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Redes sociais</h1>

        <ul className={styles.iconsRedes}>
          {socialMedia.data.map((iconRedes) => (
            <li key={iconRedes.id}>
              <FontAwesomeIcon className={styles.disabled} icon={['fab', `${iconRedes.icon}`]} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Redes;