import React from 'react'
import Nav from '../components/Nav'
import CharacterTable from '../components/CharacterTable'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-dark'>
            <Nav title={'Home'} />
            <CharacterTable />
            <Link className='btn btn-secondary' to={'/create'}>Create a character</Link>
        </ div>
    )
}

export default Home