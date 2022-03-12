function getLetters(letters = []) {
    let index = 1;
    let word = '';
    let result = [];
    for (let i = 0; i < letters.length; i++) {
        let wordsArray = letters[i].split(' ');
        for (let w = 0; w < wordsArray.length; w++) {
            if(wordsArray[w].length >= index){
                word += wordsArray[w][index - 1];
                index++;
            }    
        }
        index = 1;
        result.push(word);
        word = '';
    }

    console.log(result.join(" "));
}


getLetters(["Hey good lawyer","as I previously previewed", "yam does a soup"]);
getLetters(["First I give money to Teresa", "after I inform dad of", "your horrible soup"]);
getLetters(["Lo que el viento se llevo","vamos a la playa","cuatro gatos estan en el tejado"])
getLetters(["they were getting closer to the redcoats","he held on for his life,then he sniffed it","her hooves kept pounding against the dirt"])
getLetters(["his ears hurt from the sound of the shot","there was a stable across from the tavern","they hurried up Lynn street toward the river","he would stay by her side"])