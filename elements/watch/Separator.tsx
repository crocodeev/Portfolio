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

<defs>
   <filter id="glow" height="300%" width="300%" x="-75%" y="-75%">

    <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />

    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blurred" />

    <feFlood floodColor={colorOn} result="glowColor" />

    <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />

    <feMerge>
        <feMergeNode in="softGlow_colored"/>
        <feMergeNode in="SourceGraphic"/>
    </feMerge>
</filter>
</defs>


<g>
<polygon points ="0,25 10,25 10,35 0,35" style={ state ? on : off}/>
<polygon points ="0,65 10,65 10,75 0,75" style={ state ? on : off}/>
</g>
</svg>
)
}

export default Separator