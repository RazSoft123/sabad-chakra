import levelData from './../data/word_data';
import { suffleLetters } from './../utils/utilities';

export const initialState = {
    word: levelData.levels[0].words[0].word,
    description: levelData.levels[0].words[0].desc,
    levelWordPos: 0,
    level: 0,
    levelLength: levelData.levels.length,
    levelWordCount: levelData.levels[0].words.length,
    score: 0,
    letters: suffleLetters(levelData.levels[0].words[0].word.toUpperCase().split("")),
    currentPos: 0,
    createdWord: Array(levelData.levels[0].words[0].word.length).fill(""),
    modalVisibility: false,
    modalChild: "",
    playing: false,
}

export function reducer(state, action) {
    switch(action.type){
        case 'game/loadNewWord':
            {
            const newWordPos = state.levelWordPos + 1;
            return { ...state, 
                levelWordPos: newWordPos,
                word: levelData.levels[state.level].words[newWordPos].word,
                description: levelData.levels[state.level].words[newWordPos].desc,
                score: state.score + 1,
                letters: suffleLetters(levelData.levels[state.level].words[newWordPos].word.toUpperCase().split("")),
                currentPos: 0,
                createdWord: Array(levelData.levels[state.level].words[newWordPos].word.length).fill(""),
                modalVisibility: false,
                modalChild: "",
            } 
        }

        case 'game/loadSameWord': 
            return {
            ...state,
                letters: suffleLetters(levelData.levels[state.level].words[state.levelWordPos].word.toUpperCase().split("")),
                currentPos: 0,
                createdWord: Array(levelData.levels[state.level].words[state.levelWordPos].word.length).fill(""),
                modalVisibility: false,
                modalChild: "",
            }
        
        case 'game/loadNewLevel' :
            {
                const newLevel = state.level + 1;
                return {
                    ...state,
                    level: newLevel,
                    levelWordPos: 0,
                    word: levelData.levels[newLevel].words[0].word,
                    description: levelData.levels[newLevel].words[0].desc,
                    score: state.score + 5,
                    letters: suffleLetters(levelData.levels[newLevel].words[0].word.toUpperCase().split("")),
                    currentPos: 0,
                    createdWord: Array(levelData.levels[newLevel].words[0].word.length).fill(""),
                    modalVisibility: false,
                    modalChild: "",
                }
            }
        
        case 'game/loadSameLevel' :
            return {
                ...state,
                levelWordPos: 0,
                word: levelData.levels[state.level].words[0].word,
                description: levelData.levels[state.level].words[0].desc,
                letters: suffleLetters(levelData.levels[state.level].words[0].word.toUpperCase().split("")),
                currentPos: 0,
                createdWord: Array(levelData.levels[state.level].words[0].word.length).fill(""),
                modalVisibility: false,
                modalChild: "",
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

        case 'game/setLevelWin' :
            return {
            ...state,
            modalVisibility: true,
            modalChild: 'setWin',
            currentPos: 0,
        }
    
        case 'game/setWordCorrect' :
            return {
                ...state,
                modalVisibility: true,
                modalChild: 'setCorrectWord',
                currentPos: 0,
            }
    
        case 'game/setWordIncorrect' :
            return {
                ...state,
                modalVisibility: true,
                modalChild: 'setIncorrectWord',
                currentPos: 0,
            }
        
        case 'game/goHome' : 
            return {
                ...initialState,
            }
        case 'game/setPlaying' : 
        return {
            ...state,
            playing: !state.playing,
        }
        case 'game/setGameEnd': 
        return {
            ...state,
            modalChild: 'gameEnd',
            modalVisibility: true,
        }
        default :
    
        break;
    }
}