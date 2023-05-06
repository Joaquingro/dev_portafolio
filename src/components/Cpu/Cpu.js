import cp from "../Images/Compu.png";
import style from "../Cpu/Cpu.module.css";

export function Cpu(){
    return (
    <div className={style.container}>
     <div className={style.son}>
        <img src={cp} alt = "cp"/> 
     </div> 
    </div>
        );
}