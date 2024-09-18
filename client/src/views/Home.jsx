import React from 'react'
import Nav from '../components/Nav'
import CharacterTable from '../components/CharacterTable'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Nav title={'Home'} />
            <CharacterTable />
            <div className="flex justify-evenly">
                <Link className="rounded-md bg-gray-400 text-white p-0.5" to={'/create'}>Add a Character</Link>
                <Link className="rounded-md bg-gray-400 text-white p-0.5 space-around" to={'/comparison'}>Comparison Page</Link>
            </div>
        </ div>
    )
}

export default Home