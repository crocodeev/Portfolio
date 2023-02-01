import Head from 'next/head'
import Image from 'next/image'
import Watch from '../elements/watch/Watch'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

/*
<div className={styles.line}></div>
<div className={styles.mask}></div>
 */

const DynamicWatch = dynamic(() => import('../elements/watch/Watch'), { ssr: false})

export default function Home() {
  return (
    <div className={styles.home_container}>
      
      <h1>ALEXANDER CROCODEEV</h1>
      <p>about me</p>
      <DynamicWatch colorOn="#00f73a" colorOff="#1c1b1b" skew="-5"/>
      <ul>
      <li>
        <Link href="/projects/master_brain">MASTER BRAIN</Link>
        <Link href="/projects/fifteen_game">FIFTEEN GAME</Link>
      </li>
    </ul>
    </div>
  )
}
