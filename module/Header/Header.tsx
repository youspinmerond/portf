import styles from "./styles/Header.module.sass";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const page = useSelector((state: any) => state.page);
  const dispatch = useDispatch();

  function change(e:any) {
    dispatch({type: "change", payload:e.target.className});
  };

  return (
    <header className={styles.header}>
      <div>
        <p className={styles.hello}>Hello,</p>
        <div className={styles.centr}>
          <p> My name is&nbsp;&nbsp;</p>
          <b className={styles.name}>Xataless.</b>
        </div>
      </div>
      <div className={styles.menu}>
        <div className="home" onClick={(e:any) => change(e)}>Home</div>
        <div className="CV" onClick={(e:any) => change(e)}>CV</div>
        <div className="projects" onClick={(e:any) => change(e)}>Projects</div>
        <div className="skills" onClick={(e:any) => change(e)}>Skills</div>
      </div>
    </header>
  );
}