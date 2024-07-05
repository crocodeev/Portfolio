import styles from './Frame.module.scss'
import { IFrameSideProps } from '../model/types';
import { getAnimationStyles } from '../lib/getAnimationStyles';

function  SideVertical({ 
    rotation, 
    animation, 
    filterWidth = 60, 
    filterUrl,
    color = "currentColor"
    }: IFrameSideProps ) {
    
    
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            height="100%" 
            width="100%" 
            viewBox={`0 0 ${filterWidth} 22`} 
            preserveAspectRatio="none"
            className="svg" 
            style={{ transform: `rotate(${rotation}deg)` }}>
            <line 
                className={`${styles.svg__stroke} ${styles.svg__stroke_glow}`}
                x1="2" 
                x2="2" 
                y2={filterWidth} 
                stroke={color}
                filter={filterUrl}
                style={animation && getAnimationStyles(animation)} />
            <line 
                className={`${styles.svg__stroke} ${styles.svg__stroke_bottom}`}
                x1="2" 
                x2="2" 
                y2={filterWidth} 
                stroke={color}
                 />
            <line 
                className={`${styles.svg__stroke} ${styles.svg__stroke_top}`}
                x1="2" 
                x2="2" 
                y2={filterWidth} 
                stroke={color}
                 />
        </svg>
    );

    
}


export { SideVertical }