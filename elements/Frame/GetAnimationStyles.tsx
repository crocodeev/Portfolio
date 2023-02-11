type TgetAnimationStyles = {
    length: number,
    delay: number
}

const getAnimationStyles = ({ length, delay }: TgetAnimationStyles) => ({
    animationDuration: `${length}ms`,
    animationDelay: `${delay}ms`,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
})

export default getAnimationStyles;