import Frame2 from "../elements/Frame/Frame"
import AboutMe from "./Content/AboutMe"
import LinkBar from "./Content/Linkbar";
import styles from "../styles/Home.module.css"
import 'material-icons/iconfont/material-icons.css';
import { useState } from "react"

const WhoAmI = () => {

    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!expand)
    }

    const iconStyle = expand 
    ? 
    styles.about_icon
    :
    `${styles.about_icon} ${styles.about_icon_expand}` 

    return(
        <>
        <div className="row" style={{ marginBottom: "5%"}}>
            <div className="col s6" >
                <div
                className={styles.about_container}
                onClick={handleClick}>
                <span className={"material-icons " + iconStyle}>arrow_drop_down</span> 
                <div>
                    WHO AM I ?
                </div>
                </div>
            </div>
            <div className="col s6">
                <LinkBar />
            </div>
        </div>
        {
            expand &&

            <div className="row">
            <div className="col s12">
                <Frame2
                 tl={false}
                 tr={false}
                 bl={false}
                 br={false}
                 animation={{ length: 3000, delay: 0 }} 
                 filterWidth={200}
                 filterHeight={100}
                 displayBackground={false}
                >
                    <AboutMe />
                </Frame2>
            </div>
            </div>
        }
        
        </>
    )
}

export default WhoAmI