const getRandomPhrase = (phrases) =>{
    const randomIndexPhrase = Math.floor(Math.random()*phrases.length)
    return phrases[randomIndexPhrase]
}

export default getRandomPhrase;
