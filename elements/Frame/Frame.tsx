import { defaultCornerSize, svgPadding, svgCornerSize } from './constants'
import FrameBackGround from './FrameBackGround'
import FrameCorner from './FrameCorner'
import FrameSideHorizontal from './FrameSideHorizontal'
import FrameSideVertical from './FrameSideVertical'
import styles from '../../styles/Frame.module.css'
import { useRef } from 'react'

type TFrame = {
    tl: boolean,
    tr: boolean,
    bl: boolean,
    br: boolean,
    label: string,
    children: React.ReactNode,
    animation: any,
    cornerSize?: number,
    filterHeight: number,
    filterWidth: number,
    displayBackground?: boolean
}

const Frame2 = ({tl,
                 tr,
                 bl, 
                 br,
                 label, 
                 children, 
                 animation, 
                 cornerSize = defaultCornerSize, 
                 filterHeight, 
                 filterWidth,
                 displayBackground = true}: TFrame) => {

    const maxCornerSize = 20
    const adjustedCornerSize = cornerSize <= maxCornerSize ? cornerSize : maxCornerSize;
    const label_ref = useRef<HTMLLabelElement>(null);

    const handleMouseEnter = () => {
        if(label_ref.current !==null){
            label_ref.current.style.paddingRight = "10em"
        }
        
    }

    const handleMouseLeave = () => {
        if(label_ref.current !== null){
            label_ref.current.style.paddingRight = ""; 
        }
        
    }

    return (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

            <label 
            className={styles.frame_label_top}
            ref={label_ref} >
                {label}
            </label>

        <div className={styles.hud_card_container}>
            {/*Clippath background*/}
            {
            displayBackground ?    
            <div 
                className={styles.hud_card_background}
                style={{padding: `${svgPadding}px` }}>    
                <FrameBackGround
                    customClassName={styles.card} 
                    tl={tl} 
                    tr={tr} 
                    bl={bl}
                    br={br} 
                    cornerSize={cornerSize} />
            </div>
            :
            null
            }

            {/*Outline put together using grid*/}
            <div 
                className={styles.hud_card_grid}
                style={{
                    gridTemplateColumns: `${svgCornerSize}px minmax(0px, auto) ${svgCornerSize}px`,
                    gridTemplateRows: `${svgCornerSize}px minmax(0px, auto) ${svgCornerSize}px`
                }}>

                {/* Top Row*/}
                <FrameCorner 
                    cornerSize={adjustedCornerSize} 
                    rotation={0} 
                    isClipped={tl} 
                    animation={animation} />
                <FrameSideHorizontal 
                    rotation={0} 
                    animation={animation} 
                    filterWidth={filterWidth}/>
                <FrameCorner 
                    cornerSize={adjustedCornerSize} 
                    rotation={90} 
                    isClipped={tr} 
                    animation={animation} />

                {/* Center Row*/}
                <FrameSideVertical 
                    rotation={0} 
                    animation={animation} 
                    filterHeight={filterHeight} />
                <div>
                    {children}
                </div>
                <FrameSideVertical 
                    rotation={180} 
                    animation={animation} 
                    filterHeight={filterHeight} />

                {/* Bottom Row*/}
                <FrameCorner 
                    cornerSize={adjustedCornerSize} 
                    rotation={270} 
                    isClipped={bl} 
                    animation={animation} />
                <FrameSideHorizontal 
                    rotation={180} 
                    animation={animation} 
                    filterWidth={filterWidth}/>
                <FrameCorner 
                    cornerSize={adjustedCornerSize} 
                    rotation={180} 
                    isClipped={br} 
                    animation={animation} />
            </div>
        </div>
            
        </div>
    )}

export default Frame2