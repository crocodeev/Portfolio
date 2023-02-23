import styles from "../../styles/Home.module.css"

const links = [
    {
        name: "GitHub",
        href: "https://github.com/crocodeev"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/feed/"
    },
    {
        name: "CodePen",
        href: "https://codepen.io/crocodeev"
    },
    {
        name: "Mail",
        href: "mailto:svin862003@gmail.ru"
    },
    {
        name: "Telegram",
        href: "https://telegram.me/crocodeev"
    }
]


const LinkBar = () => {
    
    return(
        <div className={styles.link_bar_container}>
            <ul className={styles.link_bar_list}>
                {
                    links.map((item, index) => {
                        return(
                           <li key={index}
                           className={styles.link_bar_item}>
                            <a target="_blank" href={item.href}>{item.name}</a>
                            </li>  
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LinkBar