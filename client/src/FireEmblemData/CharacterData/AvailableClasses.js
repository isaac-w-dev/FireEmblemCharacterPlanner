import { archer, avenir, axeArmor, cavalierAxe, cavalierLance, cavalierSword, axeFighter, axeFlier, berserker, bowKnightSword, bowKnightAxe, bowKnightLance, cupido, dancer, divineDragon, dragonChild, enchanter, fellChildNel, fellChildRafal, fellChildVeyle, generalAxe, generalLance, generalSword, greatKnightLanceAxe, greatKnightSwordAxe, greatKnightSwordLance, griffinKnightLance, griffinKnightAxe, griffinKnightSword, halberdier, heroAxe, heroLance, highPriest, lanceArmor, lanceFighter, lanceFlier, lindwurm, lordAlcryst, lordDiamant, mage, mageCannoneer, mageKnightSword, mageKnightLance, mageKnightAxe, martialMaster, martialMonk, melusine, nobleAlfred, nobleCeline, paladinSword, paladinLance, paladinAxe, picket, royalKnightSword, royalKnightAxe, royalKnightLance, sage, sentinelFogado, sentinelTimerra, sleipnirRider, sniper, successeur, swordArmor, swordFighter, swordFlier, swordMaster, thief, tireurDelite, vidame, warrior, wingTamerHortensia, wingTamerIvy, wolfKnightSword, wolfKnightLance, wolfKnightAxe, wyvernKnightLanceAxe, wyvernKnightSwordLance, wyvernKnightSwordAxe} from "../ClassData/Classes";

export const male = [swordFighter, lanceFighter, axeFighter, archer, lanceArmor, axeArmor, swordArmor, swordMaster, cavalierLance, cavalierAxe, cavalierSword, mage, martialMonk, thief, heroLance, heroAxe, halberdier, royalKnightSword, royalKnightAxe, royalKnightLance, berserker, warrior, sniper, bowKnightSword, bowKnightLance, bowKnightAxe, generalSword, generalLance, generalAxe, greatKnightSwordAxe, greatKnightSwordLance, greatKnightLanceAxe, paladinSword, paladinAxe, paladinLance
    , wolfKnightSword, wolfKnightLance, wolfKnightAxe, sage, mageKnightSword, mageKnightLance, mageKnightAxe, martialMaster, highPriest, griffinKnightSword, griffinKnightLance, griffinKnightAxe, wyvernKnightLanceAxe, wyvernKnightSwordLance, wyvernKnightSwordAxe, enchanter, mageCannoneer];
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