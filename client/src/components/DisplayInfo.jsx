import { React, useState, useEffect } from 'react'
import { getOneCharacter, deleteHandler } from '../services/CharacterService'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CharacterData, * as characters from '../FireEmblemData/CharacterData/Characters.js'
import classInfo from '../FireEmblemData/ClassData/Classes.js'
const DisplayInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [hardCodedCharacter, setHardCodedCharacter] = useState({});
    const [hardCodedClass, setHardCodedClass] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false);
    const [classLoaded, setClassLoaded] = useState(false);

    useEffect(() => {
        getOneCharacter(id)
            .then((res) => {
                setCharacter(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    const unit = CharacterData.filter(c => c.name == character.name);
    useEffect(() => {
        if (unit.length == 1) {
            setHardCodedCharacter(unit[0]);
            setCharacterLoaded(true);
        }
    }, [unit[0]])
    const classData = classInfo.filter(c => c.name == character.class);
    useEffect(() => {
        if (classData.length == 1) {
            setHardCodedClass(classData[0]);
            setClassLoaded(true)
        }
    }, [classData[0]])
    return (
        <>
            <div className='text-white fs-2'>
                <p>Name: {character.name}</p>
                <p>Class: {character.class}</p>
                <p>Gender: {character.isMale ? "Male" : "Female"}</p>
                <p>Level: {character.level}</p>
                <p>Internal Level: {character.internalLevel}</p>
                <p>HP: {character.hp}</p>
                <p>Str: {character.str}</p>
                <p>Def: {character.def}</p>
                <p>Mag: {character.mag}</p>
                <p>Res: {character.res}</p>
                <p>Dex: {character.dex}</p>
                <p>Luck: {character.luck}</p>
                <p>Spd: {character.spd}</p>
                <div className='d-flex flex-column'>
                    <table className='table table-striped table-light'>
                        <thead>
                            <tr>
                                <td>Stat Caps: </td>
                                <td>HP: </td>
                                <td>Str: </td>
                                <td>Mag: </td>
                                <td>Dex: </td>
                                <td>Spd: </td>
                                <td>Def: </td>
                                <td>Res: </td>
                                <td>Lck: </td>
                                <td>Bld: </td>
                                <td>Total: </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Unit Modifiers: </td>
                                <td>{0}</td>
                                {characterLoaded ? <td>{hardCodedCharacter.characterStatCap.str}</td> : <td></td>}
                                {characterLoaded ? <td>{hardCodedCharacter.characterStatCap.mag}</td> : <td></td>}
                                {characterLoaded ? <td>{hardCodedCharacter.characterStatCap.dex}</td> : <td></td>}
                                {characterLoaded ? <td>{hardCodedCharacter.characterStatCap.spd}</td> : <td></td>}
                                {characterLoaded ? <td>{hardCodedCharacter.characterStatCap.def}</td> : <td></td>}
                                {characterLoaded ? <td>{hardCodedCharacter.characterStatCap.res}</td> : <td></td>}
                                {characterLoaded ? <td>{hardCodedCharacter.characterStatCap.lck}</td> : <td></td>}
                                {characterLoaded ? <td>{0}</td> : <td></td>}
                                {characterLoaded ? <td>{hardCodedCharacter.characterStatCap.total}</td> : <td></td>}
                            </tr>
                            <tr>
                                <td>Class Caps: </td>
                                {classLoaded ? <td>{hardCodedClass.classCap.hp}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.str}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.mag}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.dex}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.spd}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.def}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.res}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.lck}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.bld}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.total}</td> : <td></td>}
                            </tr>
                            <tr>
                                <td>Combined Caps: </td>
                                {classLoaded ? <td>{hardCodedClass.classCap.hp}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterStatCap.str + hardCodedClass.classCap.str}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterStatCap.mag + hardCodedClass.classCap.mag}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterStatCap.dex + hardCodedClass.classCap.dex}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterStatCap.spd + hardCodedClass.classCap.spd}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterStatCap.def + hardCodedClass.classCap.def}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterStatCap.res + hardCodedClass.classCap.res}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterStatCap.lck + hardCodedClass.classCap.lck}</td> : <td></td>}
                                {classLoaded ? <td>{hardCodedClass.classCap.bld}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterStatCap.total + hardCodedClass.classCap.total}</td> : <td></td>}
                            </tr>
                        </tbody>
                    </table>
                    <table className='table table-striped table-dark'>
                        <thead>
                            <tr>
                                <td>Growth Rates:</td>
                                <td>HP</td>
                                <td>Str</td>
                                <td>Mag</td>
                                <td>Dex</td>
                                <td>Spd</td>
                                <td>Def</td>
                                <td>Res</td>
                                <td>Lck</td>
                                <td>Bld</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr>
                                    <td>Character Growth</td>
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.hp}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.str}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.mag}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.dex}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.spd}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.def}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.res}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.lck}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.bld}</td> : <td></td>}
                                    {characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.total}</td> : <td></td>}
                                </tr>

                            }
                            {
                                <tr>
                                    <td>Class Growth</td>
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.hp}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.str}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.mag}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.dex}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.spd}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.def}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.res}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.lck}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.bld}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.total}</td> : <td></td>}
                                </tr>
                            }
                            <tr>
                                <td>Combined Growths</td>
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.hp + hardCodedClass.classGrowth.hp}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.str + hardCodedClass.classGrowth.str}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.mag + hardCodedClass.classGrowth.mag}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.dex + hardCodedClass.classGrowth.dex}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.spd + hardCodedClass.classGrowth.spd}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.def + hardCodedClass.classGrowth.def}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.res + hardCodedClass.classGrowth.res}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.lck + hardCodedClass.classGrowth.lck}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.bld + hardCodedClass.classGrowth.bld}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.total + hardCodedClass.classGrowth.total}</td> : <td></td>}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className='btn btn-dark' onClick={() => deleteHandler(id, navigate)}>Delete</button>
                <br />
                <Link to='/' className='btn btn-secondary'>Home</Link>
            </div >
        </>
    )
}

export default DisplayInfo