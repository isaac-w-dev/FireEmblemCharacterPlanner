import { archer, avenir, axeArmor, axeCavalier, axeFighter, axeFlier, berserker, bowKnight, cupido, dancer, divineDragon, dragonChild, enchanter, fellChildNel, fellChildRafal, fellChildVeyle, general, greatKnight, griffinKnight, halberdier, hero, highPriest, lanceArmor, lanceCavalier, lanceFighter, lanceFlier, lindwurm, lordAlcryst, lordDiamant, mage, mageCannoneer, mageKnight, martialMaster, martialMonk, melusine, nobleAlfred, nobleCeline, paladin, picket, royalKnight, sage, sentinelFogado, sentinelTimerra, sleipnirRider, sniper, successeur, swordArmor, swordCavalier, swordFighter, swordFlier, swordMaster, thief, tireurDelite, vidame, warrior, wingTamerHortensia, wingTamerIvy, wolfKnight, wyvernKnight } from "../ClassData/Classes";

export const male = [swordFighter, swordMaster, hero, lanceFighter, halberdier, royalKnight, axeFighter, berserker, warrior, archer, sniper, bowKnight, swordArmor, lanceArmor, axeArmor, general, greatKnight, swordCavalier, lanceCavalier, axeCavalier, paladin
    , wolfKnight, mage, sage, mageKnight, martialMonk, martialMaster, highPriest, griffinKnight, wyvernKnight, thief, enchanter, mageCannoneer];
export const female = [...male, swordFlier, lanceFlier, axeFlier];
export const veyle = [...female, fellChildVeyle];
export const nel = [...female, fellChildNel];
export const rafal = [...male, fellChildRafal];
export const alearM = [...male, dragonChild, divineDragon];
export const alearF = [...female, dragonChild, divineDragon];
export const alfred = [...male, nobleAlfred, avenir];
export const celine = [...female, nobleCeline, vidame];
export const alcryst = [...male, lordAlcryst, tireurDelite];
export const diamant = [...male, lordDiamant, successeur];
export const hortensia = [...female, wingTamerHortensia, sleipnirRider];
export const ivy = [...female, wingTamerIvy, lindwurm];
export const timerra = [...female, sentinelTimerra, picket];
export const fogado = [...male, sentinelFogado, cupido];
export const zelestia = [...female, melusine];
export const seadall = [...male, dancer];