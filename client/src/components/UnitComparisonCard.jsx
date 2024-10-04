import React, { useState, useEffect } from 'react';
import classInfo from '../FireEmblemData/ClassData/Classes.js';
import CharacterData from '../FireEmblemData/CharacterData/Characters.js';
const UnitComparisonCard = (props) => {
  const { character } = props;
  const { setCharacter } = props;
  const handleChange = props;
  const unitData = CharacterData;
  const classData = classInfo;
  const [characterLoaded, setCharacterLoaded] = useState(false);
  const [classLoaded, setClassLoaded] = useState(false);
  const [hardCodedCharacter, setHardCodedCharacter] = useState({});
  const [hardCodedClass, setHardCodedClass] = useState({});
  const unit = CharacterData.filter(c => c.name == character.name);
  const unitClass = classData.filter(c => c.name == character.class);
  const decodeProficiencies = (c) => {
    switch (c) {
      case false: return "No";
      case 1: return "C";
      case 2: return "B";
      case 3: return "A";
      case 4: return "S";
    }
  }
  useEffect(() => {
    setCharacterLoaded(false);
    if (unit.length == 1) {
      setHardCodedCharacter(unit[0]);
      setCharacterLoaded(true);
    }
  }, [unit[0]])
  useEffect(() => { 
    setClassLoaded(false);
    if (unitClass.length == 1) {
      setHardCodedClass(unitClass[0]);
      setClassLoaded(true);
    }
  }, [[unitClass[0]]])
  return (
    <div className='flex flex-row'>
      <div id="non-table-info" className='flex flex-col'>
        <div id="char-and-class" className='flex flex-row justify-around'>
          <div id="char-selector"><p>{character.name}</p></div>
          {/* <select
            name="name"
            id="unitName"
            value={character.name}>
            <option value=''>{character.name}</option>
            {
              classData.map((characterData, index) => (
                <option key={index} value={characterData.name}>
                  {characterData.name}
                </option>
              ))
            }
          </select> */}
          <div id="class-selector"><p>{character.class}</p></div>
        </div>
        <div id="skills" className='flex flex-row'>
          <div id="p-skill" className='flex flex-col'>
            <div id="p-skill-name">{characterLoaded ? <p>{hardCodedCharacter.personalSkill.name}</p> : <p></p>}</div>
            <div id="p-skill-description">{characterLoaded ? <p className='flex'>{hardCodedCharacter.personalSkill.description}</p> : <p></p>}</div>
          </div>
          <div id="class-skill" className='flex flex-col'>
            <div id="class-skill-name">{classLoaded ? <p>{hardCodedClass.skill.name}</p> : <p></p>}</div>
            <div id="class-skill-description">{classLoaded ? <p className='flex'>{hardCodedClass.skill.description}</p> : <p></p>}</div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td>Sword:</td>
              <td>Lance:</td>
              <td>Axe:</td>
              <td>Knife:</td>
              <td>Arts:</td>
              <td>Tome:</td>
              <td>Staff:</td>
              <td>Cannon:</td>
              <td>Dragon Stone:</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.sword)}</td> : <td></td>}
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.lance)}</td> : <td></td>}
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.axe)}</td> : <td></td>}
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.knife)}</td> : <td></td>}
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.arts)}</td> : <td></td>}
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.tome)}</td> : <td></td>}
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.staff)}</td> : <td></td>}
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.cannonball)}</td> : <td></td>}
              {classLoaded ? <td>{decodeProficiencies(hardCodedClass.proficiencies.dragonStone)}</td> : <td></td>}
            </tr>
          </tbody>
        </table>
      </div>
      <div id="stat-tables" className='flex flex-row'>
        <table>
          <thead>
            <tr>
              <td>Growths: </td>
              <td>HP:</td>
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
            {characterLoaded ?
              <tr>
                <td>{character.name} Growths: </td>
                <td>{hardCodedCharacter.characterGrowthRate.hp}</td>
                <td>{hardCodedCharacter.characterGrowthRate.str}</td>
                <td>{hardCodedCharacter.characterGrowthRate.mag}</td>
                <td>{hardCodedCharacter.characterGrowthRate.dex}</td>
                <td>{hardCodedCharacter.characterGrowthRate.spd}</td>
                <td>{hardCodedCharacter.characterGrowthRate.def}</td>
                <td>{hardCodedCharacter.characterGrowthRate.res}</td>
                <td>{hardCodedCharacter.characterGrowthRate.lck}</td>
                <td>{hardCodedCharacter.characterGrowthRate.bld}</td>
                <td>{hardCodedCharacter.characterGrowthRate.total}</td>
              </tr>
              : <tr></tr>}
            {
              classLoaded ?
                <tr>
                  <td>{character.class} Growths: </td>
                  <td>{hardCodedClass.classGrowth.hp}</td>
                  <td>{hardCodedClass.classGrowth.str}</td>
                  <td>{hardCodedClass.classGrowth.mag}</td>
                  <td>{hardCodedClass.classGrowth.dex}</td>
                  <td>{hardCodedClass.classGrowth.spd}</td>
                  <td>{hardCodedClass.classGrowth.def}</td>
                  <td>{hardCodedClass.classGrowth.res}</td>
                  <td>{hardCodedClass.classGrowth.lck}</td>
                  <td>{hardCodedClass.classGrowth.bld}</td>
                  <td>{hardCodedClass.classGrowth.total}</td>
                </tr> : <tr></tr>
            }
            {
              classLoaded && characterLoaded ?
                <tr>
                  <td>Combined Growths: </td>
                  <td>{hardCodedCharacter.characterGrowthRate.hp + hardCodedClass.classGrowth.hp}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.str + hardCodedClass.classGrowth.str}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.mag + hardCodedClass.classGrowth.mag}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.dex + hardCodedClass.classGrowth.dex}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.spd + hardCodedClass.classGrowth.spd}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.def + hardCodedClass.classGrowth.def}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.res + hardCodedClass.classGrowth.res}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.lck + hardCodedClass.classGrowth.lck}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.bld + hardCodedClass.classGrowth.bld}</td>
                  <td>{hardCodedCharacter.characterGrowthRate.total + hardCodedClass.classGrowth.total}</td>
                </tr> : <tr></tr>
            }
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>Caps: </td>
              <td>Str: </td>
              <td>Mag: </td>
              <td>Dex: </td>
              <td>Spd: </td>
              <td>Def: </td>
              <td>Res: </td>
              <td>Lck: </td>
              <td>Total: </td>
            </tr>
          </thead>
          <tbody>
            {
              characterLoaded ?
                <tr>
                  <td>{character.name} Caps: </td>
                  <td>{hardCodedCharacter.characterStatCap.str}</td>
                  <td>{hardCodedCharacter.characterStatCap.mag}</td>
                  <td>{hardCodedCharacter.characterStatCap.dex}</td>
                  <td>{hardCodedCharacter.characterStatCap.spd}</td>
                  <td>{hardCodedCharacter.characterStatCap.def}</td>
                  <td>{hardCodedCharacter.characterStatCap.res}</td>
                  <td>{hardCodedCharacter.characterStatCap.lck}</td>
                  <td>{hardCodedCharacter.characterStatCap.total}</td>
                </tr> : <tr></tr>
            }
            {
              classLoaded ?
                <tr>
                  <td>{character.class} Caps: </td>
                  <td>{hardCodedClass.classCap.str}</td>
                  <td>{hardCodedClass.classCap.mag}</td>
                  <td>{hardCodedClass.classCap.dex}</td>
                  <td>{hardCodedClass.classCap.spd}</td>
                  <td>{hardCodedClass.classCap.def}</td>
                  <td>{hardCodedClass.classCap.res}</td>
                  <td>{hardCodedClass.classCap.lck}</td>
                  <td>{hardCodedClass.classCap.total}</td>
                </tr> : <tr></tr>
            }
            {
              classLoaded && characterLoaded ?
                <tr>
                  <td>Combined Caps: </td>
                  <td>{hardCodedCharacter.characterStatCap.str + hardCodedClass.classCap.str}</td>
                  <td>{hardCodedCharacter.characterStatCap.str + hardCodedClass.classCap.mag}</td>
                  <td>{hardCodedCharacter.characterStatCap.str + hardCodedClass.classCap.dex}</td>
                  <td>{hardCodedCharacter.characterStatCap.str + hardCodedClass.classCap.spd}</td>
                  <td>{hardCodedCharacter.characterStatCap.str + hardCodedClass.classCap.def}</td>
                  <td>{hardCodedCharacter.characterStatCap.str + hardCodedClass.classCap.res}</td>
                  <td>{hardCodedCharacter.characterStatCap.str + hardCodedClass.classCap.lck}</td>
                  <td>{hardCodedCharacter.characterStatCap.total + hardCodedClass.classCap.total}</td>
                </tr> : <tr></tr>
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default UnitComparisonCard