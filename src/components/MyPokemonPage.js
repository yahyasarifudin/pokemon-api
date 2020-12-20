import React from 'react';

const MyPokemonPage = () => {

    return(
        <table>
            <thead>
                <th>Nama</th>
                <th>Aksi</th>
            </thead>
            <tbody>
                <tr>
                    <td>Pikacu</td>
                    <td><button>hapus</button></td>
                </tr>
            </tbody>
            <tfoot>
            <tr><span>(*jumlah)</span></tr>
            </tfoot>
        </table>
    )
}

export default MyPokemonPage;