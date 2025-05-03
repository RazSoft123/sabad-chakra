import Hint from './components/Hint';
import { useReducer, useState } from "react";
import EmptyCell from "./components/EmptyCell";
import LetterCell from "./components/LetterCell";
import SelectedCell from "./components/SelectedCell";
import MainMenu from "./components/MainMenu";
import TopLabelContainer from "./components/TopLabelContainer";
import levelData from './data/word_data';
import { suffleLetters } from './utils/utilities';
import ModalWindow from './components/ModalWindow';
import WinModal from './components/WinModal';
import CorrectWordModal from './components/CorrectWordModal';
import IncorrectWordModal from './components/IncorrectWordModal';

function reducer(state, action) {
  switch(action.type){
    case 'game/loadNewWord':
      return { ...state, 
        levelWordPos: state.levelWordPos + 1,
        word: levelData.levels[state.level].words[state.levelWordPos].word,
        description: levelData.levels[state.level].words[state.levelWordPos].desc,
        score: state.score + 1,
        letters: suffleLetters(levelData.levels[state.level].words[state.levelWordPos].word.toUpperCase().split("")),
        currentPos: 0,
        createdWord: Array(levelData.levels[0].words[0].word.length).fill(""),
      }

    case 'game/addLetter' :
      return {
        ...state,
        letters: action.payload.letters,
        createdWord: action.payload.createdWord,
        currentPos: state.currentPos + 1,
      }
    case 'game/removeLetter' :
      return {
        ...state,
        letters: action.payload.letters,
        createdWord: action.payload.createdWord,
        currentPos: state.currentPos - 1,

      }
    default :

      break;
  }
}

const initialState = {
  word: levelData.levels[0].words[0].word,
  description: levelData.levels[0].words[0].desc,
  levelWordPos: 0,
  level: 0,
  levelWordCount: levelData.levels[0].words.length,
  score: 0,
  letters: suffleLetters(levelData.levels[0].words[0].word.toUpperCase().split("")),
  currentPos: 0,
  createdWord: Array(levelData.levels[0].words[0].word.length).fill(""),
  modalVisibility: false,
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  // // All the work related to level
  // // const {word, desc: description} = levelData.levels[level].words[0];
  // const [word, setWord] = useState(levelData.levels[level].words[0].word);
  // const [description, setDescription] = useState(levelData.levels[level].words[0].desc);
  // const [levelWordPos, setLevelWordPos] = useState(0);
  // const levelWordCount = levelData.levels[level].words.length;

  const [playing, setPlaying] = useState(false);

  

  console.log("Word is : ", state.word);
  console.log("Desc is : ", state.description);
  console.log("Current pos is : ", state.currentPos);

  // Check for winning condition 
  if(state.letters.length === state.currentPos){
    checkResult();
  }
  
  // Handler functions
  // Add the letter to create word and remove it from letters array
  function handleAddLetter(pos, letters){
    console.log("Handle Add letter clicked");
    const letter = letters[pos];
    let newLetters = [...letters];
    newLetters[pos] = "";

    let newCreateWord = [...state.createdWord];

    for(let i =0; i< state.createdWord.length; i++){
      if(state.createdWord[i] === ""){7
        newCreateWord[i] = letter;
        dispatch({type: "game/addLetter", payload: {letters: newLetters, createdWord: newCreateWord}});
        return;
      }
    }
  }

  function handleRemoveLetter(letter, pos) {
    console.log("Handle remove letter clicked");
    let newLetters = [...state.letters];
    let newCreateWord = [...state.createdWord];
    newCreateWord[pos] = "";


    for(let i=0; i<state.letters.length; i++){
      if(state.letters[i] === ""){
        newLetters[i] = letter;
        dispatch({type: "game/removeLetter", payload: {letters: newLetters, createdWord: newCreateWord}}); 
        return;
      }
    }
  }

  // Check the result form the array
  function checkResult() {
    console.log(`I'm Checking the result Letter: ${state.letters.length} and ${state.currentPos}`);
    let playerWord = "";
    for(let i =0; i < state.createdWord.length; i++){
      playerWord = playerWord + state.createdWord[i];
    }
    console.log(`player loses ${playerWord.toLowerCase()} : ${state.word}`);

    if(playerWord.toLowerCase() === state.word){
      console.log("Player wins");
      dispatch({type: 'game/loadNewWord'});
    }
    else 
      console.log(`player loses ${playerWord.toLowerCase()} : ${state.word}`);

  }

  return (
      <div className="flex items-center justify-center bg-linear-to-br from-primary-500 to-skyblue-500 w-full h-full">
        <ModalWindow visibility={true}> 
          <IncorrectWordModal />
        </ModalWindow>
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
                {state.createdWord.map((letter, index) => letter === "" ? <EmptyCell key={index} /> : <SelectedCell handleClick={handleRemoveLetter} key={index} pos={index} letter={letter} />)}
              </div>

              <div className="flex justify-around items-center mt-6">
                {state.letters.map((letter, index, arr) => <LetterCell handleClick={handleAddLetter} letter={letter} key={index} letters={arr} pos={index} />)}
              </div>
            </div>
          </>
          }

        </div>
      </div>
  )
}

export default App
