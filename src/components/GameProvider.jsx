import { createContext, useReducer } from "react"
import { initialState, reducer } from "../reducers/gameReducer";

export const GameContext = createContext();

export default function GameProvider({children}) { 
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}