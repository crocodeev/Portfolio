import styles from './Frame.module.scss'
import { ICornerProps } from '../model/types';
import { getAnimationStyles } from '../lib/getAnimationStyles';

function  Corner({rotation, 
                    animation, 
                    isClipped=false, 
                    cornerSize,
                    innerCornerSize,
                    filterUrl,
                    color="currentColor"}: ICornerProps) {
    

    const path = isClipped ? `M22,2h-${innerCornerSize - cornerSize}l-${cornerSize},${cornerSize}v${innerCornerSize - cornerSize}` : "M22,2H2,2V22";

    console.log(path);
    

    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="100%" 
            width="100%" 
            viewBox="0 0 22 22"
            className="svg" 
            style={{ transform: `rotate(${rotation}deg)` }}>
             <path 
                className={`${styles.svg__stroke} ${styles.svg__stroke_glow}`}
                d={path} 
                style={animation && getAnimationStyles(animation)} 
                filter={filterUrl}
                stroke={color} />
            <path 
                className={`${styles.svg__stroke} ${styles.svg__stroke_bottom}`}
                d={path}
                stroke={color} />
            <path 
                className={`${styles.svg__stroke} ${styles.svg__stroke_top}`}
                d={path}
                stroke={color} />
        </svg>
    )
    
}


export { Corner }