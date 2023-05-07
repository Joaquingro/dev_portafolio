import style from "../Formation/Formation.module.css";
import react from "../Images/React.png";
import redux from "../Images/redux.png";
import css from "../Images/css.png";
import html from "../Images/HTML.png";
import js from "../Images/JS.png";
import post from "../Images/Post.png";
import express from "../Images/express.png";
import 'animate.css';


export function Formation() {
    return (
    <div className={style.container}>
        <div className={style.son}>
            <div className={style.son1}>
                <h1>Tecnologías que utilizo:</h1>
            </div>
        <div className={style.tech}>
            <div className = {style.techItem}>
                <h2>React</h2>
                <img className = {style.react} src={react} alt = ""/>
        </div>
        <div className = {style.techItem}>
            <img className = {style.redux} src={redux} alt = ""/>
        </div>

        <div className = {style.techItem}>
            <img className = {style.css} src={css} alt = ""/>
        </div>

        <div className = {style.techItem}>
            <img className = {style.html} src={html} alt = ""/>
        </div>

        <div className = {style.techItem}>
            <img className = {style.js} src={js} alt = ""/>
        </div>

        <div className = {style.techItem}>
            <img src={post} alt = ""/>
        </div>

        <div className = {style.techItem}>
            <img className = {style.node} src={express} alt = ""/>
        </div>

        </div> 
        
        </div>
       
    </div>
    
    );
}