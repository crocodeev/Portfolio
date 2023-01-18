export type TState = {
    threshold: number,
    gameArray: Array<Array<number>>,
    collectionName: string,
    collect: Array<string>,
    stageContents: Array<string>,
    stageIds: Array<string>,
    steps: number,
    gameEnd: Boolean
}

export type TAction = {
    type: string,
    payload?: any
}