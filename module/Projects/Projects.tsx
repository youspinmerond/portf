import styles from "./styles/projects.module.sass";
export default function Projects() {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1 className={styles.h1}>
          Projects
        </h1>
      </div>
      <div className={styles.projects}>
        <div className={styles.grid}>
          <div className={styles.project}>
            <h2>Feedrum</h2>
            <p className={styles.p}>
              Next, TS, ESLint
            </p>
          </div>
          <div className={styles.project}>
            <h2>Blogs</h2>
            <p className={styles.p}>
              Next, TS, ESLint, Redux
            </p>
          </div>
          <div className={styles.project}>
            <h2>SPA Store</h2>
            <p className={styles.p}>
              Next, TS, ESLint
            </p>
          </div>
          <div className={styles.project}>
            <h2>Gravity</h2>
            <p className={styles.p}>
              JS, OOP
            </p>
          </div>
          <div className={styles.project}>
            <h2>Geo</h2>
            <p className={styles.p}>
              JS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}