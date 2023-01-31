import { TSeparatorProps } from "./types"

const Separator = ({state,
    colorOn,
    colorOff}: TSeparatorProps) => {

    
const on = {
fill: colorOn, 
filter:"url(#glow)"
}

const off = {
fill: colorOff 
}

return(
<svg viewBox="0,0,10,100">
<g>
<polygon points ="0,25 10,25 10,35 0,35" style={ state ? on : off}/>
<polygon points ="0,65 10,65 10,75 0,75" style={ state ? on : off}/>
</g>
</svg>
)
}

export default Separator