import React, {useState} from 'react';


const ContextPokemon = React.createContext();

export const ProviderPokemon = ({children}) => {
    const [pokemon, setPokemon] = useState(null);

    const value = {
        pokemon,
        setPokemon
    };

    return (
        <ContextPokemon.Provider value={value}>{children}</ContextPokemon.Provider>
    )
};

export default ContextPokemon;