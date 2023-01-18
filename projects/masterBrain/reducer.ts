import actions from './actions'
import { TState, TAction } from './types';

const reducer = (state: TState, action: TAction ) => {
    switch (action.type) {
        case actions.OPEN_CARD:
          
          return {
            ...state,
            collect: [...state.collect],
            stageContents: [ ...state.stageContents,...[action.payload.content]],
            stageIds: [...state.stageIds, ...[action.payload.id]],
            steps: state.steps + 1,
          };
        case actions.COLLECT:
          
          return {
            ...state,
            collect: [...state.collect, ...[action.payload]],
            stageContents: [],
            stageIds: [],
          }
        case actions.CLEAR_STAGE:
          
          return {
            ...state,
            collect: [...state.collect],
            stageContents: [],
            stageIds: [],
          }
        case actions.GAME_END:
          
          return {
            ...state,
            collect: [],
            stageContents: [],
            stageIds: [],
            gameEnd: true
          }
        case actions.NEW_GAME:
          return {
            ...action.payload
          }
        case actions.SELECT_COLLECTION:
            return {
            ...action.payload
            }
        default:
        throw new Error();
    }
}

export default reducer;
