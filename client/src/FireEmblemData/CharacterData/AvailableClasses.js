import { archer, avenir, axeArmor, axeCavalier, axeFighter, axeFlier, berserker, bowKnight, cupido, dancer, divineDragon, dragonChild, enchanter, fellChildNel, fellChildRafal, fellChildVeyle, general, greatKnight, griffinKnight, halberdier, hero, highPriest, lanceArmor, lanceCavalier, lanceFighter, lanceFlier, lindwurm, lordAlcryst, lordDiamant, mage, mageCannoneer, mageKnight, martialMaster, martialMonk, melusine, nobleAlfred, nobleCeline, paladin, picket, royalKnight, sage, sentinelFogado, sentinelTimerra, sleipnirRider, sniper, successeur, swordArmor, swordCavalier, swordFighter, swordFlier, swordMaster, thief, tireurDelite, vidame, warrior, wingTamerHortensia, wingTamerIvy, wolfKnight, wyvernKnight } from "../ClassData/Classes";

export const male = [swordFighter, lanceFighter, axeFighter, archer, lanceArmor, axeArmor, swordArmor, swordMaster, lanceCavalier, axeCavalier, swordCavalier, mage, martialMonk, thief, hero, halberdier, royalKnight, berserker, warrior, sniper, bowKnight, general, greatKnight, paladin
    , wolfKnight, sage, mageKnight, martialMaster, highPriest, griffinKnight, wyvernKnight, enchanter, mageCannoneer];
export const female = [swordFlier, lanceFlier, axeFlier, ...male];
export const veyle = [fellChildVeyle, ...female];
export const nel = [fellChildNel, ...female];
export const rafal = [fellChildRafal, ...male];
export const alearM = [dragonChild, divineDragon, ...male];
export const alearF = [dragonChild, divineDragon, ...female];
export const alfred = [nobleAlfred, avenir, ...male];
export const celine = [nobleCeline, vidame, ...female];
export const alcryst = [lordAlcryst, tireurDelite, ...male];
export const diamant = [lordDiamant, successeur, ...male];
export const hortensia = [wingTamerHortensia, sleipnirRider, ...female];
export const ivy = [wingTamerIvy, lindwurm, ...female];
export const timerra = [sentinelTimerra, picket, ...female];
export const fogado = [sentinelFogado, cupido, ...male];
export const zelestia = [melusine, ...female];
export const seadall = [dancer, ...male];