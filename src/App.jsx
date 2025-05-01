import Hint from './components/Hint';
import { useReducer, useState } from "react";
import EmptyCell from "./components/EmptyCell";
import LetterCell from "./components/LetterCell";
import SelectedCell from "./components/SelectedCell";
import GameProvider, { GameContext } from "./components/GameProvider";
import MainMenu from "./components/MainMenu";
import TopLabelContainer from "./components/TopLabelContainer";
import levelData from './data/word_data';
import { suffleLetters } from './utils/utilities';

function reducer(state, action) {
  switch(action.type){
    case 'game/loadNewWord':
      
    break;
    default :

      break;
  }
}

const initialState = {
  word: levelData.levels[0].words[0].word,
  description: levelData.levels[0].words.desc,
  levelWordPos: 0,
  levelWordCount: levelData.levels[0].words.length,
  letters: levelData.levels[0].words
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  // // All the work related to level
  // // const {word, desc: description} = levelData.levels[level].words[0];
  // const [word, setWord] = useState(levelData.levels[level].words[0].word);
  // const [description, setDescription] = useState(levelData.levels[level].words[0].desc);
  // const [levelWordPos, setLevelWordPos] = useState(0);
  // const levelWordCount = levelData.levels[level].words.length;

  const [currentPos, setCurrentPos] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [createdWord, setCreatedWord] = useState(Array(state.word.length).fill(""));
  const [letters, setLettters] = useState(suffleLetters(state.word.toUpperCase().split("")))

  

  console.log("Word is : ", state.word);
  console.log("Desc is : ", state.description);
  console.log("Current pos is : ", currentPos);

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

  function handleRemoveLetter(letter, pos) {
    console.log("Handle remove letter clicked");
    let newLetters = [...letters];
    let newCreateWord = [...createdWord];
    newCreateWord[pos] = "";


    for(let i=0; i<letters.length; i++){
      if(letters[i] === ""){
        newLetters[i] = letter;
        setCreatedWord(newCreateWord);
        setLettters(newLetters);
        setCurrentPos(pos => pos-1);
        return;
      }
    }
  }

  // Check the result form the array
  function checkResult() {
    console.log(`I'm Checking the result Letter: ${letters.length} and ${currentPos}`);
    let playerWord = "";
    for(let i =0; i < createdWord.length; i++){
      playerWord = playerWord + createdWord[i];
    }

    /*
    if(playerWord.toLowerCase() === state.word){
      console.log("Player wins");
      setLevelWordPos(pos => pos+1);
      console.log("Level word position ", levelWordPos);
      initGame(levelData.levels[level].words[levelWordPos]);
    }
    else 
      console.log(`player loses ${playerWord.toLowerCase()} : ${word}`);
    */
  }

  return (
      <div className="flex items-center justify-center bg-linear-to-br from-primary-500 to-skyblue-500 w-full h-full">
        <div className="max-w-[600px] w-[300px] mt-4 mb-16 h-[80%] flex flex-col items-center justify-between">
          {
            !playing ? 
              <MainMenu setPlaying={setPlaying} /> : 
            <>
            <TopLabelContainer />
            <div className="h-full mt-10">
              <Hint hint={state.description} />
            </div>

            <div className="flex flex-col gap-4 relative">
              <div className="flex justify-around items-center mb-3">
                {createdWord.map((letter, index) => letter === "" ? <EmptyCell key={index} /> : <SelectedCell handleClick={handleRemoveLetter} key={index} pos={index} letter={letter} />)}
              </div>

              <div className="flex justify-around items-center mt-6">
                {letters.map((letter, index, arr) => <LetterCell handleClick={handleAddLetter} letter={letter} key={index} letters={arr} pos={index} />)}
              </div>
            </div>
          </>
          }

        </div>
      </div>
  )
}

export default App
