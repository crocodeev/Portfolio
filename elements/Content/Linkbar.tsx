import styles from "../../styles/Home.module.css"

const links = [
    {
        name: "GitHub",
        href: "https://www.youtube.com/watch?v=-9vzxbvnA8k"
    },
    {
        name: "LinkedIn",
        href: "https://www.youtube.com/watch?v=-9vzxbvnA8k"
    },
    {
        name: "HeadHunter",
        href: "https://www.youtube.com/watch?v=-9vzxbvnA8k"
    },
    {
        name: "Mail",
        href: "https://www.youtube.com/watch?v=-9vzxbvnA8k"
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