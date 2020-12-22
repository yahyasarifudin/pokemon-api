import React, { useContext, useState } from 'react';
import { render } from 'react-dom';
import ContextPokemon from '../ContextPokemon';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from '@apollo/client';

const MyPokemonPage = () => {
    const {pokemon, tangkapan} = useContext(ContextPokemon);

    // const cache = new InMemoryCache();
    
    // const GET_POKEMON = gql`
    // query pokemon($name: String!) {
    //   pokemon(name: $name) {
    //       id
    //       name
    //       nickname @client 
    //     }
    //   }
    // `;

    // cache.writeQuery({
    //     query: useQuery(GET_POKEMON),
    //     data: {
    //         cartItems: !!localStorage.getItem("token"),
    //     },
        
    //   });
      
    // const { data } = useQuery(GET_POKEMON);
    // console.log(data);
    // return (
    //     data.pokemon ?  
    //   <div class="cart">
    //     {data && data.cartItems.length === 0 ? (
    //       <p>No items in your cart</p>
    //     ) : (
    //       <>
    //         {data && data.cartItems.map(productId => (
    //           <p key={productId}></p>
    //         ))}
    //       </>
    //     )}
    //   </div>
    //   : <p>No items in your cart</p>
    // );
    let nickname ="this is nickname";

        return(
            <table>
                <thead>
                    <th>Nama</th>
                    <th>Nick Name</th>
                    <th>Aksi</th>
                </thead>
                <tbody>
                    <tr>
                        {tangkapan ? 
                          <td>{tangkapan}</td> :<td>Kosong</td> }
                        <td>{nickname}</td>
                        <td><button>hapus</button></td>

                    </tr>
                
                </tbody>
                <tfoot>
                <tr><span>{tangkapan?.lenght}</span></tr>
                </tfoot>
            </table>
        )
  
   
}


export default MyPokemonPage;