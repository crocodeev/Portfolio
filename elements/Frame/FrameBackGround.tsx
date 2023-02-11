import { defaultCornerSize } from "./constants";

type TCARD = {
    tl: boolean,
    tr: boolean,
    bl: boolean,
    br: boolean,
    cornerSize?: number,
    customClassName: string,
}



const FrameBackGround = ({ tl, tr, bl, br, cornerSize = defaultCornerSize, customClassName }: TCARD) => {

    const clipPath = `polygon(` 
        + `${tl ? `0 ${cornerSize}px, ${cornerSize}px 0,` : '0 0,'} ` 
        + `${tr ? `calc(100% - ${cornerSize}px) 0, 100% ${cornerSize}px,` : '100% 0,'} `
        + `${br ? `100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%,` : '100% 100%,'}  `
        + `${bl ? `${cornerSize}px 100%, 0 calc(100% - ${cornerSize}px)` : '0 100%'})`;


    return (
        <div className={customClassName} style={{clipPath}}>
        </div>
    )
}


export default FrameBackGround