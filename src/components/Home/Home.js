
import * as React from 'react';
import style from "../Home/Home.module.css";
import Joaquin from "../Images/Joaquis.png";
import 'animate.css';
import 'atropos/css'
// import Atropos from 'atropos/react';
export function Home(){
    return(
    <section className={style.father}>
        <div className={style.container}>
        
            <div className={style.image}>
            
                <img  src={Joaquin} alt='Joaquin'/>
            
                </div>
        </div>
        

        <div className={style.container2}>
            <div className={style.txt} >
                <h3 className="animate__animated animate__backInLeft animate__slow">¡Hola!</h3>
                <h1 className="animate__animated animate__backInRight animate__slow">Soy Joaquin Guerrero</h1>
                <p className="animate__animated animate__backInLeft animate__slow" >Ingeniero en Sistemas Computacionales </p>
                <p className="animate__animated animate__backInRight animate__slow"> & Desarrollador Web Full Stack</p>
            </div>
        </div>
    
    </section>
    );
} 