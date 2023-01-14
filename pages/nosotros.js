import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'


export default function Nosotros() {
  return (
    <>
    <Layout
      title={"Nosotros"}
      description={'Sobre nosotros, GuitarLA, Tienda de Música'}>  
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>

        <div className={styles.contenido}>
            <Image src='/img/nosotros.jpg' alt='Imagen sobre nosotros' width={1000} height={800} priority/>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum nibh nunc, dictum eget nibh sit amet, imperdiet pretium ante.
                Morbi eget molestie risus. Quisque nec lacinia nisi. Mauris leo tortor,
                eleifend nec mollis vitae, egestas vel lectus. 
                Quisque eros leo, commodo eget consequat eu, finibus vitae lorem.            
              </p>
              <p>Phasellus libero felis, dictum a porta eu, iaculis luctus magna.
                Praesent hendrerit commodo nunc, a maximus risus volutpat eu.
                Nam ac sollicitudin sapien, non venenatis arcu. Vivamus ac suscipit orci.
                Aenean ultricies magna eu eros faucibus pulvinar. Donec venenatis in erat a aliquam.
                Mauris luctus volutpat enim eu blandit.
                Pellentesque gravida malesuada varius.                
              </p>
            </div>
        </div>
      </main>
    </Layout>
    
    </>
  )
}
