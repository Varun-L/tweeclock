// Function to fetch data from the API
async function fetchData(url,options) {
    const response = await fetch(url,options);
    console.log(await response.text())
    const data = await response.json();
    return data;
}

// Function to get a random English word and its meaning
async function getRandomEnglishWord() {
    const englishAPIUrl = 'https://api.wordnik.com/v4/words.json/randomWord?api_key=YOUR_API_KEY';
    // const englishAPIUrl = 'https://english-api.com/random-word';
    const englishData = await fetchData(englishAPIUrl);
    const englishWord = englishData.word;
    const englishMeaning = englishData.meaning;
    console.log(`English Word: ${englishWord}`);
    console.log(`English Meaning: ${englishMeaning}`);
}

// Function to get a Spanish word and its meaning
// async function getSpanishWord() {
//     const spanishAPIUrl = 'https://libretranslate.com/translate?q=hello&source=en&target=es';
//     const spanishData = await fetchData(spanishAPIUrl);
//     const spanishWord = spanishData.word;
//     const spanishMeaning = spanishData.meaning;
//     console.log(`Spanish Word: ${spanishWord}`);
//     console.log(`Spanish Meaning: ${spanishMeaning}`);
// }
async function getSpanishWord() {
    const spanishAPIUrl = 'https://libretranslate.com/translate';
    const spanishData = await fetchData(spanishAPIUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            q: 'hello',
            source: 'en',
            target: 'es'
        })
    });
    const spanishWord = spanishData.translatedText;
    console.log(`Spanish Word: ${spanishWord}`);
}
// Function to get a French word and its meaning
async function getFrenchWord() {
    const frenchAPIUrl = 'https://libretranslate.com/translate?q=hello&source=en&target=fr';
    const frenchData = await fetchData(frenchAPIUrl);
    const frenchWord = frenchData.word;
    const frenchMeaning = frenchData.meaning;
    console.log(`French Word: ${frenchWord}`);
    console.log(`French Meaning: ${frenchMeaning}`);
}

// Switch case statement to call the appropriate function based on the language
function getWordAndMeaning(language) {
    switch (language) {
        case 'en':
            getRandomEnglishWord();
            break;
        case 'es':
            getSpanishWord();
            break;
        case 'fr':
            getFrenchWord();
            break;
        default:
            console.log('Invalid language');
    }
}

// Example usage
// getWordAndMeaning('en'); // Get random English word and meaning
getWordAndMeaning('es'); // Get random Spanish word and meaning
// getWordAndMeaning('fr'); // Get random French word and meaning
