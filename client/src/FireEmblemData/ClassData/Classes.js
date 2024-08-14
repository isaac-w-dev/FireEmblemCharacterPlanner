import { archerBaseStats, armorBaseStats, avenirBaseStats, axeFighterBaseStats, berserkerBaseStats, bowKnightBaseStats, cavalierBaseStats, cupidoBaseStats, dancerBaseStats, divineDragonBaseStats, dragonChildBaseStats, enchanterBaseStats, fellChildNelBaseStats, fellChildRafalBaseStats, fellChildVeyleBaseStats, flierBaseStats, generalBaseStats, greatKnightBaseStats, griffinKnightBaseStats, halberdierBaseStats, heroBaseStats, highPriestBaseStats, lanceFighterBaseStats, lindwurmBaseStats, lordAlcrystBaseStats, lordDiamantBaseStats, mageBaseStats, mageCannoneerBaseStats, mageKnightBaseStats, martialMasterBaseStats, martialMonkBaseStats, melusineBaseStats, nobleAlfredBaseStats, nobleCelineBaseStats, paladinBaseStats, picketBaseStats, royalKnightBaseStats, sageBaseStats, sentinelFogadoBaseStats, sentinelTimerraBaseStats, sleipnirRiderBaseStats, sniperBaseStats, successeurBaseStats, swordFighterBaseStats, swordMasterBaseStats, thiefBaseStats, tireurDeliteBaseStats, vidameBaseStats, warriorBaseStats, wingTamerIvyBaseStats, wolfKnightBaseStats, wyvernKnightBaseStats } from './ClassBaseStats.js';
import { archerCaps, avenirCaps, armorCaps, axeFighterCaps, berserkerCaps, bowKnightCaps, cupidoCaps, divineDragonCaps, dragonChildCaps, fellChildVeyleCaps, generalCaps, greatKnightCaps, halberdierCaps, heroCaps, lanceFighterCaps, lindwurmCaps, lordAlcrystCaps, picketCaps, royalKnightCaps, sleipnirRiderCaps, sniperCaps, successeurCaps, cavalierCaps, swordFighterCaps, tireurDeliteCaps, vidameCaps, warriorCaps, swordMasterCaps, paladinCaps, wolfKnightCaps, mageCaps, sageCaps, mageKnightCaps, martialMonkCaps, martialMasterCaps, highPriestCaps, flierCaps, griffinKnightCaps, wyvernKnightCaps, thiefCaps, dancerCaps, fellChildNelCaps, fellChildRafalCaps, melusineCaps, enchanterCaps, mageCannoneerCaps, wingTamerHortensiaCaps } from './ClassCaps.js';
import {
    dragonChildGrowths, divineDragonGrowths, fellChildVeyleGrowths, nobleAlfredGrowths, avenirGrowths,
    nobleCelineGrowths, vidameGrowths, lordDiamantGrowths, successeurGrowths, lordAlcrystGrowths, tireurDeliteGrowths,
    wingTamerIvyGrowths, lindwurmGrowths, wingTamerHortensiaGrowths, sleipnirRiderGrowths, sentinelFogadoGrowths,
    sentinelTimerraGrowths, picketGrowths, cupidoGrowths, swordFighterGrowths, swordMasterGrowths, heroGrowths,
    lanceFighterGrowths, halberdierGrowths, royalKnightGrowths, axeFighterGrowths, berserkerGrowths, warriorGrowths,
    archerGrowths, sniperGrowths, bowKnightGrowths, armorGrowths, generalGrowths,
    greatKnightGrowths, cavalierGrowths, paladinGrowths, wolfKnightGrowths,
    mageGrowths, sageGrowths, mageKnightGrowths, martialMonkGrowths, martialMasterGrowths, highPriestGrowths, flierGrowths, griffinKnightGrowths, wyvernKnightGrowths, thiefGrowths, dancerGrowths, fellChildNelGrowths,
    fellChildRafalGrowths, melusineGrowths, enchanterGrowths, mageCannoneerGrowths
} from './ClassGrowthRates.js';
class classData {
    constructor(name, growthRate, classCap, baseStats) {
        this.name = name;
        this.classGrowth = growthRate;
        this.classCap = classCap;
        this.baseStats = baseStats;
    }
}
export const dragonChild = new classData("Dragon Child", dragonChildGrowths, dragonChildCaps, dragonChildBaseStats);
export const divineDragon = new classData("Divine Dragon", divineDragonGrowths, divineDragonCaps, divineDragonBaseStats);
export const fellChildVeyle = new classData("Fell Child (Veyle)", fellChildVeyleGrowths, fellChildVeyleCaps, fellChildVeyleBaseStats);
export const nobleAlfred = new classData("Noble (Alfred)", nobleAlfredGrowths, avenirCaps, nobleAlfredBaseStats);
export const avenir = new classData("Avenir", avenirGrowths, avenirCaps, avenirBaseStats);
export const nobleCeline = new classData("Noble (Celine)", nobleCelineGrowths, vidameCaps, nobleCelineBaseStats);
export const vidame = new classData("Vidame", vidameGrowths, vidameCaps, vidameBaseStats);
export const lordDiamant = new classData("Lord (Diamant)", lordDiamantGrowths, successeurCaps, lordDiamantBaseStats);
export const successeur = new classData("Successeur", successeurGrowths, successeurCaps, successeurBaseStats);
export const lordAlcryst = new classData("Lord (Alcryst)", lordAlcrystGrowths, lordAlcrystCaps, lordAlcrystBaseStats);
export const tireurDelite = new classData("Tireur D'elite", tireurDeliteGrowths, tireurDeliteCaps, tireurDeliteBaseStats);
export const wingTamerIvy = new classData("Wing Tamer (Ivy)", wingTamerIvyGrowths, lindwurmCaps, wingTamerIvyBaseStats);
export const lindwurm = new classData("Lindwurm", lindwurmGrowths, lindwurmCaps, lindwurmBaseStats);
export const wingTamerHortensia = new classData("Wing Tamer (Hortensia)", wingTamerHortensiaGrowths, sleipnirRiderCaps, wingTamerHortensiaCaps);
export const sleipnirRider = new classData("Sleipnir Rider", sleipnirRiderGrowths, sleipnirRiderCaps, sleipnirRiderBaseStats);
export const sentinelTimerra = new classData("Sentinel (Timerra)", sentinelTimerraGrowths, picketCaps, sentinelTimerraBaseStats);
export const picket = new classData("Picket", picketGrowths, picketCaps, picketBaseStats);
export const sentinelFogado = new classData("Sentinel (Fogado)", sentinelFogadoGrowths, cupidoCaps, sentinelFogadoBaseStats);
export const cupido = new classData("Cupido", cupidoGrowths, cupidoCaps, cupidoBaseStats);
export const swordFighter = new classData("Sword Fighter", swordFighterGrowths, swordFighterCaps, swordFighterBaseStats);
export const swordMaster = new classData("Sword Master", swordMasterGrowths, swordMasterCaps, swordMasterBaseStats);
export const hero = new classData("Hero", heroGrowths, heroCaps, heroBaseStats);
export const lanceFighter = new classData("Lance Fighter", lanceFighterGrowths, lanceFighterCaps, lanceFighterBaseStats);
export const halberdier = new classData("Halberdier", halberdierGrowths, halberdierCaps, halberdierBaseStats);
export const royalKnight = new classData("Royal Knight", royalKnightGrowths, royalKnightCaps, royalKnightBaseStats);
export const axeFighter = new classData("Axe Fighter", axeFighterGrowths, axeFighterCaps, axeFighterBaseStats);
export const berserker = new classData("Berserker", berserkerGrowths, berserkerCaps, berserkerBaseStats);
export const warrior = new classData("Warrior", warriorGrowths, warriorCaps, warriorBaseStats);
export const archer = new classData("Archer", archerGrowths, archerCaps, archerBaseStats);
export const sniper = new classData("Sniper", sniperGrowths, sniperCaps, sniperBaseStats);
export const bowKnight = new classData("Bow Knight", bowKnightGrowths, bowKnightCaps, bowKnightBaseStats);
export const swordArmor = new classData("Sword Armor", armorGrowths, armorCaps, armorBaseStats);
export const lanceArmor = new classData("Lance Armor", armorGrowths, armorCaps, armorBaseStats);
export const axeArmor = new classData("Axe Armor", armorGrowths, armorCaps, armorBaseStats);
export const general = new classData("General", generalGrowths, generalCaps, generalBaseStats);
export const greatKnight = new classData("Great Knight", greatKnightGrowths, greatKnightCaps, greatKnightBaseStats);
export const swordCavalier = new classData("Sword Cavalier", cavalierGrowths, cavalierCaps, cavalierBaseStats);
export const lanceCavalier = new classData("Lance Cavalier", cavalierGrowths, cavalierCaps, cavalierBaseStats);
export const axeCavalier = new classData("Axe Cavalier", cavalierGrowths, cavalierCaps, cavalierBaseStats);
export const paladin = new classData("Paladin", paladinGrowths, paladinCaps, paladinBaseStats);
export const wolfKnight = new classData("Wolf Knight", wolfKnightGrowths, wolfKnightCaps, wolfKnightBaseStats);
export const mage = new classData("Mage", mageGrowths, mageCaps, mageBaseStats);
export const sage = new classData("Sage", sageGrowths, sageCaps, sageBaseStats);
export const mageKnight = new classData("Mage Knight", mageKnightGrowths, mageKnightCaps, mageKnightBaseStats);
export const martialMonk = new classData("Martial Monk", martialMonkGrowths, martialMonkCaps, martialMonkBaseStats);
export const martialMaster = new classData("Martial Master", martialMasterGrowths, martialMasterCaps, martialMasterBaseStats);
export const highPriest = new classData("High Priest", highPriestGrowths, highPriestCaps, highPriestBaseStats);
export const swordFlier = new classData("Sword Flier", flierGrowths, flierCaps, flierBaseStats);
export const lanceFlier = new classData("Lance Flier", flierGrowths, flierCaps, flierBaseStats);
export const axeFlier = new classData("Axe Flier", flierGrowths, flierCaps, flierBaseStats);
export const griffinKnight = new classData("Griffin Knight", griffinKnightGrowths, griffinKnightCaps, griffinKnightBaseStats);
export const wyvernKnight = new classData("Wyvern Knight", wyvernKnightGrowths, wyvernKnightCaps, wyvernKnightBaseStats);
export const thief = new classData("Thief", thiefGrowths, thiefCaps, thiefBaseStats);
export const dancer = new classData("Dancer", dancerGrowths, dancerCaps, dancerBaseStats);
export const fellChildNel = new classData("Fell Child (Nel)", fellChildNelGrowths, fellChildNelCaps, fellChildNelBaseStats);
export const fellChildRafal = new classData("Fell Child (Rafal)", fellChildRafalGrowths, fellChildRafalCaps, fellChildRafalBaseStats);
export const melusine = new classData("Melusine", melusineGrowths, melusineCaps, melusineBaseStats);
export const enchanter = new classData("Enchanter", enchanterGrowths, enchanterCaps, enchanterBaseStats);
export const mageCannoneer = new classData("Mage Cannoneer", mageCannoneerGrowths, mageCannoneerCaps, mageCannoneerBaseStats);
const classInfo = [dragonChild, divineDragon, fellChildVeyle, nobleAlfred, avenir, nobleCeline, vidame, lordDiamant, successeur, lordAlcryst, tireurDelite, wingTamerIvy, lindwurm, wingTamerHortensia, sleipnirRider, sentinelTimerra, picket, sentinelFogado, cupido, swordFighter, swordMaster, hero, lanceFighter, halberdier, royalKnight, axeFighter, berserker, warrior, archer, sniper, bowKnight, swordArmor, lanceArmor, axeArmor, general, greatKnight, swordCavalier, lanceCavalier, axeCavalier, paladin, wolfKnight, mage, sage, mageKnight, martialMonk, martialMaster, highPriest, swordFlier, lanceFlier, axeFlier, griffinKnight, wyvernKnight, thief, dancer, fellChildNel, fellChildRafal, melusine, enchanter, mageCannoneer]
export default classInfo
// Armored Dragon, Cavalry, Flier, Maximum Stats, Corrupted, Mystical, Qi, Fell Dragon, Backup, Covert
// Proficiencies
// Fog of war vision,
//     type: {
//     dragon:,
//         covert:,
//     calvary:,
//         flier:,
//     mystical:,
//         backUp:,
//     armor:,
//         qiAdept:
// },
// proficiencies: {
//     sword:,
//         axe:,
//     lance:,
//         arts:,
//     knife:,
//         bow:,
//     spell:,
//         staff:,
//     dragonStone:,
//         cannon:
// }
// ,
//         weaknesses: {
//             dragon:,
//             fellDragon:,
//             calvary:,
//             flying:,
//             armored: