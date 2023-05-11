import cp from "../Images/Compu.png";
import style from "../Cpu/Cpu.module.css";
import Circles from "../Circles/Circles";


export function Cpu() {
    return (
      <div className={style.container}>
        {/* <div className={style.circles}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          
        </div> */}
        <Circles/>
        <div className={style.son}>
          <img src={cp} alt="cp" />
        </div>
      </div>
    );
  }