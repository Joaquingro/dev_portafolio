import style from "../Projects/Projects.module.css";
import total from "../Images/Total mundo.png";
export function Projects(){
    return (
        <div className={style.container}>
            <div className={style.son}>
                <h1>Mis proyectos</h1>
            </div>
        
         <div className={style.son1}>
            <div className={style.sonp}>
                <p>Un proyecto de mi bootcamp soy Henry...</p>
                <a href="https://elastic-mine-production.up.railway.app/">Visitar</a>
            </div>
        </div>
        </div>
        
    );
}