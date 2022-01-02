import { FaArrowCircleLeft } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

import styles from "../styles/Layout.module.css";

const Layout = ({ title, children, backButton }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Hacker news clone build using next.js" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
      <nav className={styles.nav}>
        {backButton && (
          <div className={styles.back_button}>
            <FaArrowCircleLeft onClick={() => Router.back()} />
          </div>
        )}

        <Link href="/">
          <a>
            <span className={styles.main_title}>Next Hacker</span>
          </a>
        </Link>
      </nav>

      {children}
    </div>
  </div>
);

export default Layout;
