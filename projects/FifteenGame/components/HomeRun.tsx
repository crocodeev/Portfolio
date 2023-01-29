import styles from "../../../styles/FifteenGame.module.css"
import Link from "next/link"

const HomeRun = () => {


    return(<Link className={styles.link} href="/"><button
    className={styles.new_game}    
    >HOME RUN
    </button>
    </Link>)
} 

export default HomeRun