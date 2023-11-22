const getCharacters = async (page, query) => {
    try {
        const url = query ? `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}`: `https://rickandmortyapi.com/api/character/?page=${page}`
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error; 
    }
}

const getCharbyName= async (name) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error; 
    }
}



export {getCharacters, getCharbyName}