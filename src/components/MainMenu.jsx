import { useContext } from "react";
import { GameContext } from "./GameProvider";

export default function MainMenu() {
    const {dispatch} = useContext(GameContext);
    return (
        <div className="w-full h-full flex items-center justify-center">
            <button className="flex flex-col items-center justify-center gap-4" onClick={() => dispatch({type: 'game/setPlaying'})}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#001f51" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                </svg>
                <span className="font-bold text-blue-950">Click to play</span>
            </button>
        </div>
    );
}