import { createContext, useState } from "react"

export const GameContext = createContext();

export default function GameProvider({children}) { 
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(0);
    
    return (
        <GameContext.Provider value={
            {score, setScore, level, setLevel}
        }>
            {children}
        </GameContext.Provider>
    )
}