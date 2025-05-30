import Hint from './components/Hint';
import { useContext, useEffect} from "react";
import EmptyCell from "./components/EmptyCell";
import LetterCell from "./components/LetterCell";
import SelectedCell from "./components/SelectedCell";
import MainMenu from "./components/MainMenu";
import TopLabelContainer from "./components/TopLabelContainer";
import ModalWindow from './components/ModalWindow';
import WinModal from './components/WinModal';
import CorrectWordModal from './components/CorrectWordModal';
import IncorrectWordModal from './components/IncorrectWordModal';
import { GameContext } from './components/GameProvider';
import GameEndModal from './components/GameEndModal';

function App() {

  const {state, dispatch} = useContext(GameContext);
  useEffect(() => {
    
  // Check the result form the array
  function checkResult() {
    let playerWord = "";
    for(let i =0; i < state.createdWord.length; i++){
      playerWord = playerWord + state.createdWord[i];
    }

    if(playerWord.toLowerCase() === state.word){

      if(state.levelWordPos === state.levelWordCount-1){
        
        if(state.level === state.levelLength - 1) {
          return dispatch({type: 'game/setGameEnd'})
        }
        return dispatch({type: 'game/setLevelWin'});
      }

      dispatch({type: 'game/setWordCorrect'});
    }
    else {
      dispatch({type: 'game/setWordIncorrect'})
    }
  }
    // Check for winning condition
    if(state.letters.length === state.currentPos){
      checkResult();
    }
    
  }, [state.letters.length, state.currentPos, dispatch, state.word, state.createdWord, state.levelWordPos,state.levelWordCount, state.level, state.levelLength]);

  // Handler functions
  // Add the letter to create word and remove it from letters array
  function handleAddLetter(pos, letters){
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

  return (
      <div className="flex items-center justify-center bg-linear-to-br from-primary-500 to-skyblue-500 w-full h-full">
        <ModalWindow visibility={state.modalVisibility}>
          {state.modalChild === "setCorrectWord" && <CorrectWordModal dispatch={dispatch} />}
          {state.modalChild === "setIncorrectWord" && <IncorrectWordModal dispatch={dispatch} />}
          {state.modalChild === "setWin" && <WinModal dispatch={dispatch} />}
          {state.modalChild === "gameEnd" && <GameEndModal />}
        </ModalWindow> 
        <div className="max-w-[600px] w-[300px] mt-4 mb-16 h-[80%] flex flex-col items-center justify-between">
          {
            !state.playing ? 
              <MainMenu /> : 
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
