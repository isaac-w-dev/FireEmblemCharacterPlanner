import React from 'react'
import UnitComparisonCard from '../components/UnitComparisonCard'
import Nav from '../components/Nav'
import { useState } from 'react';
import CharacterData from '../FireEmblemData/CharacterData/Characters';
import classInfo from '../FireEmblemData/ClassData/Classes';
const ComparisonPage = () => {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({
        name: '',
        class: ''
    })
    const unitData = CharacterData;
    const classData = classInfo;
    const handleSubmit = (e) => {
        e.preventDefault();
        setCharacters(prevCharacters => [...prevCharacters, character]);
        setCharacter({ name: '', class: '' });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCharacter(prevCharacter => ({
            ...prevCharacter, [name]: value
        }));
    };
    return (
        <div>
            <Nav title={"Comparison Page"} />
            <form
                className='w-50 mx-auto text-white m-3 mx-3'
                onSubmit={handleSubmit}
            >
                <label>Unit Name: </label>
                <select
                    name='name'
                    id='name'
                    className='form-label'
                    value={character.name}
                    onChange={handleChange}>
                    <option value='' disabled>
                        --Select Name--
                    </option>
                    {
                        unitData.map((character, index) => (
                            <option key={index} value={character.name}>
                                {character.name}
                            </option>
                        ))
                    }
                </select>
                <select
                    name='class'
                    id='class'
                    value={character.class}
                    onChange={handleChange}>
                    <option value='' disabled>--Select Class--</option>
                    {
                        classData.map((classData, index) => (
                            <option key={index} value={classData.name}>
                                {classData.name}
                            </option>
                        ))
                    }
                </select>
                <button type='submit'>Submit</button>
            </form>
            {characters.map((character, index) => (
                <UnitComparisonCard key={index} character={character} setCharacter={setCharacter}/>
            ))
            }
        </div>
    )
}

export default ComparisonPage