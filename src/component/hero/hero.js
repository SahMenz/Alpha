import React from 'react'
import styles from './hero.module.css'
import bars from '../../images/bars.svg'
import dollars from '../../images/dollars.svg'

function Hero() {
  return (
    <div>
        <div className={styles.general}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.how}>HOW ANYONE CAN MAKE</p>
                    <h1 className={styles.first}>$150 or More With Less Than 6 Hours Of Work Daily!</h1>
                    <p className={styles.are}>
                        Are you a student who is frustrated at the educational system? or a graduate trying 
                        to find your feet in the already filled up market? or you love to make 
                        shit tons of money writing for yourself and people around you? <span className={styles.different}> <br /> <i> <b> Then I can show you how to... </b> </i></span>
                    </p>
                    <div className={styles.get}> <a href="https://api.whatsapp.com/send/?phone=2347013779723&text&type=phone_number&app_absent=0" className={styles.new}> Get Access </a></div>
                </div>
                <div className={styles.head}></div>
            </div>
            <div className={styles.merge}>
                <img src={dollars} alt="#"  className={styles.dolls}/>
                <div className={styles.direct}>
                    <div className={styles.hi}>
                        <div className={styles.dit}>
                            <div className={styles.response}>HI, I’M A </div>
                            <div className={styles.copyight}> Direct Response <span className={styles.spanner}>Copywriter.</span></div>
                        </div>
                        <div className={styles.hello}>
                            Hello, my name is Damilare Aribisala a Direct Response Copywriter. 
                            I help brands, business owners and marketers make more money.
                        </div>
                        <a href="https://api.whatsapp.com/send/?phone=2347013779723&text&type=phone_number&app_absent=0" className={styles.newss}><div className={styles.cont}> Contact </div></a>
                    </div>
                    <img src={bars} alt="#"  className={styles.imagery}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

// &mbsp;