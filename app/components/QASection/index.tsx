import styles from './style.module.css'

export default function QASection() {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>
                    Есть вопросы?
                </h2>


                <form className={styles.form} action="#">
                    <p>
                        *Мы никому не передаем ваши данные.
                        И не сохраняем ваш номер в базу.
                    </p>
                    <label htmlFor="name">
                        <input type="text" id="name" name="name" placeholder="Ваше имя"/>
                    </label>

                    <label htmlFor="phone">
                        <input type="phone" id="phone" name="phone" placeholder="Ваш телефон"/>
                    </label>

                    <button>
                        Посмотреть район
                    </button>
                </form>
            </div>
        </section>
    )
}