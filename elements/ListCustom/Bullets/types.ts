
export type TBullet = {
    strokeColor: string
}

type TBulletMicroAnimation = {
    on: Function,
    off: Function
}

export enum EBullet {
    todo = 0,
    link = 1,
    collapsible = 2,
    usual = 3,
    passion = 3
}
