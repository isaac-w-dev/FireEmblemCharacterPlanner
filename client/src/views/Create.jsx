import React from 'react'
import Nav from '../components/Nav'
import Form from '../components/Form'
import { useState } from 'react'
const Create = () => {
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
        isMale: true
    });
    const [formErrors, setFormErrors] = useState({
        name: "Character name is required",
        class: "Class is required",
        hp: "HP stat is required",
        str: "Str stat is required",
        def: "Def stat is required",
        mag: "Mag stat is required",
        res: "Res stat is required",
        dex: "Dex stat is required",
        luck: "Luck stat is required",
        spd: "Speed stat is required",
        internalLevel: "Internal Level is required",
        level: "Level is required"
    });

    return (
        <>
            <Nav title='Create New' />
            <Form page={"create"} characterInstance={characterInstance} setCharacterInstance={setCharacterInstance} formErrors={formErrors} setFormErrors={setFormErrors} />
        </>
    )
}

export default Create