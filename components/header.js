import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

export default function Header() {
    const router = useRouter()
    
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}   >
           <Link href={'/'}>
           <Image src={'/img/logo.svg'} width={400} height={40} alt={'Imagen nosotros'}/>
           </Link>
        
            <nav className={styles.navegacion}>
            <Link className={ router.pathname === '/' ? styles.active : ''} href={'/'}>               
                Inicio                
            </Link>
            <Link className={ router.pathname === '/nosotros' ? styles.active : ''} href={'/nosotros'}>            
                Nosotros                
            </Link>
            <Link className={ router.pathname === '/tienda' ? styles.active : ''} href={'/tienda'}>            
                Tienda                
            </Link>
            <Link className={ router.pathname === '/blog' ? styles.active : ''} href={'/blog'}>            
                Blog                
            </Link>
            <Link href={'/carrito'}>
                <Image src={'/img/carrito.png'} width={30} height={25} alt='Imagen Carrito'/>
            </Link>
            

            </nav>
        </div>

    </header>
  )
}
