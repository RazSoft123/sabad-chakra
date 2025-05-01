import { useContext } from "react"
import { GameContext } from "./GameProvider"

export default function TopLabel({name, value}) {
    const {score} = useContext(GameContext);
    return (
        <div className=" border-2 px-2 rounded-4xl py-[2px] border-orange-700">
            <span className="font-bold text-orange-700 mx-2" >{name}:</span>
            <span className="font-semibold text-blue-950">{value}</span>
        </div>
    )
}