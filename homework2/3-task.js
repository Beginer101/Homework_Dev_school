function groupAnagrams(words) {
    const anagramGroups = {};

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        const letter = sortedWord.trim().replace('`','');
        console.log(letter);
        if (anagramGroups[letter]) {
            anagramGroups[letter].push(word);
        } else {
            anagramGroups[letter] = [word];
        }
    }

    return Object.values(anagramGroups);
}

const result = groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese", "a gentleman", "clint eastwood", "elegant man", "william shakespeare", "old west action", "i`ll make a wise phrase"]);
console.log(result);
