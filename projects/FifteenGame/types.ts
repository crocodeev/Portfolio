export type TState = {
    current: TNumArrayDoubleDim,
    etalons: TEtalon,
    steps: number
}

type TEtalon = {
    win: TNumArrayDoubleDim,
    fail: TNumArrayDoubleDim
}

export type TNumArrayDoubleDim = Array<Array<Number>>

export enum EDirections {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}

export type TCoordinate = {
    x: number,
    y: number
}