import styles from "./styles/Home.module.sass";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1 className={styles.h1}>Home page</h1>
        <p>It&apos;s page describing all.</p>
      </div>
      <div className="description">
        <p>
          I&apos;m a <span className={styles.marker}>full-stack</span> dev,
          borned in Eastern <span className={styles.marker}>Ukraine</span>.
        </p>
        <br />
        <p>Its an SPA application Portfolio.</p>
      </div>
    </div>
  );
}