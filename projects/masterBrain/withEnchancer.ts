import { useRef, useCallback,useReducer } from 'react'
import { clearStage, collect } from './actions';
import { TState, TAction } from './types';

const withEnhancer = (reducer: Function, initialState: TState): [ TState, Function] => {
  
    //create getState function
    const lastState = useRef(initialState);
    const getState = useCallback(() => lastState.current, []);

    //reducer middleware
    const newReducer = (state: TState, action: TAction) => {
      lastState.current = reducer(state, action);
      return lastState.current;
    }
    
    const [state, dispatch] = useReducer(newReducer, initialState)
    
    
    const newDispatch = async (action: TAction) => {
      
      
      await dispatch(action);
      
      const newState = getState();
       
      //stage is full, compare card
      
      if(newState.stageContents.length === 2){
        setTimeout(async () => {
        
        
          //cards content matched  
          if(newState.stageContents[0] === newState.stageContents[1]){
            
            dispatch(collect(action.payload.content))
          }else{
            dispatch(clearStage())
          }
      }, 900)
      }
    }
    
    return [state, newDispatch];
    
  }

  export default withEnhancer