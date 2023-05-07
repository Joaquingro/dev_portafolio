import style from "../Contact/Contact.module.css";

export function Contact({id}) {
    return (
    <div id= {id} className={style.container}>
        <div className={style.son}>
            <h1>Contáctame</h1>
        </div>
        <form>
            <div className={style.formFather}>
                <div className={style.formContainer}>
                    <label htmlFor="name">Nombre</label>
                    <input type="name"></input>
                </div>
                    <div className={style.formContainer}>
                    <label htmlFor="email">Correo electrónico</label>
                <input type="email"></input>
                </div>  
            </div>
            <div className={style.formMessage}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea type="message"></textarea>
            </div>
        </form>
    </div>
    );
}