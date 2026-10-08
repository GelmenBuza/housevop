import styles from './style.module.css'

export default function MapSection() {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Район на карте
                </h2>

                <div className={styles.map}>
                <span>
                    Тут очень крутая карта
                </span>
                </div>
            </div>
        </section>
    )
}