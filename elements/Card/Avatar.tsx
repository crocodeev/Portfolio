import Image from 'next/image'
import avatar from '../../public/pictures/avatar.jpg'
import styles from '../../styles/Home.module.css'



const Avatar = () => {
    return(
            <div className={styles.avatar_container}>
                <div className={styles.portrait_foreground + " " + styles.crt}></div>
                <Image 
                src={avatar}
                alt="Picture of me"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className={styles.portrait}
                />
                
            </div>

    )
}

export default Avatar