import TopLabel from "./components/TopLable";
import Hint from './components/Hint';
import { useState } from "react";
import EmptyCell from "./components/EmptyCell";
import LetterCell from "./components/LetterCell";

function App() {

  const [word, setWord] = useState("Wordst");
  const [showHint, setShowHint] = useState(true);

  const letters = word.toUpperCase().split("");

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-primary-500 to-skyblue-500 w-full h-full">
      <div className="max-w-[600px] w-[300px] mt-4 mb-16 h-[80%] flex flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <TopLabel name="Level" value={0} />
          <TopLabel name="Score" value={0} />
          <TopLabel name="Hint" value="💡" />
        </div>

        <div className="h-full mt-10">
          <Hint hint="Words that that will help you to find the word in puzzle game" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-around items-center mb-3">
            {letters.map(letter => <EmptyCell />)}
          </div>

          <div className="flex justify-around items-center mt-6">
            {letters.map(letter => <LetterCell letter={letter} />)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
