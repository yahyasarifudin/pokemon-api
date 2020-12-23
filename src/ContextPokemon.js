import React, {useEffect, useState} from 'react';


const ContextPokemon = React.createContext();

export const ProviderPokemon = ({children}) => {
    
    const [tangkapan, setTangkapan ] = useState([]);

    const [pokemon, setPokemon] = useState(null);

    useEffect(() =>{
        localStorage.setItem('tangkapan', JSON.stringify(tangkapan));
    },[tangkapan]);

    const value = {
        pokemon,
        tangkapan : localStorage.getItem('tangkapan') ? JSON.parse(localStorage.getItem('tangkapan')) : [],
        setPokemon,
        setTangkapan

    };

    return (
        <ContextPokemon.Provider value={value}>{children}</ContextPokemon.Provider>
    )
};

export default ContextPokemon;