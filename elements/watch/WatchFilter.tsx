import { TFilter } from "./types"
import styles from '../../styles/Watch.module.css'

const WatchFilter = ({colorOn}: TFilter) => {

    return(
        <svg className={styles.filter}>
        <defs>
        <filter id="glow" height="300%" width="300%" x="-75%" y="-75%">

            <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />

            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blurred" />

            <feFlood floodColor={colorOn} result="glowColor" />

            <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />

            <feMerge>
                <feMergeNode in="softGlow_colored"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        </defs>
        </svg>
    )
}

export default WatchFilter