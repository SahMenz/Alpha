import React from 'react'
import styles from './nav.module.css'
import dlogo from '../images/dlogo.svg'

function Nav() {
  return (
    <div className={styles.header}>
        <div className={styles.logos}>
            <img src={dlogo} alt="" />
            <span className={styles.dlogos}>A</span>
        </div>
        <div class={styles.bars}>
            <div className={styles.barer}></div>
            <div className={styles.barer}></div>
            <div className={styles.barer}></div>
        </div>
        {/* <div class={styles.response}>
            <div class={styles.assu}>Home</div>
            <div class={styles.assu}>About</div>
            <div class={styles.assu}>Portfolio</div>
            <div class={styles.assu}>Contact</div>
        </div> */}
    </div>
  )
}

export default Nav