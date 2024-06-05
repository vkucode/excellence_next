// pages/404.js
import Link from "next/link";
import styles from "./styles/404.module.css";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Pagina nu a fost găsită</h1>
      <p>Ne pare rău, dar pagina pe care o căutați nu există.</p>
      <Link href="/">
        <a className={styles.homeLink}>Înapoi la pagina principală</a>
      </Link>
    </div>
  );
};

export default Custom404;
