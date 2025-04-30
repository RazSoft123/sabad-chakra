export default function LetterCell({letter}) {
    return (
        <div draggable={true} className="w-[50px] h-[50px] text-3xl font-extrabold rounded-xl bg-accent-400 mx-1 flex items-center justify-center">
            {letter}
        </div>
    )
}