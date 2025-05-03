export default function SelectedCell({letter, pos, handleClick}) {
    return (
        <div onClick={() => handleClick(letter, pos)} className="w-[50px] h-[50px] text-3xl font-extrabold rounded-xl mx-1 flex items-center justify-center bg-green-500"> 
            {letter}
        </div>
    )
}