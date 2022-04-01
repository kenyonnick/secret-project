import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const getRandomStyling = () => {
  const fontSize = Math.random() * 32 + 12;

  return {
    top: Math.random() * window.innerHeight * 0.9,
    left: Math.random() * window.innerWidth * 0.9,
    fontSize: `${fontSize}pt`,
  };
}

const Home: NextPage = () => {
  const [linkStyle, setLinkStyle] = useState({});
  
  useEffect(() => {
    setLinkStyle(getRandomStyling());
  }, []);
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Secret Project</title>
        <meta name="description" content="CONFIDENTIAL: DO NOT SHARE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I have been working on this for a long time.
          Please click here if you would like to check it out.
          It might take a few tries as a security measure.
        </h1>
        <a href="#" className={styles.link} style={linkStyle} onClick={()=> {setLinkStyle(getRandomStyling())}}>HERE</a>
      </main>
    </div>
  )
}

export default Home
