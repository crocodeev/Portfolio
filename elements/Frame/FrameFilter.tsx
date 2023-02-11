const FrameFilter = () => (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true"
            style={{ 
                    position: "absolute", 
                    width: "0", 
                    height: "0", 
                    overflow: "hidden" 
                }}
            viewBox="0 0 200 200" 
            preserveAspectRatio="none">
            <defs>
                <filter 
                    id="glow--corner" 
                    x="-125%" 
                    y="-125%" 
                    height="400%" 
                    width="400%">
                    <feGaussianBlur 
                        in="SourceGraphic" 
                        stdDeviation="4" />
                </filter>
            </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" 
            style={{ 
                position: "absolute", 
                width: "0", 
                height: "0", 
                overflow: "hidden" 
            }}
            viewBox="0 0 200 200" 
            preserveAspectRatio="none">
            <defs>
                <filter 
                    id="glow--line" 
                    filterUnits="userSpaceOnUse" 
                    x="-100%" 
                    y="-100%" 
                    height="300%"
                    width="300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                </filter>
            </defs>
        </svg>
    </>
)

export default FrameFilter;