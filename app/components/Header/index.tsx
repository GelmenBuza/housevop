'use client'

import styles from './style.module.css'
import Link from "next/link";
import Image from "next/image";
import Logo from '@/app/assets/images/logo.png'
import burgerMenuBtn from '@/app/assets/images/burgerMenu.svg'
import closeBtn from '@/app/assets/images/close.svg'
import {useState} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <button className={styles.burgerBtn} onClick={() => setIsOpen(prev => !prev)}>{isOpen ?
                    <Image src={closeBtn} alt='Close'/> : <Image src={burgerMenuBtn} alt='Open'/>}</button>
                <ul className={`${styles.list} ${isOpen ? styles.open : ''}`}>
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