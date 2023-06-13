import React from 'react'
import styles from './footer.module.css'
import facebs from '../../images/facebs.svg'
import instagram from '../../images/instagram.svg'
import twitts from '../../images/twitts.svg'

function Footer() {
  return (
    <div className={styles.general}>
        <div className={styles.footertop}>
            <div className={styles.contact}>Contact</div>
            <div className={styles.contact}>Blog</div>
            <div className={styles.contact}>FAQ</div>
        </div>
        <div className={styles.footerbottom}>
            <img src={facebs} alt="" />
            <img src={instagram} alt="" />
            <img src={twitts} alt="" />
        </div>
    </div>
  )
}

export default Footer