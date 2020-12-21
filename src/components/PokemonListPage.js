import React, {useContext, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import ContextPokemon from '../ContextPokemon';
import { offsetLimitPagination } from "@apollo/client/utilities";

const PokemonListPage = () => {
    const { setPokemon } = useContext(ContextPokemon);
    
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(10);

    const FEED_QUERY = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          count
          next
          previous
          status
          message
          results {
            name
          }
        }
      }
    `;

    const {loading, error, data, fetchMore} = useQuery(FEED_QUERY, {
      variables: {
        offset:0,
        limit,
      },
      
    });
   

    const listPokemon =  data?.pokemons.results.map((value) => {
        return <button key={value.name} onClick={() => setPokemon(value.name)}>{value.name}</button>;
    })
    
    const loadMore = () => {
        return <button 
        entries={data.pokemons || []}
          onClick={() => {
            const currentLength = data.pokemons.results.length;
            fetchMore({
              variables: {
                offset: currentLength,
                limit:10,
              },
            }).then(fetchMoreResult => {
              // Update variables.limit for the original query to include
              // the newly added feed items.
              setLimit(currentLength + fetchMoreResult.data.pokemons.results.length);
            });
          }
        }> Load More</button>
    }

  return (
    <>
        <h4>List Pokemon</h4>
        <ul>{listPokemon}</ul>
        <ul>{loadMore}</ul>
        {/* <ul><button 
         entries={data.pokemons || []}
          onClick={() => {
            let currentLength = data.pokemons.results.length;
            fetchMore({
              variables: {
                offset: currentLength,
                limit:10
              },
            }).then(fetchMoreResult => {
              // Update variables.limit for the original query to include
              // the newly added feed items.
              setLimit(currentLength + fetchMoreResult.data.pokemons.results.length);
            });
          }
        }> Load More</button></ul>         */}
       
    </>
  )
}


  export default PokemonListPage;