import styles from "./styles/skills.module.sass";

export default function Skills() {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1 className={styles.h1}>Skills and Stack</h1>
      </div>
      <div className={styles.skillsandstack}>
        <div className={styles.grid}>
          <div className="part">
            <div className={styles.box}>
              <h2 className={styles.h2}>Languages</h2>
              <div className={styles.box_bottom}>
                <div className={styles.box_elem}>JS</div>
                <div className={styles.box_elem}>TS</div>
                <div className={styles.box_elem}>Python</div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h2}>Front-end Frameworks</h2>
            <div className={styles.box_bottom}>
              <div className={styles.box_elem}>React</div>
              <div className={styles.box_elem}>Redux</div>
              <div className={styles.box_elem}>Zustand</div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h2}>Back-end Frameworks</h2>
            <div className={styles.box_bottom}>
              <div className={styles.box_elem}>Next</div>
              <div className={styles.box_elem}>Nest</div>
              <div className={styles.box_elem}>Express</div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h2}>Text</h2>
            <div className={styles.box_bottom}>
              <div className={styles.box_elem}>HTML</div>
              <div className={styles.box_elem}>Markdown</div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h2}>APIs</h2>
            <div className={styles.box_bottom}>
              <div className={styles.box_elem}>Rest</div>
              <div className={styles.box_elem}>CRUD</div>
            </div>
          </div>

          <div className={styles.box}>
            <h2 className={styles.h2}>Databases</h2>
            <div className={styles.box_bottom}>
              <div className={styles.box_elem}>PostgreSQL</div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h2}>NoSQL</h2>
            <div className={styles.box_bottom}>
              <div className={styles.box_elem}>MongoDB</div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h2}>ORMs</h2>
            <div className={styles.box_bottom}>
              <div className={styles.box_elem}>Prisma</div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h2}>Another</h2>
            <div className={styles.box_bottom}>
              <div className={styles.box_elem}>Git</div>
              <div className={styles.box_elem}>npm</div>
              <div className={styles.box_elem}>mongoose</div>
              <div className={styles.box_elem}>ESLint</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}