export default function Hint({hint}) {
    
    return (
        <div className="flex">
            <span className="font-bold text-blue-950 mx-3 text-xl">Hint: </span> <p className="font-bold text-md text-blue-950/50">{hint}</p>
        </div>
    );

}