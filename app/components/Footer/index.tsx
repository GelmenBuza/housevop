import styles from './style.module.css'
import Image from 'next/image'
import Link from "next/link";
import YT from '@/app/assets/images/YT.svg'
import VK from '@/app/assets/images/VK.svg'
import FB from '@/app/assets/images/FB.svg'
import IG from '@/app/assets/images/IG.svg'
import Logo from '@/app/assets/images/logo.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="/" className={styles.Logo}>
                <Image src={Logo} alt="Logo"/>
            </Link>
            <div className={styles.footerNav}>
                <ul className={styles.list}>
                    <li className={styles.listElement}><Link href='#'>О комплексе</Link></li>
                    <li className={styles.listElement}><Link href='#'>Район</Link></li>
                    <li className={styles.listElement}><Link href='#'>Каталог квартир</Link></li>
                    <li className={styles.listElement}><Link href='#'>Ипотека</Link></li>
                    <li className={styles.listElement}><Link href='#'>Контакты</Link></li>
                </ul>
            </div>
            <div className={styles.footerNav}>
                <ul className={styles.list}>
                    <li className={styles.listElement}>Адрес: <Link href='#'>Наб. реки Фонтанки 10-15</Link></li>
                    <li className={styles.listElement}><Link href='tel:+78121234567'>Телефон: 8 (812) 123-45-67</Link></li>
                    <li className={styles.listElement}>Отдел продаж: 10:00 - 20:00</li>
                    <li className={styles.listElement}>E-mail: <Link href='mailto:vip@housevip.ru'>vip@housevip.ru</Link></li>
                    <li className={styles.socialMedia}>
                        <ul>
                            <li><Link href='#'><Image src={YT} alt='YouTube'></Image></Link></li>
                            <li><Link href='#'><Image src={VK} alt='Vk'></Image></Link></li>
                            <li><Link href='#'><Image src={FB} alt='Facebook'></Image></Link></li>
                            <li><Link href='#'><Image src={IG} alt='Instagram'></Image></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    )
}