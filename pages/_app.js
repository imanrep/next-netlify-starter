import '../styles/globals.css'
import '../styles/boots.css'
import Header from '../comps/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
