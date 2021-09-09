import { gql } from '@apollo/client'

export const CreateConsultas = gql`
  mutation CreateConsultas($input: ConsultasInput!, $archivo: Upload) {
    CreateConsultas(input: $input, archivo: $archivo) {
      nombres
      email
      mensaje
      celular
      archivo
    }
  }
`
