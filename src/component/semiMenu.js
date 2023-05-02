import React from 'react'
import styles from './semiMenu.module.css'
import { menu } from './data';
import { testimonials } from './data';
import greenlong from '../images/greenlong.svg';
import copyright  from '../images/copyright.svg'

function SemiMenu() {
  return (
    <>
      <div className={styles.general}>
        <div className={styles.what}>What My Clients Say About Me</div>
        <div className={styles.cardone}>
          {menu.map((cards) => (
            <>
              <div className={styles.cardgeneral}>
                <div className={styles.cardtext}>"{cards.text}"</div>
                <img src={cards.profile} alt="" className={styles.cardprofile} />
                <div className={styles.cardnames}>{cards.names}</div>
                <div className={styles.cardoccupation}>{cards.occupation}</div>
              </div>
            </>
          ))}
        </div>
      </div>
      <fieldset className={styles.generaltwo}>
        <legend className={styles.influence}>Testimonials From People I Have Influenced</legend>
        <div className={styles.testify}>
          {testimonials.map((tset) => (
            <>
              <img src={tset.testy} alt="" className={styles.monials} />
            </>
          ))}
        </div>
      </fieldset>
      <div className={styles.greeen}>
        <div className={styles.exclaim}>
          <div className={styles.write}>Copywriting!</div>
          {/* <div className={styles.together}> */}
          <p className={styles.parag}>
            But what is copywriting and how can you make money from it?
            Simple.
            Let me explain.
            Copywriting is simply you showing me an opportunity or a discovery or a solution to my problem…
            But rather than talking to me physically about it…
            You write about it and put it on a website…
            Or send it to me as an email…
            Or even write it through your social media accounts like twitter, Facebook and even WhatsApp.
            It is that simple.
            And you know the best part?
          </p>
          {/* <img src={greenlong} alt="" className={styles.longer}/> */}
          {/* </div> */}
        </div>
        <div className={styles.anyone}></div>
      </div>
    </>
  )
}

export default SemiMenu