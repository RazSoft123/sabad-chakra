import { useContext } from "react"
import { GameContext } from "./GameProvider"
import TopLabel from "./TopLable";

export default function TopLabelContainer() {
    const {score, level} = useContext(GameContext);
    return (
        <div className="flex items-center justify-between w-full">
            <TopLabel name="Level" value={level + 1} />
            <TopLabel name="Score" value={score} />
            <TopLabel name="Hint" value="💡" />
        </div>
    )
}