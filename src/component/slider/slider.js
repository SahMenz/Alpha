import Carousel from 'react-bootstrap/Carousel';
// import carouselone from './images/carouselone.svg'
// import carouseltwo from './images/carouseltwo.svg'
// import carouselthree from './images/carouselthree.svg'
// import carouselfour from './images/carouselfour.svg'
// import carouselcombination from './images/carouselcombination.svg'
import carouselone from '../../images/carouselone.svg'
import carouseltwo from '../../images/carouseltwo.svg'
import carouselthree from '../../images/carouselthree.svg'
import carouselfour from '../../images/carouselfour.svg'
import carouselcombination from '../../images/carouselcombination.svg'
import styles from './slider.module.css'

function Slider() {
// function Slider({carou}) {
  return (
    // <Carousel>
    //     {carou.map((carous)=> (
    //         <Carousel.Item key={carous.id}>
    //             <img
    //             className="d-block w-100"
    //             src={carous.img}
    //             alt={carous.slidetext}
    //             />
    //         </Carousel.Item>
    //     ))}
    // </Carousel>
    <Carousel>
        <Carousel.Item>
          <div className={styles.cardone}>
            <img src={carouselone} alt=""  className={styles.bluue}/>
            <img src={carouseltwo} alt="" className={styles.bluue}/>
            <img src={carouselthree} alt="" className={styles.bluue} />
          </div>
        </Carousel.Item>
         <Carousel.Item>
          <div className={styles.cardone}>
            <img src={carouselone} alt=""  className={styles.bluue}/>
            <img src={carouseltwo} alt="" className={styles.bluue}/>
            <img src={carouselthree} alt="" className={styles.bluue} />
          </div>
        </Carousel.Item>
       {/* <Carousel.Item>
            <img
            className="d-block mw-70"
            src={carouselthree}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block mw-70"
            src={carouselfour}
            alt="Four slide"
            />
        </Carousel.Item> */}
    </Carousel>
  );
}

export default Slider;