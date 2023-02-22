import Player from '../elements/Player/Player'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Frame.module.css'
import dynamic from 'next/dynamic'
import Avatar from '../elements/Card/Avatar'
import 'materialize-css/dist/css/materialize.min.css'
const DynamicWatch = dynamic(() => import('../elements/watch/Watch'), { ssr: false})
import Frame2 from '../elements/Frame/Frame'
import FrameFilter from '../elements/Frame/FrameFilter'
import ListCustom from '../elements/ListCustom/ListCustom'
import { EBullet } from '../elements/ListCustom/Bullets/types'
import AboutMe from '../elements/Content/AboutMe'
import WhoAmI from '../elements/WhoAmI'


export default function Home() {

  console.log("amazing frames from here https://codepen.io/acarlie/pen/NWBzjJP");
  

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
              
              <div className="col s7">
                PLACEHOLDER
              </div>

              <div className="col s5">
                <DynamicWatch colorOn="#00f73a" colorOff="#1c1b1b" skew="-5"/>
              </div>

            </div>
            
        </div>
          <div className='col s6'>
            <Avatar />
          </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className={styles.main_title}>ALEXANDER CROCODEEV | FULL STACK DEVELOPER</div>
        </div>
      </div>
      <WhoAmI />
      <div className="row">
        <div className='col s6'>
        <Frame2
            tl={false}
            tr={true}
            bl={true}
            br={false}
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            label="react etudes"
            >
            <ListCustom 
            type={EBullet.link}
            strokeColor='#00f73a' 
            items={[
            <Link key={1} target="_blank" href="/projects/master_brain">MASTER BRAIN</Link>,
            <Link key={2} target="_blank" href="/projects/fifteen_game">FIFTEEN GAME</Link> ]}/>  
          </Frame2>
        </div>
        <div className='col s6'>
        <Frame2
            tl={false}
            tr={true}
            bl={true}
            br={false}
            label="skills"
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            >
            <ListCustom 
            type={EBullet.collapsible}
            strokeColor='#00f73a' 
            items={[{
              title: "JS",
              collection: ["Electron", "React", "Node"]
            }, {
              title: "OTHER (a little bit)",
              collection: ["Python", "Powershell", "Bash", "Docker"]
            }]}/>  
          </Frame2>
        </div>
      </div>
      <div className='row'>
        <div className='col s6'>
        <Frame2
            tl={false}
            tr={true}
            bl={true}
            br={false}
            label="goals"
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            >
            <ListCustom 
            type={EBullet.todo}
            strokeColor='#00f73a' 
            items={["Study Rust", "WASM", "Create game for zx spectrum"]}/>  
          </Frame2>
        </div>
        <div className='col s6'>
          <Frame2
            tl={false}
            tr={true}
            bl={true}
            br={false}
            label="achievements"
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            >
              <ListCustom 
                type={EBullet.passion}
                strokeColor='#00f73a' 
                items={["audio player, based on electronjs and used on production", 
                "custom linux image for it and deployed on WDS",
                "notification telegram bot",
                "webapp telegram bot",
                "corporate wiki",
                "different scripts and utils to simplify workflow"]}/>
          </Frame2>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
        <Frame2
            tl={false}
            tr={true}
            bl={true}
            br={false}
            label="passions"
            animation={{ length: 3000, delay: 0 }} 
            filterWidth={200}
            filterHeight={100}
            >
              <ListCustom 
                type={EBullet.passion}
                strokeColor='#00f73a' 
                items={["motorcycles (especially oldtimers)", 
                "music (electric guitar)", 
                "microcontroller (arduino, esp)"]}/>
          </Frame2>  
        </div>
      </div>
    </div>
    </div>  
  )
}
