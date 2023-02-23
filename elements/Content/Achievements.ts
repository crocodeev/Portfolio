import { EBullet } from "../ListCustom/Bullets/types"

const Achievements = [
    {   
        type: EBullet.collapsible,
        title: "Audio player",
        details: {
            description: "client side player for indoor radio, based on electron framework",
            link: null
        }
    },
    {
        type: EBullet.collapsible,
        title: "Custom Ubuntu Image",
        details: {
            description: "custom image for easy install audio player and other soft, such as volume tracker, deployed on WDS",
            link: null
        }
    },
    {   
        type: EBullet.collapsible,
        title: "Notification Bot",
        details: {
            description: "Simple web server, that receive messages from different sources, format it, and send to common chat",
            link: "https://github.com/crocodeev/noSilenceBot"
        }
    },
    {
        type: EBullet.collapsible,
        title: "Web App Telegram Bot",
        details: {
            description: "bot with custom inteface, that allow upload photos to corporate nextcloud",
            link: "https://github.com/crocodeev/NextPhotoBot"
        }
    },
    {
        type: EBullet.usual,
        title: "Corporate Wiki",
        details: null
    },
    {
        type: EBullet.usual,
        title: "Different scripts and utils",
        details: null
    },

]

export default Achievements