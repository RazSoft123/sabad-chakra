import { useContext } from "react"
import { GameContext } from "./GameProvider"

export default function WinModal() {

    const {state: {level, score}, dispatch} = useContext(GameContext);

    function handleHomeClick() {

    }

    function handleNextLevel() {
        dispatch({type: 'game/loadNewLevel'});
    }

    function handleRestartLevel() {
        dispatch({type: 'game/loadSameLevel'});
    }

    return (
        <div className="bg-primary-500 shadow-2xl shadow-accent-300 px-4 py-6 rounded-xl flex flex-col">
            <div className="bg-red-600 py-2 px-4 rounded-xl flex flex-col gap-1 items-center justify-center">
                <div className="w-full h-[3px] rounded-2xl bg-yellow-200"></div>
                <span className="tracking-wide px-8 text-4xl font-extrabold text-yellow-200">VICTORY</span>
                <div className="w-full h-[3px] rounded-2xl bg-yellow-200"></div>
            </div>
            <div className="px-4 flex flex-col gap-2 my-5">
                <div className="w-full flex">
                    <span className="text-lg font-bold text-orange-700">Level <span className="rounded-sm px-4 text-white bg-blue-950">{level + 1}</span></span>
                </div>
                <div className="w-full flex">
                    <span className="text-lg font-bold text-orange-700">Score <span className="rounded-sm px-4 text-white bg-blue-950">{score + 5}</span></span>
                </div>
            </div>
            <div className="flex w-full justify-around items-center px-4 py-2">
                {/* Restart level button */}
                <button onClick={() => handleRestartLevel()} className="bg-orange-500 rounded-full px-2 py-2 shadow-sm shadow-orange-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                    </svg>
                </button>
                {/* Play button */}
                <button onClick={handleNextLevel} className="bg-orange-700 rounded-full px-2 py-2 shadow-sm shadow-orange-800" >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff"  viewBox="0 0 512 512">
                    <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-252 74.14V181.86a16 16 0 0126.23-12.29l89.09 74.13a16 16 0 010 24.6l-89.09 74.13A16 16 0 01212 330.14z"/>
                </svg>
                </button>
                {/* Home Button */}
                <button onClick={handleHomeClick} className="bg-orange-500 rounded-full px-2 py-2 shadow-sm shadow-orange-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                </svg>
                </button>
            </div>
        </div>
    )
}