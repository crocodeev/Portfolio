import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.line}></div>
      <div className={styles.mask}></div>
      <h1>ALEXANDER CROCODEEV</h1>
      <p>about me</p>
      <ul>
      <li>
        <Link href="/projects/master_brain">MASTER BRAIN</Link>
        <Link href="/projects/fifteen_game">FIFTEEN GAME</Link>
      </li>
    </ul>
    </div>
  )
}
