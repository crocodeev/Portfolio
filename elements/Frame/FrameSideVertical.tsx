import getAnimationStyles from "./GetAnimationStyles"
import styles from "../../styles/Frame.module.css";

type TFrameSideVertical = {
    rotation: number,
    animation: any,
    filterHeight: number
}

const FrameSideVertical = ({ rotation, animation, filterHeight = 16 }: TFrameSideVertical) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="100%" 
        width="100%" 
        viewBox={`0 0 22 ${filterHeight}`} 
        preserveAspectRatio="none"
        className={styles.svg}
        style={{ transform: `rotate(${rotation}deg)` }}>
        <line 
            className={styles.svg_stroke + " " + styles.svg_stroke_glow}
            x1="2" 
            x2="2" 
            y2={filterHeight} 
            filter="url(#glow--line)"
            style={animation && getAnimationStyles(animation)} />
        <line 
            className={ styles.svg_stroke + " " + styles.svg_stroke_bottom}
            x1="2" 
            x2="2" 
            y2={filterHeight} />
        <line 
            className={ styles.svg_stroke + " " + styles.svg_stroke_top} 
            x1="2" 
            x2="2" 
            y2={filterHeight} />
    </svg>
)

export default FrameSideVertical