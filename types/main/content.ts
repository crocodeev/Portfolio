
interface IListElement {
    name: string
}

export interface IProject extends IListElement{
    url: string,
    framework: string
}

export interface ISkill extends IListElement {
    innerList: IListElement
} 

export interface IAchievement extends IListElement {
    details: string
}

export interface IGoal extends IListElement {

}

export interface IHobbie extends IListElement  {
    details: string | null
    picturesUrls: string[] 
}

