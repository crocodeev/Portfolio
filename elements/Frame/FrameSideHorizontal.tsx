import getAnimationStyles from "./GetAnimationStyles";
import styles from "../../styles/Frame.module.css";

type TFrameSideHorizontal = {
    rotation: number,
    animation: any,
    filterWidth: number
}

const FrameSideHorizontal = ({ rotation, animation, filterWidth = 60 }: TFrameSideHorizontal) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        height="100%" 
        width="100%" 
        viewBox={`0 0 ${filterWidth} 22`} 
        preserveAspectRatio="none"
        className={styles.svg}
        style={{ transform: `rotate(${rotation}deg)` }}>
        <line 
            className={styles.svg_stroke + " " + styles.svg_stroke_glow}
            x1={filterWidth} 
            y1="2" 
            y2="2" 
            filter="url(#glow--line)"
            style={animation && getAnimationStyles(animation)} />
        <line 
            className={styles.svg_stroke + " " + styles.svg_stroke_bottom}
            x1={filterWidth} 
            y1="2" 
            y2="2" />
        <line 
            className={styles.svg_stroke + " " + styles.svg_stroke_top}
            x1={filterWidth} 
            y1="2" 
            y2="2" />
    </svg>
)

export default FrameSideHorizontal;