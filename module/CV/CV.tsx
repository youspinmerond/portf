import Link from "next/link";
import styles from "./styles/CV.module.sass";

export default function CV() {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1 className={styles.h1}>
          CV
        </h1>
      </div>
      <div className={styles.CV}>
        <h1 className={styles.h1}>Xataless</h1>
        <h2 className={styles.h2}>Full-Stack</h2>
        <h3 className={styles.h3}>About me</h3>
        <p>I&apos;m a young full-stack developer. Was borned in Eastern Ukraine. My purpose is become to network engineer.</p>
        <div className={styles.grid}>
          <div className="part">
            <h3 className={styles.h3}>
              Education
            </h3>
            <p>School :P, most of my knowledges taken from internet.</p>
          </div>
          <div className="part">
            <h3 className={styles.h3}>
              Skills
            </h3>
            <div className={styles.skills}>
              <div className={styles.skill}>
                <p className={styles.p}>&ldquo;Layout&rdquo; websites</p>
                <span className={styles.progress}><span className={styles.bar} style={{width:"90%"}}></span></span>
              </div>
              <div className={styles.skill}>
                <p className={styles.p}>JS/TS</p>
                <span className={styles.progress}><span className={styles.bar} style={{width:"80%"}}></span></span>
              </div>
              <div className={styles.skill}>
                <p className={styles.p}>Next/React</p>
                <span className={styles.progress}><span className={styles.bar} style={{width:"70%"}}></span></span>
              </div>
              <div className={styles.skill}>
                <p className={styles.p}>Linux</p>
                <span className={styles.progress}><span className={styles.bar} style={{width:"40%"}}></span></span>
              </div>
            </div>
            <h3>Languages</h3>
            <div className={styles.skills}>
              <div className={styles.skill}>
                <p className={styles.p}>Ukrainian</p>
                <span className={styles.progress}><span className={styles.bar} style={{width:"100%"}}></span></span>
              </div>
              <div className={styles.skill}>
                <p className={styles.p}>Russian</p>
                <span className={styles.progress}><span className={styles.bar} style={{width:"65%"}}></span></span>
              </div>
              <div className={styles.skill}>
                <p className={styles.p}>English</p>
                <span className={styles.progress}><span className={styles.bar} style={{width:"40%"}}></span></span>
              </div>
              <div className={styles.skill}>
                <p className={styles.p}>Swedish</p>
                <span className={styles.progress}><span className={styles.bar} style={{width:"5%"}}></span></span>
              </div>
            </div>
          </div>
          <div className="part">
            <h2 className={styles.h2}>
              Interests
            </h2>
            <p className={styles.p}>
              &gt;6 hours spending by sitting at PC.
              Prefer tea to coffee, growning in IT. Like math and physics ( Native sciences ).
              Working with PC&apos;s, laptop&apos;s, phone&apos;s hardware.
              Also, I love EDM, Electric and sometimes classic music.
            </p>
          </div>
          <div className="part">
            <h2 className={styles.h2}>
              Contact / Socails
            </h2>
            <p className={styles.p}>
              Telegram: <Link href="https://t.me/Rezistar" className={styles.a}>@Rezistar</Link><br/>
              Telegram channel: <Link href="https://t.me/+gREh4GF4TnAyMWU6" className={styles.a}>Qwerty!</Link><br/>
              GitHub: <Link href="https://github.com/youspinmerond" className={styles.a}>youspinmerond</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}