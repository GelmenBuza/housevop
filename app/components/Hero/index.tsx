import Image from "next/image"
import styles from './style.module.css'
import balcony from "@/assets/images/balcony.jpg"
import place from '@/assets/images/placeholder.svg'
import phone from '@/assets/images/phone-call.svg'

export default function Hero() {

    return (
        <section>
            <Image src={balcony} alt="Красивый балкон" className={styles.bgImage}/>
            <h1>Жилой комплекс<br/>в историческом центре</h1>

            <Image src={balcony} alt='Иконка'/>
            <div>
                <div>
                    <Image src={place} alt='Инконка'/>
                    <p>Наб. реки Фонтанки 10-15</p>
                </div>
                <div>
                    <Image src={phone} alt='Инконка'/>
                    <p>8 (812) 123-45-67</p>
                </div>
            </div>
        </section>
    )
}