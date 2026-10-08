import Image from "next/image"
import styles from './style.module.css'
import lookBg from '@/app/assets/images/Look.jpg'


export default function ApartmentSection() {

    return (
        <section className={styles.section}>

            <div className={styles.imageContainer}>
                <Image src={lookBg} alt="lookBg"/>
            </div>

            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>
                        Хотите посмотреть?
                    </h2>
                    <p>
                        Lorem Ipsum - это текст-&#34;рыба&#34;, часто используемый в печати и вэб-дизайне. Lorem Ipsum
                        является
                        стандартной &#34;рыбой&#34; для текстов на латинице с начала XVI века. В то время некий
                        безымянный
                        печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                        образцов.
                    </p>
                </div>

                <form className={styles.form} action="#">
                    <label htmlFor="name">
                        <input type="text" id="name" name="name" placeholder="Ваше имя"/>
                    </label>

                    <label htmlFor="phone">
                        <input type="phone" id="phone" name="phone" placeholder="Ваш телефон"/>
                    </label>
                    <p>
                        *Мы никому не передаем ваши данные.
                        И не сохраняем ваш номер в базу.
                    </p>
                    <button>
                        Посмотреть район
                    </button>
                </form>

            </div>
        </section>
    )
}