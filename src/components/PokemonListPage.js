import React, {useContext, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import ContextPokemon from '../ContextPokemon';


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
        offset,
        limit,
      },
      
    });
   

   
    const loadMore = () => {
      const currentLength = data.pokemons.results.length;
      fetchMore({
          variables: {
              offset: currentLength,
              limit: 10
          },
      }).then(fetchMoreResult => {
          // Update variables.limit for the original query to include
          // the newly added feed items.
          setLimit(currentLength + fetchMoreResult.data.pokemons.results.length);
      });
  }

  const listPokemon =  data?.pokemons.results.map((value) => {
    return <button key={value.name} onClick={() => setPokemon(value.name)}>{value.name}</button>;
})


  return (
    <>
        <h4>List Pokemon</h4>
        <ul><button onClick={() => loadMore()} >Next-</button></ul>
        {/* <ul><button onClick={() => {
         
            fetchMore({
              variables: {
                offset:setOffset,
                limit:setLimit,
              },
            }).then(fetchMoreResult => {
              // Update variables.limit for the original query to include
              // the newly added feed items.
              setOffset(setOffset + setLimit);
            });
        }} >next</button></ul> */}
        <ul>{listPokemon}</ul>

       
        
       
    </>
  )
}


  export default PokemonListPage;