import { IFrameSideProps } from "../model/types"

function getAnimationStyles ({ length, delay }: IFrameSideProps['animation']){

    return({
        animationDuration: `${length}ms`,
        animationDelay: `${delay}ms`,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
    })
    
}


export { getAnimationStyles }