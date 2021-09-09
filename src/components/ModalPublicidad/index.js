import { useEffect, useState } from 'react'
import Modal from '../Modal'
import Publicidad from '@/sections/Publicidad'

const ModalPublicidad = ({ inView = false }) => {
  const [isInView, setisInView] = useState(false)
  const [isFirtTime, setIsFirtTime] = useState(true)

  useEffect(() => {
    if (inView) setisInView(inView)
  }, [inView])

  return (
    <Modal onClose={() => setIsFirtTime(false)} isOpen={isInView && isFirtTime}>
      <Publicidad isMobile={false} onClose={() => setIsFirtTime(false)} />
    </Modal>
  )
}

export default ModalPublicidad
