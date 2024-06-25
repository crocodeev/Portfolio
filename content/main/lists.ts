import { IProject, IAchievement, IHobbie, ISkill, IGoal } from '../../types/main/content'

const reactive_frameworks = {
    react: "react",
    vue: "vue",
    angular: "angular",
    svetle: "svetle"
}

const js_technologies = {
    reactive_frameworks: reactive_frameworks
    
}

const projects: IProject[] = [
    {
        name: "Master Brain",
        framework: reactive_frameworks.react,
        url: "/projects/master_brain"
    },
    {
        name: "Fifteen Game",
        framework: reactive_frameworks.react,
        url: "/projects/fifteen_game"
    },
    {
        name: "Drum Machine",
        framework: reactive_frameworks.vue,
        url: "https://crocodeev.github.io/vdrum/"
    }
]

const skills: ISkill[] = [
    {
        name: "Javascript",
        innerList: [
            {
                name: reactive_frameworks.react
            }
        ]
    }
]

const achievements: IAchievement[] = []

const hobbies: IHobbie[] = []

const  goals: IGoal[] = []