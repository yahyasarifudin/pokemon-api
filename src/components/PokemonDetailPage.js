import { useQuery, gql } from '@apollo/client';
import React, { useContext, useState } from 'react';
import ContextPokemon from '../ContextPokemon';

const PokemonDetailPage = () => {
 
    const {pokemon} = useContext(ContextPokemon);

    const [detailPokemon, setDetailPokemon] = useState(null);

    const GET_POKEMON = gql`
    query pokemon($name: String!) {
      pokemon(name: $name) {
          id
          name
          sprites {
            back_default
          }
          abilities {
            ability {
              name
            }
          }
          moves {
            move {
              name
            }
          }
          types {
            type {
              name
            }
          }
          message
          status
        }
      }
    `;

    const {loading, error, data} = useQuery(GET_POKEMON, {
        variables: {
            name: pokemon
        },
        onCompleted: function () {
          setDetailPokemon(data.pokemon)
        },
        skip: !pokemon
    });

    const loopingFor = (detailPokemon) => {
        let abilities = detailPokemon?.abilities;
        let types = detailPokemon?.types;
   
         return(
           <table>
             <thead>
               <th>Gambar</th>
               <th>Ability</th>
               <th>Type</th>
               <th>Action</th>
             </thead>
             <tbody>
               <tr>
                 <td><ShowImg user={detailPokemon?.sprites.back_default}/></td>
                 <td>
                   { 
                     abilities?.map((param) => 
                       <Ability key={param} abilities={param.ability.name} />)
                   }
                 </td>
                 <td>
                   { 
                     types?.map((param) => 
                       <TypePokemon key={param} types={param.type.name} />
                     )
                   }
                   </td>
                 <td>
                   <button kind="primary" onClick={() => console.log("NickName!")}>Tangkap</button>
                 </td>
               </tr>
               </tbody>
             </table>
         )
       }
       return <>{loopingFor(detailPokemon)}</>
   }
   
   function Ability(props){
     return(
       <li>{props.abilities}</li>
     )
   }
   
   //component
   function TypePokemon(props){
     return (
       //element
       <li>{props.types}</li>
     ) 
   }
   
   function ShowImg(props){
     return(
         <img src={props.user} />
     )
   }
   
   function Tangkap(){
     return(
       <span>ADD</span>
     )
   }

  

export default PokemonDetailPage;