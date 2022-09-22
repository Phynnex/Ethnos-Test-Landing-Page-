import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.css";
import About from "../components/About/index"
import Services from "../components/Services/index"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.hero}></div>
      <div className={classes.herotext}>
       
          <div className={classes.title}>
          <p>Digital Transformation Through Data Driven Insights</p>
          <div className={classes.hero2}>
          <Image src='/hero2.png' alt="phone" width={200} height={395} />
          </div>
          </div>
      <button className={classes.heroButton}>Get Started</button>
        
      </div>
      <About/>
      <Services/>

    </div>
  );
}
