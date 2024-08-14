import React from 'react'
import Form from '../components/Form'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCharacter } from '../services/CharacterService'

const Edit = () => {
    const { id } = useParams();
    const [characterInstance, setCharacterInstance] = useState({
        name: "",
        level: "",
        internalLevel: "",
        class: "",
        hp: "",
        str: "",
        mag: "",
        dex: "",
        spd: "",
        def: "",
        res: "",
        luck: ""
    });
    useEffect(() => {
        getOneCharacter(id)
            .then((res) => {
                setCharacterInstance(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const [formErrors, setFormErrors] = useState({
        name: "",
        class: "",
        hp: "",
        str: "",
        def: "",
        mag: "",
        res: "",
        dex: "",
        luck: "",
        spd: "",
        internalLevel: "",
        level: ""
    })
    return (
        <>
            <Nav title={'Edit Character'} />
            <Form page={'edit'} characterInstance={characterInstance} setCharacterInstance={setCharacterInstance} formErrors={formErrors} setFormErrors={setFormErrors} />
        </>
    )
}

export default Edit