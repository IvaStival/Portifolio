

export const generateJoke = async () => {
    
    let response = await fetch('http://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    })
    
    const data = await response.json() 

    return (await data.joke);
}

