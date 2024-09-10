import React, { useState } from 'react';
import { createCharacter, updateOneCharacter } from '../services/CharacterService.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import CharacterData from '../FireEmblemData/CharacterData/Characters.js';
import classInfo from '../FireEmblemData/ClassData/Classes.js';
import { changeHandler } from '../functions/FormFunctions.jsx';
import { useEffect } from 'react';
const Form = (props) => {
    let { page } = props;
    const { characterInstance } = props;
    const { setCharacterInstance } = props;
    const navigate = useNavigate();
    const { id } = useParams();
    const unitData = CharacterData;
    const unitClassData = classInfo;
    const [errors, setErrors] = useState({});
    const { formErrors } = props;
    const { setFormErrors } = props;
    const [hardCodedCharacter, setHardCodedCharacter] = useState({});
    const [characterLoaded, setCharacterLoaded] = useState(false);
    const [classLoaded, setClassLoaded] = useState(false);
    const [hardCodedClass, setHardCodedClass] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        if (page == 'edit') {
            updateOneCharacter(id, characterInstance)
                .then((res) => {
                    console.log(res)
                    navigate('/');
                })
                .catch((err) => {
                    console.log('ERROR: ', err);
                    console.log('ERROR RESPONSE: ', err.response)
                    console.log('ERROR RESPONSE DATA: ', err.response.data)
                    console.log('ERROR RESPONSE DATA ERRORS: ', err.response.data.errors);
                    setErrors(err.response.data.errors)
                });
        }
        else {
            createCharacter(characterInstance)
                .then((res) => {
                    console.log(res)
                    navigate('/');
                })
                .catch((err) => {
                    console.log('ERROR: ', err);
                    console.log('ERROR RESPONSE: ', err.response)
                    console.log('ERROR RESPONSE DATA: ', err.response.data)
                    console.log('ERROR RESPONSE DATA ERRORS: ', err.response.data.errors);
                    setErrors(err.response.data.errors)
                });
        }
    }
    const unit = CharacterData.filter(c => c.name == characterInstance.name);
    useEffect(() => {
        setCharacterLoaded(false);
        if (unit.length == 1) {
            setHardCodedCharacter(unit[0]);
            setCharacterLoaded(true);
        }
    }, [unit[0]])
    const classData = classInfo.filter(c => c.name == characterInstance.class);
    useEffect(() => {
        setClassLoaded(false);
        if (classData.length == 1) {
            setHardCodedClass(classData[0]);
            setClassLoaded(true)
        }
    }, [classData[0]])
    const validateForm = () => {
        console.log(Object.values(formErrors))
        return Object.values(formErrors).every(value => value === '')
    }
    return (
        <>
            <form className='w-50 mx-auto text-white m-3 mx-3'
                onSubmit={submitHandler}
            >
                <div>
                    <br />
                    <label className='form-label'>Unit's Name:  </label>
                    {<select
                        name="name"
                        id="name"
                        value={characterInstance.name}
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}>
                        <option value="" disabled>
                            --Select Name--
                        </option>
                        {
                            unitData.map((character, index) => (
                                <option key={index} value={character.name}>
                                    {character.name}
                                </option>
                            ))
                        }
                    </select>}
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.name}</p>
                            :
                            null
                    }
                    {
                        errors.name ?
                            <p className='text-danger'>{errors.name.message}</p>
                            :
                            null
                    }
                </div>
                <div className='flex flex-col justify-center'>
                    <div>
                        <label className='form-label'>Class:  </label>
                        {
                            characterLoaded ?
                                < select
                                    name="class"
                                    id="pClass"
                                    value={characterInstance.class}
                                    onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}>
                                    <option value="" disabled>
                                        --Select Class--
                                    </option>
                                    {
                                        hardCodedCharacter.potentialClasses.map((pClass, index) => (
                                            <option key={index} value={pClass.name}>
                                                {pClass.name}
                                            </option>
                                        ))
                                    }
                                </select>
                                :
                                < select
                                    name="class"
                                    id="class"
                                    value={characterInstance.class}
                                    onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}>
                                    <option value="" disabled>
                                        --Select Class--
                                    </option>
                                    {
                                        unitClassData.map((classData, index) => (
                                            <option key={index} value={classData.name}>
                                                {classData.name}
                                            </option>
                                        ))
                                    }
                                </select>
                        }
                    </div>
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.class}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.class.message}</p>
                            :
                            null
                    }
                    <br />
                    {characterLoaded ? <p>Personal Skill: {hardCodedCharacter.personalSkill.name}- {hardCodedCharacter.personalSkill.description}</p> : <p></p>}
                    <br />
                    {classLoaded ? <p>Class Skill: {hardCodedClass.skill.name ? hardCodedClass.skill.name + "-" : "N/A"} {hardCodedClass.skill.description}</p> : <p></p>}
                    <table className='m-3'>
                        <thead>
                            <tr>
                                <td>Growths:</td>
                                <td>HP:</td>
                                <td>Str:</td>
                                <td>Mag:</td>
                                <td>Dex:</td>
                                <td>Spd:</td>
                                <td>Def:</td>
                                <td>Res:</td>
                                <td>Lck:</td>
                                <td>Bld:</td>
                                <td>Total:</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Character Growth: </td>
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
                            {
                                <tr>
                                    <td>Class Growth: </td>
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.hp * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.str * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.mag * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.dex * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.spd * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.def * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.res * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.lck * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.bld * hardCodedCharacter.multiplier}</td> : <td></td>}
                                    {classLoaded ? <td>{hardCodedClass.classGrowth.total * hardCodedCharacter.multiplier}</td> : <td></td>}
                                </tr>
                            }
                            <tr>
                                <td>Combined Growths: </td>
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.hp + hardCodedClass.classGrowth.hp * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.str + hardCodedClass.classGrowth.str * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.mag + hardCodedClass.classGrowth.mag * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.dex + hardCodedClass.classGrowth.dex * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.spd + hardCodedClass.classGrowth.spd * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.def + hardCodedClass.classGrowth.def * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.res + hardCodedClass.classGrowth.res * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.lck + hardCodedClass.classGrowth.lck * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.bld + hardCodedClass.classGrowth.bld * hardCodedCharacter.multiplier}</td> : <td></td>}
                                {classLoaded && characterLoaded ? <td>{hardCodedCharacter.characterGrowthRate.total + hardCodedClass.classGrowth.total * hardCodedCharacter.multiplier}</td> : <td></td>}
                            </tr>
                            <tr>
                                <td>Caps: </td>
                            </tr>
                            <tr>
                                <td>Unit Modifiers: </td>
                                {characterLoaded ? <td>{0}</td> : <td></td>}
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
                </div>
                <div>
                    <label className='form-label'>Level: </label>
                    <input className='form-control'
                        type="number"
                        name="level"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.level} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.level}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.level.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Internal Level: </label>
                    <input className='form-control'
                        type="number"
                        name="internalLevel"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.internalLevel} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.internalLevel}</p>
                            :
                            null
                    }
                    {
                        errors.internalLevel ?
                            <p className='text-danger'>{errors.internalLevel.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>HP: </label>
                    <input className='form-control'
                        type="number"
                        name="hp"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.hp} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.hp}</p>
                            :
                            null
                    }
                    {
                        errors.hp ?
                            <p className='text-danger'>{errors.hp.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Str: </label>
                    <input className='form-control'
                        type="number"
                        name="str"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.str} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.str}</p>
                            :
                            null
                    }
                    {
                        errors.str ?
                            <p className='text-danger'>{errors.str.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Def: </label>
                    <input className='form-control'
                        type="number"
                        name="def"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.def} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.def}</p>
                            :
                            null
                    }
                    {
                        errors.def ?
                            <p className='text-danger'>{errors.def.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Mag: </label>
                    <input className='form-control'
                        type="number"
                        name="mag"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.mag} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.mag}</p>
                            :
                            null
                    }
                    {
                        errors.mag ?
                            <p className='text-danger'>{errors.mag.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Res: </label>
                    <input className='form-control'
                        type="number"
                        name="res"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.res} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.res}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.res.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Dex: </label>
                    <input className='form-control'
                        type="number"
                        name="dex"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.dex} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.dex}</p>
                            :
                            null
                    }
                    {
                        errors.dex ?
                            <p className='text-danger'>{errors.dex.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Luck: </label>
                    <input className='form-control'
                        type="number"
                        name="luck"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.luck} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.luck}</p>
                            :
                            null
                    }
                    {
                        errors.luck ?
                            <p className='text-danger'>{errors.luck.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Spd: </label>
                    <input className='form-control'
                        type="number"
                        name="spd"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.spd} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.spd}</p>
                            :
                            null
                    }
                    {
                        errors.spd ?
                            <p className='text-danger'>{errors.spd.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Bld: </label>
                    <input className='form-control'
                        type="number"
                        name="bld"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={characterInstance.bld} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.bld}</p>
                            :
                            null
                    }
                    {
                        errors.hp ?
                            <p className='text-danger'>{errors.bld.message}</p>
                            :
                            null
                    }
                </div>
                <button type='submit' disabled={!validateForm()}>Submit</button>
            </form >
        </>
    )
}

export default Form