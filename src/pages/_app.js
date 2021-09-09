import '@fontsource/poppins'
import '@/styles/index.scss'
import 'swiper/swiper.min.css'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'

import client from '../apollo'

import 'react-toastify/dist/ReactToastify.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <ToastContainer />
    </ApolloProvider>
  )
}

export default MyApp
