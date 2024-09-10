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
        class: "",
        level: "",
        internalLevel: "",
        hp: "",
        str: "",
        mag: "",
        dex: "",
        spd: "",
        def: "",
        res: "",
        luck: "",
        bld: ""
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
        level: "",
        internalLevel: "",
        hp: "",
        str: "",
        mag: "",
        dex: "",
        spd: "",
        def: "",
        res: "",
        luck: "",
        bld: ""
    })
    return (
        <>
            <Nav title={'Edit Character'} />
            <Form page={'edit'} characterInstance={characterInstance} setCharacterInstance={setCharacterInstance} formErrors={formErrors} setFormErrors={setFormErrors} />
        </>
    )
}

export default Edit