import Image from "next/image"
import styles from './style.module.css'
import balcony from "@/app/assets/images/balcony.jpg"
import place from '@/app/assets/images/placeholder.svg'
import phone from '@/app/assets/images/phone-call.svg'
import mouse from "@/app/assets/images/mouse.svg"

export default function StartSection() {

    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <Image src={balcony} alt="Красивый балкон"/>
            </div>
            <div className={styles.container}>
                <h1>Жилой комплекс<br/>в историческом центре</h1>

                <Image src={mouse} alt='Иконка'/>
                <div className={styles.info}>
                    <div>
                        <Image src={place} alt='Инконка'/>
                        <p>Наб. реки Фонтанки 10-15</p>
                    </div>
                    <div>
                        <Image src={phone} alt='Инконка'/>
                        <p>8 (812) 123-45-67</p>
                    </div>
                </div>
            </div>

        </section>
    )
}