import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduardo Personal Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://www.eduardo-borsa.com/">
            Eduardo Borsa Personal Blog
          </a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="">
          Powered by
          <span className={styles.logo}>
            <Image src="/aws_logo.svg" alt="AWS Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
