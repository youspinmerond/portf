import styles from "./styles/Main.module.sass";
import Home from "@/module/Home/Home";
import CV from "../CV/CV";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import { useSelector } from "react-redux";

export default function Main() {
  const page = useSelector((state:any) => state.page);
  switch(page) {
  case "home":
    return <Home/>;
  case "CV":
    return <CV/>;
  case "skills":
    return <Skills/>;
  case "projects":
    return <Projects/>;
  default:
    return (
      <main className={styles.main}>
        {page}
      </main>
    );
  }
}