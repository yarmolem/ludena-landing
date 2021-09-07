import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// components
import Header from '@/components/Header'
import { Slide1, Slide2 } from './Slides'

// styles
import styles from './nosotros.module.scss'

SwiperCore.use([Navigation])

const Nosotros = () => {
  return (
    <div className={styles.nosotros}>
      <div className={styles.nosotros_header}>
        <Header title="NOSOTROS" />
      </div>

      <div className={styles.nosotros_header_desktop}>
        <h2>NOSOTROS</h2>
      </div>

      <div className={styles.grid}>
        <div id="nosotros_slider" className={styles.nosotros_container}>
          <Swiper navigation spaceBetween={20}>
            <SwiperSlide>
              <Slide1 />
            </SwiperSlide>
            <SwiperSlide>
              <Slide2 />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.grid_item}>
          <Slide1 />
        </div>

        <div className={styles.nosotros_image}>
          <img src="/images/nosotros.png" alt="" />
        </div>

        <div className={styles.grid_item}>
          <Slide2 />
        </div>

        <div className={styles.nosotros_triangle}>
          <img src="/images/triangulo-nosotros.svg" alt="" />
        </div>
      </div>
      <div className={styles.nosotros_form}>
        <img src="/images/nosotros_form.svg" alt="" />
      </div>
    </div>
  )
}

export default Nosotros
