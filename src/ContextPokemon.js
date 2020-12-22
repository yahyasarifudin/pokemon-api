import React, {useState} from 'react';


const ContextPokemon = React.createContext();

export const ProviderPokemon = ({children}) => {
    
    const [tangkapan, setTangkapan ] = useState("");

    const [pokemon, setPokemon] = useState(null);

    const value = {
        pokemon,
        tangkapan,
        setPokemon,
        setTangkapan

    };

    return (
        <ContextPokemon.Provider value={value}>{children}</ContextPokemon.Provider>
    )
};

export default ContextPokemon;