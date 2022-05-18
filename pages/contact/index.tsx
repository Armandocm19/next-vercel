
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

//Cuando guarde un componente dentro de una carpeta, es importante que el componente se llame "index.jsx",
//y no como el nombre de la carpeta, ya que esto puede generar problemas con el router de Next

export default function ContactPage() {
  return (
    <MainLayout>
        <h1>Home Page</h1>
        <h1 className={'title'}>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/contact">Contact</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.jsx</code>
        </p>

    </MainLayout>
  )
}