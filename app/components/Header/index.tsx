import styles from './style.module.css'
import Link from "next/link";
import Image from "next/image";
import Logo from '@/app/assets/images/logo.png'

export default function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listElement}><Link href='/'>
                        <Image src={Logo} alt='Logo'/>
                    </Link></li>
                    <li className={styles.listElement}><Link href='#'>О комплексе</Link></li>
                    <li className={styles.listElement}><Link href='#'>Район</Link></li>
                    <li className={styles.listElement}><Link href='#'>Каталог квартир</Link></li>
                    <li className={styles.listElement}><Link href='#'>Ипотека</Link></li>
                    <li className={styles.listElement}><Link href='#'>Контакты</Link></li>
                </ul>
            </nav>
        </header>
    )
}