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
import Achievements from '../elements/Content/Achievements'
import Passions from '../elements/Content/Passions'
import Goals from '../elements/Content/Goals'
import Etudes from '../elements/Content/Etudes'
import Skills from '../elements/Content/Skills'


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
                <div className={styles.track_label}>
                  by the way, this track created by me:)
                </div>
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
            strokeColor='#00f73a' 
            items={Etudes} />  
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
            strokeColor='#00f73a' 
            items={Skills}/>  
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
            strokeColor='#00f73a' 
            items={Goals}/>  
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
                strokeColor='#00f73a' 
                items={Achievements}/>
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
                strokeColor='#00f73a' 
                items={Passions}/>
          </Frame2>  
        </div>
      </div>
    </div>
    </div>  
  )
}
