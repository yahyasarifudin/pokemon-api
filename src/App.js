import logo from './logo.svg';
import './App.css';
import PokemonListPage from './components/PokemonListPage';
import PokemonDetailPage from './components/PokemonDetailPage';
import MyPokemonPage from './components/MyPokemonPage';
import { ProviderPokemon } from './ContextPokemon';
import { useState } from "react";
import { ApolloClient, gql, ApolloProvider, InMemoryCache } from '@apollo/client';


function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-pokeapi.vercel.app/api/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <ProviderPokemon>
        <p>Pokemon</p>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PokemonListPage />
            </div>

            <div className="col-md-12">
              <div class="row">
              <div className="col-md-6">
                <PokemonDetailPage />
              </div>
              <div className="col-md-6">
               <MyPokemonPage />

              </div>
              </div>
            </div>

          </div>
          
        </div>
      </ProviderPokemon>
    </ApolloProvider>
  );
}

export default App;
