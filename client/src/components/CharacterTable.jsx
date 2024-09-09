import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/CharacterService';
import { Link } from 'react-router-dom';
const CharacterTable = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getAllCharacters()
            .then((res) => {
                setCharacters(res);
            })
            .catch((err) => {
                console.log(err);
            }, [])
    })
    return (
        <div className='d-flex flex-column table-fixed bg-slate-300 border-separate shadow'>
            <table>
                <thead>
                    <tr>
                        <td>Name: </td>
                        <td>Class: </td>
                        <td>HP: </td>
                        <td>Str: </td>
                        <td>Def: </td>
                        <td>Mag: </td>
                        <td>Res: </td>
                        <td>Dex: </td>
                        <td>Luck: </td>
                        <td>Spd: </td>
                        <td>Bld: </td>
                        <td>Internal Level: </td>
                        <td>Level: </td>
                        <td>Info: </td>
                        <td>Edit:</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters.map((character) => (
                            <tr key={character._id}>
                                <td>{character.name}</td>
                                <td>{character.class}</td>
                                <td>{character.hp}</td>
                                <td>{character.str}</td>
                                <td>{character.def}</td>
                                <td>{character.mag}</td>
                                <td>{character.res}</td>
                                <td>{character.dex}</td>
                                <td>{character.luck}</td>
                                <td>{character.spd}</td>
                                <td>{character.bld}</td>
                                <td>{character.internalLevel}</td>
                                <td>{character.level}</td>
                                <td><Link className='btn btn-secondary text-white' to={`character/${character._id}/details`}>More Info</Link></td>
                                <td><Link className='btn btn-secondary text-white' to={`character/${character._id}/edit`}>Edit {character.name}</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CharacterTable