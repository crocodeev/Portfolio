import Image from 'next/image';
import dynamic from 'next/dynamic'
import me1bit from '../../public/pictures/me1bit.png'
import styles from '../../styles/Home.module.css'

const DynamicWatch = dynamic(() => import('../../elements/watch/Watch'), { ssr: false})


const Card = () => {
    return(
            <div className={styles.card_container}>
            <div>
                <div>
                <h3>ALEXANDER</h3>
                <h3>CROCODEEV</h3>
                </div>
                <div>
                <DynamicWatch colorOn="#00f73a" colorOff="#1c1b1b" skew="-5"/>
                </div>
            </div>
        </div>
    )
}

export default Card