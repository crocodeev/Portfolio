import styles from './Frame.module.scss'
import { IFrameProps } from '../model/types'
import { SideHorizontal } from './SideHorizontal'
import { SideVertical } from './SideVertical'
import { Corner } from './Corner'

export default function Frame({ tr, tl, bl, br, cornerSize}: IFrameProps) {
  return (
    <div className="frame">
      <div className="frame__background"></div>
      <div 
        className={styles.frame__grid}
        color="white"
        style={{
          gridTemplateColumns: `20px minmax(0px, auto) 20px`,
          gridTemplateRows: `20px minmax(0px, auto) 20px`
        }}>
        <Corner rotation={0} animation={{ length: 3000, delay: 0 }} isClipped={false} cornerSize={16} innerCornerSize={20} color={'currentColor'}/>
        <SideHorizontal rotation={0} animation={{ length: 3000, delay: 0 }} filterWidth={60}/>
        <Corner rotation={90} animation={{ length: 3000, delay: 0 }} isClipped={false} cornerSize={16} innerCornerSize={20} color={'currentColor'}/>
        <SideVertical rotation={0} animation={{ length: 3000, delay: 0 }} filterWidth={22}/>
        <div>asdasfsdfasgasadgkfkasldkglakslkglkalskdgasjkhalsjl</div>
        <SideVertical rotation={180} animation={{ length: 3000, delay: 0 }} filterWidth={22}/>
        <Corner rotation={270} animation={{ length: 3000, delay: 0 }} isClipped={true} cornerSize={0} innerCornerSize={20} color={'currentColor'}/>
        <SideHorizontal rotation={180} animation={{ length: 3000, delay: 0 }} filterWidth={60}/>
        <Corner rotation={180} animation={{ length: 3000, delay: 0 }} isClipped={false} cornerSize={16} innerCornerSize={20} color={'currentColor'}/>
      </div>
    </div>
  )
}
