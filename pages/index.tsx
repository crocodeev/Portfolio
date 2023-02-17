import Head from 'next/head'
import Image from 'next/image'
import Player from '../elements/Player/Player'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Frame.module.css'
import dynamic from 'next/dynamic'
import Avatar from '../elements/Card/Avatar'
import Radar from '../elements/Radar/Radar'
import 'materialize-css/dist/css/materialize.min.css'
const DynamicWatch = dynamic(() => import('../elements/watch/Watch'), { ssr: false})
import Frame2 from '../elements/Frame/Frame'
import FrameFilter from '../elements/Frame/FrameFilter'
import ListCustom from '../elements/ListCustom/ListCustom'
/*
  <div className={styles.line}></div>
  <div className={styles.mask}></div>
 */


export default function Home() {

  return (
    <div className="container">
    <div className={styles.home_container}>
      <FrameFilter />
      <div className='row'>
        <div className='col s6'>
            
            <div className='row'>
              <div className='col s12'>
                  <Player />
               </div>     
            </div>

            <div className='row valing-wrapper'>
              <div className="col s6">
                <DynamicWatch colorOn="#00f73a" colorOff="#1c1b1b" skew="-5"/>
              </div>
              <div className="col s6">
                <div className={styles.text_bage}>
                  <h5>ALEXANDER</h5>
                  <h5>CROCODEEV</h5>
                </div>
              </div>
            </div>
            
        </div>
          <div className='col s6'>
            <Avatar />
          </div>
      </div>
      <div className="row">
        <div className='col s12'>
        <details>
        <summary className={styles2.expand_card_summary}>WHO AM I?</summary>
        <Frame2
            tl={false}
            tr={false}
            bl={false}
            br={false}
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            label="about me"
            displayBackground={false}
            >
              <div className={styles.text_field}>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              <p>asdasdasdafasdfasdgasgaga
                asdgasdgasdgashashahafdhadf
                adfhadfhadfh
              </p>
              </div>
          </Frame2>
        </details>
        </div>
      </div>
      <div className="row">
        <div className='col s6'>
        <Frame2
            tl={true}
            tr={false}
            bl={false}
            br={true}
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            label="react etudes"
            >
            <ListCustom 
            type='links'
            strokeColor='#00f73a' 
            items={[
            <Link href="/projects/master_brain">MASTER BRAIN</Link>,
            <Link href="/projects/fifteen_game">FIFTEEN GAME</Link> ]}/>  
          </Frame2>
        </div>
        <div className='col s6'>
        <Frame2
            tl={true}
            tr={false}
            bl={false}
            br={true}
            label="skills"
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            >
            <ListCustom 
            type='usual'
            strokeColor='#00f73a' 
            items={["JS", "OTHER"]}/>  
          </Frame2>
        </div>
      </div>
      <div className='row'>
        <div className='col s6'>
        <Frame2
            tl={true}
            tr={false}
            bl={false}
            br={true}
            label="goals"
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            >
              <ul>
              <li>
                RUST
              </li>
              <li>
                WASM 
              </li>
              <li>
                CREATE ZX GAME
              </li>
            </ul>  
          </Frame2>
        </div>
        <div className='col s6'>
          <Frame2
            tl={true}
            tr={false}
            bl={false}
            br={true}
            label="achievement"
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            >
              <ul>
                <li>
                  RUST
                </li>
                <li>
                  WASM 
                </li>
                <li>
                  CREATE ZX GAME
                </li>
              </ul> 
          </Frame2>
        </div>
      </div>
    </div>
    </div>  
  )
}
