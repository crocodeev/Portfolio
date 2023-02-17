import { TSeparatorProps } from "./types"
import styles from '../../styles/Watch.module.css'

const Separator = ({state,
    colorOn,
    colorOff}: TSeparatorProps) => {

    
const on = {
fill: colorOn,
filter: "url(#glow)"
}

const off = {
fill: colorOff 
}

return(
<div className={styles.watch_separator_container}>  
<svg viewBox="0,0,10,100" preserveAspectRatio="xMinYMin meet">
<g>
<polygon points ="0,25 10,25 10,35 0,35" style={ state ? on : off}/>
<polygon points ="0,65 10,65 10,75 0,75" style={ state ? on : off}/>
</g>
</svg>
</div>
)
}

export default Separator