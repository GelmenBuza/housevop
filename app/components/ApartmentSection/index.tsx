import Image from "next/image"
import styles from './style.module.css'
import Apartment_1 from '@/app/assets/images/Apartment_1.jpg'
import Apartment_2 from '@/app/assets/images/Apartment_2.jpg'


export default function ApartmentSection() {

    return (
        <section className={styles.section}>

            <div className={styles.container}>
                <h2>
                    Наши квартиры
                </h2>

                <div className={styles.apartments}>
                    <div className={styles.apartment}>
                        <div className={styles.bg}></div>
                        <Image src={Apartment_1} alt="Apartment_1"/>
                        <p>Лофт - 3 этажа</p>
                    </div>
                    <div className={styles.apartment}>
                        <div className={styles.bg}></div>
                        <Image src={Apartment_2} alt="Apartment_2"/>
                        <p>Лофт - 2 этажа</p>
                    </div>
                    <div className={styles.apartment}>
                        <div className={styles.bg}></div>
                        <Image src={Apartment_1} alt="Apartment_3"/>
                        <p>Лофт - 3 этажа</p>
                    </div>
                    <div className={styles.apartment}>
                        <div className={styles.bg}></div>
                        <Image src={Apartment_2} alt="Apartment_4"/>
                        <p>Лофт - 2 этажа</p>
                    </div>
                </div>
            </div>
        </section>
    )
}