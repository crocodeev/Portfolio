import { ReactComponentElement } from "react"

export interface IFrameProps {
    /**
     * trim top left corner 
     */
    tl: boolean,
    /**
     * trim top right corner
     */
    tr: boolean
    /**
     * trim bottom right corner
     */
    br: boolean
    /**
     * trim bottom left corner
     */
    bl: boolean
    cornerSize: number
}

export type TAnimation {
    length: number,
    delay: number
}


export interface IFrameSideProps {
    /**
     * rotate to 180 degrees for bottom
     */
    rotation: number,
    /**
     * glow animation
     */
    animation: TAnimation,
    filterWidth: number,
    filterUrl: string,
    color: string, 

}

export interface ICornerProps {

    rotation: number,
    animation: TAnimation,
    /**
     * trim corner
     */
    isClipped: boolean,
    cornerSize: number,
    innerCornerSize: number,
    filterUrl: string,
    color: string

}

