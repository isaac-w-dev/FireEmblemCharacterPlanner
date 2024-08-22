import React, { useState } from 'react'

const [character, setCharacter] =  props;
const [classes, setClass] = props;
const UnitComparisonCard = () => {
  return (
    <div>
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
          {classes.map((c) => (
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
    </div>
  )
}

export default UnitComparisonCard