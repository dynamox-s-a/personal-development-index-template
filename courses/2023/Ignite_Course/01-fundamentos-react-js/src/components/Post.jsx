import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/italoRAmaral.png"
            className={styles.avatar}
          />

          <div className={styles.authorInfo}>
            <strong>Italo Amaral</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="31 de Janeiro às 11:42" dateTime="2023-05-31">
          31 Jan 2023
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {" "}
          <a>👉 jane.design/doctorcare</a>
        </p>
        <p>
          {" "}
          <a>#novoprojeto</a>
          <a>#nlw</a>
          <a>#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
