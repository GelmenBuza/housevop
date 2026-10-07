import Image from "next/image"
import styles from './style.module.css'
import bench from '@/app/assets/images/bench.svg'
import building from '@/app/assets/images/building.svg'
import fountain from '@/app/assets/images/fountain.svg'
import bicycle from '@/app/assets/images/bicycle.svg'


export default function StartSection() {

    return (
        <section className={styles.section}>

            <div>
                <Image src={bench} alt="bench"/>
                <p>Рядом исторические<br/>парки и скверы</p>
            </div>
            <div>
                <Image src={building} alt="building"/>
                <p>Полностью<br/>обустроенный</p>
            </div>
            <div>
                <Image src={fountain} alt="fountain"/>
                <p>10 фонтанов<br/>на территории</p>
            </div>
            <div>
                <Image src={bicycle} alt="bicycle"/>
                <p>6 км<br/>велодорожек</p>
            </div>
        </section>
    )
}