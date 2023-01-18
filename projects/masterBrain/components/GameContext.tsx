import { createContext, useContext } from "react";


const GameContext = createContext<any>(null);

type Props = {
    state: object,
    dispatch: Function,
    children: JSX.Element
  };

const GameContextProvider: React.FC<Props> = ({ state, dispatch, children }) => {

        return(
        <GameContext.Provider value={{ dispatch, state }}>
            { children }
        </GameContext.Provider>
    )
}

export default GameContextProvider

export const useGameContext = () => {
    return useContext(GameContext);
} 