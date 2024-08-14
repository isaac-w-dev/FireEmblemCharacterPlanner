import React, { useState } from 'react';
import { createCharacter, updateOneCharacter } from '../services/CharacterService.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import characterData from '../FireEmblemData/CharacterData/Characters.js';
import classInfo from '../FireEmblemData/ClassData/Classes.js';
import { changeHandler } from '../functions/FormFunctions.jsx';
const Form = (props) => {
    let { page } = props;
    const { characterInstance } = props;
    const { setCharacterInstance } = props;
    const navigate = useNavigate();
    const { id } = useParams();
    const unitData = characterData;
    const unitClassData = classInfo;
    const [errors, setErrors] = useState({});
    const { formErrors } = props;
    const { setFormErrors } = props;

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
    const validateForm = () => {
        console.log(Object.values(formErrors))
        return Object.values(formErrors).every(value => value === '')
    }
    return (
        <>
            <form className='w-50 mx-auto text-white'
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
                <div>
                    <label className='form-label'>Class:  </label>
                    {<select
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
                    </select>}
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
                    <label className='form-label'>Gender: {characterInstance.isMale ? "Male" : "Female"}</label>
                    <input
                        type="checkbox"
                        name="isMale"
                        onChange={(e) => setCharacterInstance((characterInstance) => ({
                            ...characterInstance, [e.target.name]: !e.target.checked
                        }
                        ))}
                        value={characterInstance.isMale} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.isMale}</p>
                            :
                            null
                    }
                    {
                        errors.isMale ?
                            <p className='text-danger'>{errors.isMale.message}</p>
                            :
                            null
                    }
                </div>
                <button type='submit' disabled={!validateForm()}>Submit</button>
            </form>
        </>
    )
}

export default Form