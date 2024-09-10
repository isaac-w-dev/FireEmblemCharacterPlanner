import React from 'react'
import Nav from '../components/Nav'
import CharacterTable from '../components/CharacterTable'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Nav title={'Home'} />
            <CharacterTable />
            <Link className="rounded-md bg-gray-400 text-white p-0.5" to={'/create'}>Add a Character</Link>
        </ div>
    )
}

export default Home