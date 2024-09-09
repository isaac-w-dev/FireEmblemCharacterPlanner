import React, { useState } from 'react'

const [character, setCharacter] = props;
const [charClass, setCharClass] = props;
const UnitComparisonCard = () => {
  return (
    <div>
      <div id="non-table-info">
        <div id="char-and-class">
          <div id="char-selector"></div>
          <div id="class-selector"></div>
        </div>
        <div id="skills">
          <div id="p-skill">
            <div id="p-skill-name"></div>
            <div id="p-skill-description"></div>
          </div>
          <div id="class-skill">
            <div id="class-skill-name"></div>
            <div id="class-skill-description"></div>
          </div>
        </div>
        <div id="proficiencies"></div>
      </div>
      <div id="stat-tables">
        <table>
          <thead>
            <tr>
              <td></td>
              <td>HP:</td>
              <td>Str: </td>
              <td>Mag: </td>
              <td>Dex: </td>
              <td>Spd: </td>
              <td>Def: </td>
              <td>Res: </td>
              <td>Lck: </td>
              <td>Bld: </td>
            </tr>
          </thead>
          <tbody>
            {character.map((c) => (
              <tr key={index}>
                <td>Character Growths: </td>
                <td>{character.characterGrowthRate.hp}</td>
                <td>{character.characterGrowthRate.str}</td>
                <td>{character.characterGrowthRate.mag}</td>
                <td>{character.characterGrowthRate.dex}</td>
                <td>{character.characterGrowthRate.spd}</td>
                <td>{character.characterGrowthRate.def}</td>
                <td>{character.characterGrowthRate.res}</td>
                <td>{character.characterGrowthRate.lck}</td>
                <td>{character.characterGrowthRate.bld}</td>
              </tr>
            ))}
            {charClass.map((c) => (
              <tr>
                <td>Class Growths: </td>
                <td>{classes.classGrowth.hp}</td>
                <td>{classes.classGrowth.str}</td>
                <td>{classes.classGrowth.mag}</td>
                <td>{classes.classGrowth.dex}</td>
                <td>{classes.classGrowth.spd}</td>
                <td>{classes.classGrowth.def}</td>
                <td>{classes.classGrowth.res}</td>
                <td>{classes.classGrowth.lck}</td>
                <td>{classes.classGrowth.bld}</td>
              </tr>

            ))
            }
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>HP: </td>
              <td>Str: </td>
              <td>Mag: </td>
              <td>Dex: </td>
              <td>Spd: </td>
              <td>Def: </td>
              <td>Res: </td>
              <td>Lck: </td>
              <td>Bld: </td>
            </tr>
          </thead>
          <tbody>
            {
              character.map(c => (
                <tr>
                  <td>{0}</td>
                  <td>{c.characterStatCap.str}</td>
                  <td>{c.characterStatCap.mag}</td>
                  <td>{c.characterStatCap.dex}</td>
                  <td>{c.characterStatCap.spd}</td>
                  <td>{c.characterStatCap.def}</td>
                  <td>{c.characterStatCap.res}</td>
                  <td>{c.characterStatCap.lck}</td>
                  <td>{0}</td>
                  <td>{c.characterStatCap.total}</td>
                </tr>
              ))
            }
            {
              charClass.map(c => (
                <tr>
                  <td>{0}</td>
                  <td>{c.classCap.str}</td>
                  <td>{c.classCap.mag}</td>
                  <td>{c.classCap.dex}</td>
                  <td>{c.classCap.spd}</td>
                  <td>{c.classCap.def}</td>
                  <td>{c.classCap.res}</td>
                  <td>{c.classCap.lck}</td>
                  <td>{0}</td>
                  <td>{c.classCap.total}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UnitComparisonCard