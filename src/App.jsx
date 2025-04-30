import TopLabel from "./components/TopLable";
import Hint from './components/Hint';
import { useState } from "react";
import EmptyCell from "./components/EmptyCell";
import LetterCell from "./components/LetterCell";
import SelectedCell from "./components/SelectedCell";

function App() {

  const [word, setWord] = useState("words");
  const [showHint, setShowHint] = useState(true);
  const [currentPos, setCurrentPos] = useState(0);
  const [score, setSocre] = useState(0);
  const [level, setLevel] = useState(1);
  
  const [createdWord, setCreatedWord] = useState(Array(word.length).fill(""));
  const [letters, setLettters] = useState(suffleLetters(word.toUpperCase().split("")))

  // const letters = word.toUpperCase().split("");

  // const createdWord = ["W","O","","",""];
  
  // Check for winning condition 
  if(letters.length === currentPos){
    checkResult();
  }
  
  // Handler functions
  // Add the letter to create word and remove it from letters array
  function handleAddLetter(pos, letters){
    console.log("Handle letter clicked");
    const letter = letters[pos];
    let newLetters = [...letters];
    newLetters[pos] = "";

    let newCreateWord = [...createdWord];

    for(let i =0; i< createdWord.length; i++){
      if(createdWord[i] === ""){
        newCreateWord[i] = letter;
        setCreatedWord(newCreateWord);
        setLettters(newLetters);
        setCurrentPos(pos => pos+1);
        return;
      }
    }
  }

  // Suffling the letters 
  function suffleLetters(letters) {
    let suffledLetters = [...letters];
    let j = 0;
    for(let i = 0; i < suffledLetters.length; i++){
      j = Math.floor(Math.random() * (suffledLetters.length - 1));
      [suffledLetters[i], suffledLetters[j]] = [suffledLetters[j], suffledLetters[i]];

    }
    return suffledLetters;
  }

  // Check the result form the array
  function checkResult() {
    console.log(`I'm Checking the result Letter: ${letters.length} and ${currentPos}`);
    let playerWord = "";
    for(let i =0; i < createdWord.length; i++){
      playerWord = playerWord + createdWord[i];
    }

    if(playerWord.toLowerCase() === word)
      console.log("Player wins");
    else 
      console.log("Player loses");
  }

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-primary-500 to-skyblue-500 w-full h-full">
      <div className="max-w-[600px] w-[300px] mt-4 mb-16 h-[80%] flex flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <TopLabel name="Level" value={level} />
          <TopLabel name="Score" value={score} />
          <TopLabel name="Hint" value="💡" />
        </div>

        <div className="h-full mt-10">
          <Hint hint="Words that that will help you to find the word in puzzle game" />
        </div>

        <div className="flex flex-col gap-4 relative">
          <div className="flex justify-around items-center mb-3">
            {createdWord.map((letter, index) => letter === "" ? <EmptyCell key={index} /> : <SelectedCell key={index} letter={letter} />)}
          </div>

          <div className="flex justify-around items-center mt-6">
            {letters.map((letter, index, arr) => <LetterCell handleClick={handleAddLetter} letter={letter} key={index} letters={arr} pos={index} />)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
