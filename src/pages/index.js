import { useEffect, useState } from 'react'
import Head from 'next/head'

// terceros
import { useInView } from 'react-intersection-observer'

// sections
import Hero from '@/sections/Hero'
import Modal from '@/components/Modal'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Nosotros from '@/sections/Nosotros'
import Elegirnos from '@/sections/Elegirnos'
import Preguntas from '@/sections/Preguntas'
import Consultas from '@/sections/Consultas'
import Membresias from '@/sections/Membresias'
import Publicidad from '@/sections/Publicidad'
import ModalPublicidad from '@/components/ModalPublicidad'

const Home = () => {
  // Inview
  const heroInView = useInView()
  const preguntasInView = useInView()

  // States
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(min-width: 992px)').matches) {
      setIsMobile(true)
    }
  }, [])

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <div>
      <Head>
        <title>Ludeña Abogados | Inicio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Estudio Ludeña Abogados se especializa en la solución de controversias con un enfoque en Derecho Militar – Policial, solucionando con eficiencia las necesidades de nuestros clientes."
        />
      </Head>

      <Sidebar {...{ isOpen, onClose }} />
      <Navbar {...{ onOpen, inView: heroInView.inView }} />

      <div className="forma1">
        <img src="/images/form_1.png" alt="" />
        <div ref={heroInView.ref}>
          <Hero {...{ onOpen }} />
        </div>
        <Nosotros />
      </div>
      <Membresias />
      <div className="forma2">
        <img src="/images/form_2.png" alt="" />
        <Elegirnos />
        <Publicidad {...{ isMobile: true }} />
        <div ref={preguntasInView.ref}>
          <Preguntas />
        </div>
        {isMobile ? <ModalPublicidad inView={preguntasInView.inView} /> : null}
      </div>
      <Consultas />
      <Footer />

      <style jsx>{`
        .forma1,
        .forma2 {
          position: relative;
        }

        .forma1 img,
        .forma2 img {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
        }

        @media screen and (min-width: 992px) {
          .forma1 img,
          .forma2 img {
            display: grid;
          }
        }

        .forma1 img {
          width: 65%;
          height: 100%;
        }

        .forma2 img {
          width: 50%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default Home
