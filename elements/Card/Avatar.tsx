import Image from 'next/image';
import Frame from '../../projects/MainPage/Frame';
import me1bit from '../../public/pictures/me1bit.png'
import styles from '../../styles/Home.module.css'



const Avatar = () => {
    return(
            <Frame label="me">
                <div className={styles.portrait_foreground + " " + styles.crt}></div>
                
                <Image 
                src={me1bit}
                alt="Picture of me"
                className={styles.portrait}
                />
            </Frame>

    )
}

export default Avatar