import { svgInnerCornerSize, defaultCornerSize } from "./constants";
import getAnimationStyles from "./GetAnimationStyles";
import styles from "../../styles/Frame.module.css";

type TFrameCorner = {
    rotation: number,
    animation: any,
    isClipped: boolean,
    cornerSize?: number
}

const FrameCorner = ({ rotation, animation, isClipped, cornerSize = defaultCornerSize }: TFrameCorner) => {


    const path = 
          isClipped ? 
          `M22,2h-${svgInnerCornerSize - cornerSize}l-${cornerSize},${cornerSize}v${svgInnerCornerSize - cornerSize}` : "M22,2H2,2V22";

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="100%" 
            width="100%" 
            viewBox="0 0 22 22"
            className="svg" 
            style={{ transform: `rotate(${rotation}deg)` }}>
            <path 
                className={styles.svg_stroke + " " + styles.svg_stroke_glow} 
                d={path} style={animation && getAnimationStyles(animation)} 
                filter="url(#glow--corner)" />
            <path 
                className={styles.svg_stroke + " " + styles.svg_stroke_bottom} 
                d={path} />
            <path 
                className={styles.svg_stroke + " " + styles.svg_stroke_top} 
                d={path} />
        </svg>
    )
}

export default FrameCorner