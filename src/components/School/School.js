import style from "../School/School.module.css";

export function School(props) {
    const {id} = props;
    return (
    <div id = {id} className={style.container}>
        <div className={style.son}>
            <div className={style.baby}>
                <h1>Te cuento algo sobre mi...</h1>
                <p>Me gradue como Ing. en Sistemas Computacionales y hace poco inicie mi carrera como Full Stack, estoy en busca de mi primer empleo. Me gusta asumir nuevos desafíos y trabajar en proyectos que me permitan aprender y crecer profesionalmente. Soy confiable y eficiente en el cumplimiento de objetivos y metas, y siempre busco mejorar los procesos y resultados de manera constante. En mi tiempo libre, disfruto de jugar videojuegos y hacer deporte.</p>
            </div>
        </div>
    </div>
    );
}