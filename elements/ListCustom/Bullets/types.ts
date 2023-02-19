
export type TBullet = {
    strokeColor: string,
    bulletMicroAnimation?: TBulletMicroAnimation 
}

type TBulletMicroAnimation = {
    on: Function,
    off: Function
}

export enum EBullet {
    todo = 0,
    link = 1,
    collapsible = 2,
    usual = 2,
    passion = 3
}
