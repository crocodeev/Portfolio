
export type TBullet = {
    strokeColor: string,
    bulletMicroAnimation?: TBulletMicroAnimation 
}

type TBulletMicroAnimation = {
    on: Function,
    off: Function
}

