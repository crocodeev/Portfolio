export type TState = {
    gameArray: TNumArrayDoubleDim,
    result: EResult,
    steps: number
}

type TEtalon = {
    win: TNumArrayDoubleDim,
    fail: TNumArrayDoubleDim
}

export type TNumArrayDoubleDim = Array<Array<number>>

export enum EDirections {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}

export enum EResult {
    WIN = 1,
    FAIL = 2,
    RESUME = 3,
}

export type TCoordinate = {
    x: number,
    y: number
}