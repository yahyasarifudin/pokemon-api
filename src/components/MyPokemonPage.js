import React, { useContext, useState } from 'react';
import { render } from 'react-dom';
import ContextPokemon from '../ContextPokemon';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client';

const MyPokemonPage = () => {
    const {pokemon, tangkapan, setTangkapan} = useContext(ContextPokemon);

    const [state, setState] = useState("");


    const hapusPokemon = () => {
      setTangkapan([...tangkapan, tangkapan]);
    }
    
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

        return(
            <table>
                <thead>
                    <th>Nama</th>
                    <th>Nick Name</th>
                    <th>Aksi</th>
                </thead>
                <tbody>
                 
                      {tangkapan?.map(i => 
                       <tr>
                        <td key={i} ><input type="text" readOnly key={i.id} name={i.value} value={i} /></td>
                        <td>  
                                <input
                                  type="text"
                                  value={state}
                                  name="nickname"
                                  onChange={event => setState(event.target.value)}
                                  />
                                </td>
                          <td><button onClick={() => hapusPokemon(i)}>hapus</button></td>
                       </tr>
                      )}
                </tbody>
                <tfoot>
                <tr><span>{tangkapan?.lenght}</span></tr>
                </tfoot>
            </table>
        )
  
   
}


export default MyPokemonPage;