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
    <h1>Hello World</h1>
  )
}
