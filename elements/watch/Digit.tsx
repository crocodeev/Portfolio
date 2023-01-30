import { TDigitProps } from "./types"

const Digit = ({segments,
    colorOn,
    colorOff}: TDigitProps) => {

console.log(segments);
        

const on = {
fill: colorOn, 
filter:"url(#glow)"
}

const off = {
fill: colorOff 
}


return(
<svg viewBox="0,0,50,100">

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
<polygon  style={segments[0] ? on : off} points="8,0 42,0 45,2 40,10 10,10 5,2"/>

<polygon  style={segments[5] ? on : off} points ="4.5,2.4 9.5,10.5 9.5,44.5 4.5,49.5 0,49.5 0,5.5" />

<polygon style={segments[1] ? on : off} points ="45.5,2.4 50,5.5 50,49.5 45.5,49.5 40.5,44.5 40.5,10.5"/>

<polygon style={segments[6] ? on : off} points="5,50 10,45 40,45 45,50 40,55 10,55" />

<polygon style={segments[4] ? on : off} points ="4.5,97.6 9.5,89.5 9.5,55.5 4.5,50.5 0,50.5 0,94.5"/>

<polygon style={segments[2] ? on : off} points ="45.5,97.6 50,94.5 50,50.5 45.5,50.5 40.5,55.5 40.5,89.5"/>

<polygon style={segments[3] ? on : off} points="8,100 42,100 45,98 40,90 10,90 5,98"/>
</g>

</svg>)
}

export default Digit