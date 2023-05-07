import style from "../Navigation/Navigation.module.css";
import 'animate.css';


export function Navigation() {
  return (
    <div className={style.container}>
        <div className={style.son}>
            <a href="#school">Conóceme</a>
        </div>
        <div className={style.son}>
            <a href="#projects">Proyectos</a>
        </div>
        <div className={style.son}>
            <a href="#contact">Contáctame</a>
        </div>
       
        
    </div>
  );
};