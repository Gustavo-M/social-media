import React from 'react';
import styles from './Redes.module.css';

import { socialMedia } from './DataRedes.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedinIn, faYoutube, faPinterestP, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faLinkedinIn, faYoutube, faPinterestP, faTwitter, faFacebookF);

const Redes = ({flag}) => {

  const [active, setActive] = React.useState('');

  const {data} = socialMedia;

  const moverFinal = (arr, key, value) => {
    let item

    let novoArr = arr.reduce((acc, curr) => {
      if(curr[key] === value){
        item = curr
      }else {
        acc.push(curr)
      }
      
      return acc
    }, [])

    novoArr.push(item)

    return novoArr
  }


  const newOrder = moverFinal(data, 'name', 'Facebook');


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Redes sociais</h1>
        
        <ul className={styles.iconsRedes}>
          {newOrder.map((iconRedes) => (
            <li key={iconRedes.id}>
              <button 
                disabled={iconRedes.status === 'disabled'}
                onClick={(() => {
                  setActive(iconRedes.name)
                  flag(iconRedes.name)
                })} 
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