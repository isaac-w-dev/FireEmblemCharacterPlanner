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
import * as types from './ClassTypes.js';
import * as weaknesses from './ClassWeaknesses.js';
class classData {
    constructor(name, growthRate, classCap, baseStats, type, weaknesses) {
        this.name = name;
        this.classGrowth = growthRate;
        this.classCap = classCap;
        this.baseStats = baseStats;
        this.type = type;
        this.weaknesses = weaknesses;
    }
}
export const dragonChild = new classData("Dragon Child", dragonChildGrowths, dragonChildCaps, dragonChildBaseStats, types.draconic, weaknesses.dragon);
export const divineDragon = new classData("Divine Dragon", divineDragonGrowths, divineDragonCaps, divineDragonBaseStats, types.draconic, weaknesses.dragon);
export const fellChildVeyle = new classData("Fell Child (Veyle)", fellChildVeyleGrowths, fellChildVeyleCaps, fellChildVeyleBaseStats, types.draconic, weaknesses.dragon);
export const nobleAlfred = new classData("Noble (Alfred)", nobleAlfredGrowths, avenirCaps, nobleAlfredBaseStats, types.rider, weaknesses.cavalry);
export const avenir = new classData("Avenir", avenirGrowths, avenirCaps, avenirBaseStats, types.rider, weaknesses.cavalry);
export const nobleCeline = new classData("Noble (Celine)", nobleCelineGrowths, vidameCaps, nobleCelineBaseStats, types.mystical, weaknesses.na);
export const vidame = new classData("Vidame", vidameGrowths, vidameCaps, vidameBaseStats, types.mystical, weaknesses.na);
export const lordDiamant = new classData("Lord (Diamant)", lordDiamantGrowths, successeurCaps, lordDiamantBaseStats, types.backup, weaknesses.na);
export const successeur = new classData("Successeur", successeurGrowths, successeurCaps, successeurBaseStats, types.backup, weaknesses.na);
export const lordAlcryst = new classData("Lord (Alcryst)", lordAlcrystGrowths, lordAlcrystCaps, lordAlcrystBaseStats, types.covert, weaknesses.na);
export const tireurDelite = new classData("Tireur D'elite", tireurDeliteGrowths, tireurDeliteCaps, tireurDeliteBaseStats, types.covert, weaknesses.na);
export const wingTamerIvy = new classData("Wing Tamer (Ivy)", wingTamerIvyGrowths, lindwurmCaps, wingTamerIvyBaseStats, types.flier, weaknesses.dragonFlier);
export const lindwurm = new classData("Lindwurm", lindwurmGrowths, lindwurmCaps, lindwurmBaseStats, types.flier, weaknesses.dragonFlier);
export const wingTamerHortensia = new classData("Wing Tamer (Hortensia)", wingTamerHortensiaGrowths, sleipnirRiderCaps, wingTamerHortensiaCaps, types.flier, weaknesses.flying);
export const sleipnirRider = new classData("Sleipnir Rider", sleipnirRiderGrowths, sleipnirRiderCaps, sleipnirRiderBaseStats, types.flier, weaknesses.flying);
export const sentinelTimerra = new classData("Sentinel (Timerra)", sentinelTimerraGrowths, picketCaps, sentinelTimerraBaseStats, types.backup, weaknesses.na);
export const picket = new classData("Picket", picketGrowths, picketCaps, picketBaseStats, types.backup, weaknesses.na);
export const sentinelFogado = new classData("Sentinel (Fogado)", sentinelFogadoGrowths, cupidoCaps, sentinelFogadoBaseStats, types.rider, weaknesses.cavalry);
export const cupido = new classData("Cupido", cupidoGrowths, cupidoCaps, cupidoBaseStats, types.rider, weaknesses.cavalry);
export const swordFighter = new classData("Sword Fighter", swordFighterGrowths, swordFighterCaps, swordFighterBaseStats, types.backup, weaknesses.na);
export const swordMaster = new classData("Sword Master", swordMasterGrowths, swordMasterCaps, swordMasterBaseStats, types.backup, weaknesses.na);
export const hero = new classData("Hero", heroGrowths, heroCaps, heroBaseStats, types.backup, weaknesses.na);
export const lanceFighter = new classData("Lance Fighter", lanceFighterGrowths, lanceFighterCaps, lanceFighterBaseStats, types.backup, weaknesses.na);
export const halberdier = new classData("Halberdier", halberdierGrowths, halberdierCaps, halberdierBaseStats, types.backup, weaknesses.na);
export const royalKnight = new classData("Royal Knight", royalKnightGrowths, royalKnightCaps, royalKnightBaseStats, types.rider, weaknesses.cavalry);
export const axeFighter = new classData("Axe Fighter", axeFighterGrowths, axeFighterCaps, axeFighterBaseStats, types.backup, weaknesses.na);
export const berserker = new classData("Berserker", berserkerGrowths, berserkerCaps, berserkerBaseStats, types.backup, weaknesses.na);
export const warrior = new classData("Warrior", warriorGrowths, warriorCaps, warriorBaseStats, types.backup, weaknesses.na);
export const archer = new classData("Archer", archerGrowths, archerCaps, archerBaseStats, types.covert, weaknesses.na);
export const sniper = new classData("Sniper", sniperGrowths, sniperCaps, sniperBaseStats, types.covert, weaknesses.na);
export const bowKnight = new classData("Bow Knight", bowKnightGrowths, bowKnightCaps, bowKnightBaseStats, types.rider, weaknesses.cavalry);
export const swordArmor = new classData("Sword Armor", armorGrowths, armorCaps, armorBaseStats,types.armored, weaknesses.armor);
export const lanceArmor = new classData("Lance Armor", armorGrowths, armorCaps, armorBaseStats,types.armored, weaknesses.armor);
export const axeArmor = new classData("Axe Armor", armorGrowths, armorCaps, armorBaseStats,types.armored, weaknesses.armor);
export const general = new classData("General", generalGrowths, generalCaps, generalBaseStats,types.armored, weaknesses.armor);
export const greatKnight = new classData("Great Knight", greatKnightGrowths, greatKnightCaps, greatKnightBaseStats,types.armored, weaknesses.armorCavalry);
export const swordCavalier = new classData("Sword Cavalier", cavalierGrowths, cavalierCaps, cavalierBaseStats, types.rider, weaknesses.cavalry);
export const lanceCavalier = new classData("Lance Cavalier", cavalierGrowths, cavalierCaps, cavalierBaseStats, types.rider, weaknesses.cavalry);
export const axeCavalier = new classData("Axe Cavalier", cavalierGrowths, cavalierCaps, cavalierBaseStats, types.rider, weaknesses.cavalry);
export const paladin = new classData("Paladin", paladinGrowths, paladinCaps, paladinBaseStats, types.rider, weaknesses.cavalry);
export const wolfKnight = new classData("Wolf Knight", wolfKnightGrowths, wolfKnightCaps, wolfKnightBaseStats, types.rider, weaknesses.cavalry);
export const mage = new classData("Mage", mageGrowths, mageCaps, mageBaseStats, types.mystical, weaknesses.na);
export const sage = new classData("Sage", sageGrowths, sageCaps, sageBaseStats, types.mystical, weaknesses.na);
export const mageKnight = new classData("Mage Knight", mageKnightGrowths, mageKnightCaps, mageKnightBaseStats, types.rider, weaknesses.cavalry);
export const martialMonk = new classData("Martial Monk", martialMonkGrowths, martialMonkCaps, martialMonkBaseStats, types.qiAdept, weaknesses.na);
export const martialMaster = new classData("Martial Master", martialMasterGrowths, martialMasterCaps, martialMasterBaseStats, types.qiAdept, weaknesses.na);
export const highPriest = new classData("High Priest", highPriestGrowths, highPriestCaps, highPriestBaseStats, types.qiAdept, weaknesses.na);
export const swordFlier = new classData("Sword Flier", flierGrowths, flierCaps, flierBaseStats, types.flier, weaknesses.flying);
export const lanceFlier = new classData("Lance Flier", flierGrowths, flierCaps, flierBaseStats, types.flier, weaknesses.flying);
export const axeFlier = new classData("Axe Flier", flierGrowths, flierCaps, flierBaseStats, types.flier, weaknesses.flying);
export const griffinKnight = new classData("Griffin Knight", griffinKnightGrowths, griffinKnightCaps, griffinKnightBaseStats, types.flier, weaknesses.flying);
export const wyvernKnight = new classData("Wyvern Knight", wyvernKnightGrowths, wyvernKnightCaps, wyvernKnightBaseStats, types.flier, weaknesses.dragonFlier);
export const thief = new classData("Thief", thiefGrowths, thiefCaps, thiefBaseStats, types.covert, weaknesses.na);
export const dancer = new classData("Dancer", dancerGrowths, dancerCaps, dancerBaseStats, types.qiAdept, weaknesses.na);
export const fellChildNel = new classData("Fell Child (Nel)", fellChildNelGrowths, fellChildNelCaps, fellChildNelBaseStats, types.draconic, weaknesses.dragon);
export const fellChildRafal = new classData("Fell Child (Rafal)", fellChildRafalGrowths, fellChildRafalCaps, fellChildRafalBaseStats, types.draconic, weaknesses.dragon);
export const melusine = new classData("Melusine", melusineGrowths, melusineCaps, melusineBaseStats, types.flier, weaknesses.dragonFlier);
export const enchanter = new classData("Enchanter", enchanterGrowths, enchanterCaps, enchanterBaseStats, types.qiAdept, weaknesses.na);
export const mageCannoneer = new classData("Mage Cannoneer", mageCannoneerGrowths, mageCannoneerCaps, mageCannoneerBaseStats,types.armored, weaknesses.armor);
const classInfo = [dragonChild, divineDragon, fellChildVeyle, nobleAlfred, avenir, nobleCeline, vidame, lordDiamant, successeur, lordAlcryst, tireurDelite, wingTamerIvy, lindwurm, wingTamerHortensia, sleipnirRider, sentinelTimerra, picket, sentinelFogado, cupido, swordFighter, swordMaster, hero, lanceFighter, halberdier, royalKnight, axeFighter, berserker, warrior, archer, sniper, bowKnight, swordArmor, lanceArmor, axeArmor, general, greatKnight, swordCavalier, lanceCavalier, axeCavalier, paladin, wolfKnight, mage, sage, mageKnight, martialMonk, martialMaster, highPriest, swordFlier, lanceFlier, axeFlier, griffinKnight, wyvernKnight, thief, dancer, fellChildNel, fellChildRafal, melusine, enchanter, mageCannoneer]
export default classInfo