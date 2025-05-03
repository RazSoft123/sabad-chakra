// Suffling the letters
export function suffleLetters(letters) {
    let suffledLetters = [...letters];
    let j = 0;
    for(let i = 0; i < suffledLetters.length; i++){
        j = Math.floor(Math.random() * (suffledLetters.length - 1));
        [suffledLetters[i], suffledLetters[j]] = [suffledLetters[j], suffledLetters[i]];
    }
    
    return suffledLetters;
}