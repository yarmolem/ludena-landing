import Modal from '../Modal'

// styles
import styles from './terminos.module.scss'

const Terminos = ({ isOpen, onClose }) => {
  return (
    <Modal {...{ isOpen, onClose }}>
      <div className={styles.terminos_header}>
        <h1>Políticas de Privacidad</h1>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.terminos_content}>
        <p>
          El Estudio Ludeña Abogados (en adelante, “ELA”) hace de conocimiento
          la presente política de privacidad y manejo de datos personales, en
          cumplimiento de la Ley N° 29733 y su Reglamento aprobado mediante
          Decreto Supremo N° 003-2013-JUS, en la que todo momento buscará que el
          tratamiento de los mismos sea legítimo, controlado e informado, de
          acuerdo a los siguientes criterios:
        </p>

        <p>
          PRIMERO: dicha política es de aplicación a toda la información
          ingresada a través de la página web, landing page y afines (en
          adelante, “Sitio Web”).
        </p>

        <p>
          SEGUNDO: con la sola utilización del Sitio Web, el usuario otorga su
          consentimiento informado, previo, libre, expreso e indefinido y
          autoriza expresamente al ELA para recopilar, registrar, organizar,
          almacenar, conservar, consultar, utilizar, bloquear, comunicar por
          transferencia o cualquier otra forma de procesamiento que facilite el
          acceso, correlación o interconexión de sus datos personales, así como
          su incorporación a bases de datos administradas o de titularidad del
          ELA, así como de la información que se derive de su uso y de cualquier
          información pública o que pudiera recoger de fuentes de acceso
          público.
        </p>

        <p>
          TERCERO: el usuario del Sitio Web da su consentimiento para
          transferir, a nivel nacional o internacional, los datos personales a
          terceros sean vinculados o no al ELA, a fin de alojar, almacenar,
          procesar y ejecutar la información del usuario. Por tanto, queda
          establecido que la acción de cliquear en los botones “enviar”,
          “agendar cita”, “contratar”, “aceptar”, “solicitar” y/o cualquier otra
          definición similar, así como el solo acto de brindarnos sus datos o de
          navegar por el Sitio Web, se manifiesta de por sí un consentimiento
          por parte del titular.
        </p>

        <p>
          CUARTO: lo mencionado en la cláusula precedente es indispensable para
          que el ELA pueda prestar sus servicios ofrecidos, por lo que en caso
          manifieste su negativa el ELA podrá excluirlo de su base de datos o
          dar de baja su registro o base de datos, a fin de no afectar el normal
          desarrollo de sus actividades.
        </p>

        <p>
          QUINTO: todos los datos recogidos serán utilizados por el ELA en
          actividades de asesoría legal, e-newsletters, promoción de servicios
          y/ otras actividades promovidas. Asimismo, la Información del usuario
          podrá ser cedida o compartida con empresas terceras no vinculadas con
          el ELA a fin de que pueda contactar y ofrecer al usuario cualquier
          información comercial, publicitaria y/o promocional sobre los
          productos y/o los servicios de empresas terceras de distintos sectores
        </p>

        <p>
          SEXTO: El ELA protege los datos personales frente a pérdidas
          fortuitas, accesos, tratamientos o revelaciones no autorizados, habida
          cuenta del estado de la tecnología, la naturaleza de los datos
          almacenados y los riesgos a que están expuestos.
        </p>

        <p>
          SÉPTIMO: los usuarios podrán solicitar, rectificar, cancelar y
          actualizar su información, ellos garantizan y responden de la
          veracidad y autenticidad de la información facilitada.
        </p>

        <p>
          OCTAVO: en caso desee eliminar su cuenta o si tuviese una duda o
          consulta adicional, favor de comunicarse al siguiente correo
          xxxxxxxxxxxxxxxx@xxxxxx.com
        </p>
      </div>
    </Modal>
  )
}

export default Terminos
