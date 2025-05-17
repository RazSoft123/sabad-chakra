import { useContext } from "react"
import { GameContext } from "./GameProvider"

export default function IncorrectWordModal() {
    const {state, dispatch} = useContext(GameContext);

    function handleSkipWord() {
        if(state.levelWordPos === state.levelWordCount-1){
            if(state.level === state.levelLength - 1) {
                return dispatch({type: 'game/setGameEnd'})
            }
            dispatch({type: 'game/loadNewLevel'});
        }else {
            dispatch({type: 'game/loadNewWord'})
        }
    }

    function handleLoadSameWord() {
        dispatch({type: 'game/loadSameWord'})
    }
    
    return (
        <div className="bg-primary-500 shadow-2xl shadow-accent-300 px-4 py-6 rounded-xl flex flex-col">
            <div className="bg-red-600 py-2 px-4 rounded-xl flex flex-col gap-1 items-center justify-center">
                <div className="w-full h-[3px] rounded-2xl bg-gray-400"></div>
                <span className="tracking-wide px-8 text-4xl font-extrabold text-gray-400">INCORRECT</span>
                <div className="w-full h-[3px] rounded-2xl bg-gray-400"></div>
            </div>
            <div className="px-4 flex flex-col gap-2 my-5">
                <div className="w-full flex">
                    <span className="text-lg font-bold text-orange-700">Level <span className="rounded-sm px-4 text-white bg-blue-950">{state.level + 1}</span></span>
                </div>
            </div>
            <div className="flex w-full justify-around items-center px-4 py-2">
                <button onClick={() => handleLoadSameWord()} className="bg-orange-500 rounded-full px-2 py-2 shadow-sm shadow-orange-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                    </svg>
                </button>
                <button onClick={() => handleSkipWord()} className="bg-orange-700 rounded-full px-2 py-2 shadow-sm shadow-orange-800" >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" viewBox="0 0 16 16">
                    <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5"/>
                </svg>
                </button>
            </div>
        </div>
    )
}