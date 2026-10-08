import Image from "next/image"
import styles from './style.module.css'
import video from '@/app/assets/images/video.jpg'
import playIco from '@/app/assets/images/play-button.svg'


export default function ApartmentSection() {

    return (
        <section className={styles.section}>
            <div className={styles.video}>
                <Image src={video} alt="Заглушка"/>
                <div className={styles.play}>
                    <Image src={playIco} alt='Play'/>
                </div>
            </div>
        </section>
    )
}