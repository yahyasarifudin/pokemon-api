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
          </div>
          <table>
            <tbody>
            <tr>
              <td><p>Detail Pokemon :</p>
                <PokemonDetailPage />
              </td>
              <td>
                <p>My Pokemon :</p>
                <MyPokemonPage />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </ProviderPokemon>
    </ApolloProvider>
  );
}

export default App;
