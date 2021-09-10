import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isLength from 'validator/lib/isLength'

export const consultaValidation = ({ email, nombres, mensaje, celular }) => {
  const errors = { ok: true }
  if (!isEmail(email)) {
    errors.ok = false
    errors.email = {
      msg: 'Debe introducir un formato de correo correcto'
    }
  }

  if (isEmpty(nombres)) {
    errors.ok = false
    errors.nombres = {
      msg: 'Debe introducir su nombre y apellido'
    }
  }

  if (isEmpty(mensaje)) {
    errors.ok = false
    errors.mensaje = {
      msg: 'Introduzca una breve descripcion'
    }
  }

  if (isEmpty(celular)) {
    errors.ok = false
    errors.celular = {
      msg: 'Debe introducir su número telefonico'
    }
  }

  if (!isLength(celular, { min: 9, max: 9 })) {
    errors.ok = false
    errors.celular = {
      msg: 'Su número telefonico debe tener 9 digitos'
    }
  }

  return errors
}
