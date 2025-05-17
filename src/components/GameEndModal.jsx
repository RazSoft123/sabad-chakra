import { useContext } from "react"
import { GameContext } from "./GameProvider"

export default function GameEndModal() {

    const {state: {score}, dispatch} = useContext(GameContext);

    function handleHomeClick() {
        dispatch({type: 'game/goHome'})
    }

    return (
        <div className="bg-primary-500 shadow-2xl shadow-accent-300 px-4 py-6 rounded-xl flex flex-col">
            <div className="bg-red-600 py-2 px-4 rounded-xl flex flex-col gap-1 items-center justify-center">
                <div className="w-full h-[3px] rounded-2xl bg-yellow-200"></div>
                <span className="tracking-wide px-8 text-4xl font-extrabold text-yellow-200">THANKS</span>
                <div className="w-full h-[3px] rounded-2xl bg-yellow-200"></div>
            </div>
            <div className="px-4 flex flex-col gap-2 my-5">
                <div className="w-[248px] flex">
                    <span className="text-lg font-bold text-orange-700">Wow! You've done it—you've conquered every challenge and mastered Sabad Chakra like a true word wizard!</span>
                </div>
                <span className="text-lg font-bold text-orange-700">Score <span className="rounded-sm px-4 text-white bg-blue-950">{score + 5}</span></span>
            </div>
            <div className="flex w-full justify-around items-center px-4 py-2">
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