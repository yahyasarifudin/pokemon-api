import React, { useContext, useState } from 'react';
import ContextPokemon from '../ContextPokemon';


const MyPokemonPage = () => {
    const {tangkapan, setTangkapan} = useContext(ContextPokemon);

    const [state, setState] = useState("");


    const hapusPokemon = (i) => {
      setTangkapan([...tangkapan, tangkapan]);
    }

        return(
            <table>
                <thead>
                    <th>Nama</th>
                    <th>Nick Name</th>
                    <th>Aksi</th>
                </thead>
                <tbody>
                      {tangkapan?.map((i, index) => 
                       <tr key={index}>
                        <td key={index}><input type="text" key={index} readOnly name={index} value={i} /></td>
                        <td key={index}>  
                                <input
                                  type="text"
                                  key={index}
                                  value={state}
                                  name="nickname"
                                  onChange={event => setState(event.target.value)}
                                  />
                                </td>
                          <td key={index}><button key={index} onClick={() => hapusPokemon(index)}>hapus</button></td>
                       </tr>
                        )
                      }
                    
                </tbody>
                <tfoot>
                <tr><span>{tangkapan?.lenght}</span></tr>
                </tfoot>
            </table>
        )
  
   
}


export default MyPokemonPage;