import EmptyCell from "./EmptyCell"

export default function LetterCell({letter, pos, letters, handleClick}) {
    
    if(letter === ""){
        return <EmptyCell key={pos}/>
    }

    return (
        <div onClick={() => handleClick(pos, letters)} draggable={true} className="w-[50px] h-[50px] text-3xl font-extrabold rounded-xl bg-accent-400 mx-1 flex items-center justify-center bg-gradient-to-t from-primary-800 via-primary-900 to-primary-800 text-stroke shadow-xl/50 shadow-accent-700">
            {letter}
        </div>
    )
}