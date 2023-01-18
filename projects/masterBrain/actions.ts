const actions = {
    OPEN_CARD:'OPEN_CARD',
    COLLECT:'COLLECT',
    CLEAR_STAGE:'CLEAR_STAGE',
    GAME_END:'GAME_END',
    NEW_GAME:'NEW_GAME',
    SELECT_COLLECTION:'SELECT_COLLECTION'
}

export default actions;

export const openCard = (payload: object) => {
    return {
        type: actions.OPEN_CARD,
        payload: payload
    }
}

export const collect = (payload: object) => {
    return {
        type: actions.COLLECT,
        payload: payload
    }
}

export const clearStage = () => {
    return {
        type: actions.CLEAR_STAGE
    }
}

export const gameEnd = () => {
    return {
        type: actions.GAME_END
    }
}

export const newGame = (payload: object) => {
    return {
        type: actions.NEW_GAME,
        payload: payload
    }
}

export const selectCollection = (payload: object) => {
    return {
        type: actions.SELECT_COLLECTION,
        payload: payload
    }
}