import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.css'

type NextPageWithLayout = NextPage & { //Esto es para definir que "getLayout" puede recibir la pagina y ques opcional, y definimos el tipo de dato de esa pagina
  getLayout?: ( page: ReactElement ) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout ) {

  const getLayout = Component.getLayout || ((page) => page);
  //Obtenemos el layout por medio de la constante, y luego condicionamos que si el layout existe
  //(Esto lo condicionamos por medio del nombre del layout) pues que lo muestre, y si no que muestre solo la página que recibe

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )

  return getLayout ( <Component {...pageProps} /> )
}

export default MyApp
