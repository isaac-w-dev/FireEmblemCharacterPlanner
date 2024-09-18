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
import * as proficiencies from './ClassProficiencies.js';
import * as skills from './ClassSkills.js';
class classData {
    constructor(name, classGrowth, classCap, baseStats, type, weaknesses, proficiencies, skill) {
        this.name = name;
        this.classGrowth = classGrowth;
        this.classCap = classCap;
        this.baseStats = baseStats;
        this.type = type;
        this.weaknesses = weaknesses;
        this.proficiencies = proficiencies;
        this.skill = skill;
    }
}
export const dragonChild = new classData("Dragon Child", dragonChildGrowths, dragonChildCaps, dragonChildBaseStats, types.draconic, weaknesses.dragon, proficiencies.swordUser, false);
export const divineDragon = new classData("Divine Dragon", divineDragonGrowths, divineDragonCaps, divineDragonBaseStats, types.draconic, weaknesses.dragon, proficiencies.divineDragon, skills.divineSpirit);
export const fellChildVeyle = new classData("Fell Child (Veyle)", fellChildVeyleGrowths, fellChildVeyleCaps, fellChildVeyleBaseStats, types.draconic, weaknesses.dragon, proficiencies.fellChildVeyle, skills.fellSpirit);
export const nobleAlfred = new classData("Noble (Alfred)", nobleAlfredGrowths, avenirCaps, nobleAlfredBaseStats, types.rider, weaknesses.cavalry, proficiencies.lanceUser, false);
export const avenir = new classData("Avenir", avenirGrowths, avenirCaps, avenirBaseStats, types.rider, weaknesses.cavalry, proficiencies.avenir, skills.goldenLotus);
export const nobleCeline = new classData("Noble (Celine)", nobleCelineGrowths, vidameCaps, nobleCelineBaseStats, types.mystical, weaknesses.na, proficiencies.nobleCeline, false);
export const vidame = new classData("Vidame", vidameGrowths, vidameCaps, vidameBaseStats, types.mystical, weaknesses.na, proficiencies.vidame, skills.ignis);
export const lordDiamant = new classData("Lord (Diamant)", lordDiamantGrowths, successeurCaps, lordDiamantBaseStats, types.backup, weaknesses.na, proficiencies.swordUser, false);
export const successeur = new classData("Successeur", successeurGrowths, successeurCaps, successeurBaseStats, types.backup, weaknesses.na, proficiencies.successeur, skills.sol);
export const lordAlcryst = new classData("Lord (Alcryst)", lordAlcrystGrowths, lordAlcrystCaps, lordAlcrystBaseStats, types.covert, weaknesses.na, proficiencies.bowUser, false);
export const tireurDelite = new classData("Tireur D'elite", tireurDeliteGrowths, tireurDeliteCaps, tireurDeliteBaseStats, types.covert, weaknesses.na, proficiencies.bowMaster, skills.luna);
export const wingTamerIvy = new classData("Wing Tamer (Ivy)", wingTamerIvyGrowths, lindwurmCaps, wingTamerIvyBaseStats, types.flier, weaknesses.dragonFlier, proficiencies.wingTamer, false);
export const lindwurm = new classData("Lindwurm", lindwurmGrowths, lindwurmCaps, lindwurmBaseStats, types.flier, weaknesses.dragonFlier, proficiencies.lindwurm, skills.graspingVoid);
export const wingTamerHortensia = new classData("Wing Tamer (Hortensia)", wingTamerHortensiaGrowths, sleipnirRiderCaps, wingTamerHortensiaCaps, types.flier, weaknesses.flying, proficiencies.wingTamer, false);
export const sleipnirRider = new classData("Sleipnir Rider", sleipnirRiderGrowths, sleipnirRiderCaps, sleipnirRiderBaseStats, types.flier, weaknesses.flying, proficiencies.sleipnirRider, skills.worldTree);
export const sentinelTimerra = new classData("Sentinel (Timerra)", sentinelTimerraGrowths, picketCaps, sentinelTimerraBaseStats, types.backup, weaknesses.na, proficiencies.lanceUser, false);
export const picket = new classData("Picket", picketGrowths, picketCaps, picketBaseStats, types.backup, weaknesses.na, proficiencies.lanceMaster, skills.sandstorm);
export const sentinelFogado = new classData("Sentinel (Fogado)", sentinelFogadoGrowths, cupidoCaps, sentinelFogadoBaseStats, types.rider, weaknesses.cavalry, proficiencies.bowUser, false);
export const cupido = new classData("Cupido", cupidoGrowths, cupidoCaps, cupidoBaseStats, types.rider, weaknesses.cavalry, proficiencies.cupido, skills.backAtYou);
export const swordFighter = new classData("Sword Fighter", swordFighterGrowths, swordFighterCaps, swordFighterBaseStats, types.backup, weaknesses.na, proficiencies.swordUser, false);
export const swordMaster = new classData("Sword Master", swordMasterGrowths, swordMasterCaps, swordMasterBaseStats, types.backup, weaknesses.na, proficiencies.swordMaster, skills.runThrough);
export const heroAxe = new classData("Hero (Sword and Axe)", heroGrowths, heroCaps, heroBaseStats, types.backup, weaknesses.na, proficiencies.heroAxe, skills.braveAssist);
export const heroLance = new classData("Hero (Sword and Lance)", heroGrowths, heroCaps, heroBaseStats, types.backup, weaknesses.na, proficiencies.heroLance, skills.braveAssist);
export const lanceFighter = new classData("Lance Fighter", lanceFighterGrowths, lanceFighterCaps, lanceFighterBaseStats, types.backup, weaknesses.na, proficiencies.lanceUser, false);
export const halberdier = new classData("Halberdier", halberdierGrowths, halberdierCaps, halberdierBaseStats, types.backup, weaknesses.na, proficiencies.lanceMaster, skills.pincerAttack);
export const royalKnightSword = new classData("Royal Knight (Sword)", royalKnightGrowths, royalKnightCaps, royalKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.mountedStaffSword, skills.reforge);
export const royalKnightLance = new classData("Royal Knight (Lance)", royalKnightGrowths, royalKnightCaps, royalKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.mountedStaffLance, skills.reforge);
export const royalKnightAxe = new classData("Royal Knight (Axe)", royalKnightGrowths, royalKnightCaps, royalKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.mountedStaffAxe, skills.reforge);
export const axeFighter = new classData("Axe Fighter", axeFighterGrowths, axeFighterCaps, axeFighterBaseStats, types.backup, weaknesses.na, proficiencies.axeUser, false);
export const berserker = new classData("Berserker", berserkerGrowths, berserkerCaps, berserkerBaseStats, types.backup, weaknesses.na, proficiencies.axeMaster, skills.smashPlus);
export const warrior = new classData("Warrior", warriorGrowths, warriorCaps, warriorBaseStats, types.backup, weaknesses.na, proficiencies.warrior, skills.merciless);
export const archer = new classData("Archer", archerGrowths, archerCaps, archerBaseStats, types.covert, weaknesses.na, proficiencies.bowUser, false);
export const sniper = new classData("Sniper", sniperGrowths, sniperCaps, sniperBaseStats, types.covert, weaknesses.na, proficiencies.bowMaster, skills.noDistractions);
export const bowKnightSword = new classData("Bow Knight (Sword)", bowKnightGrowths, bowKnightCaps, bowKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.bowKnightSword, skills.carefulAim);
export const bowKnightLance = new classData("Bow Knight (Lance)", bowKnightGrowths, bowKnightCaps, bowKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.bowKnightLance, skills.carefulAim);
export const bowKnightAxe = new classData("Bow Knight (Axe)", bowKnightGrowths, bowKnightCaps, bowKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.bowKnightAxe, skills.carefulAim);
export const swordArmor = new classData("Sword Armor", armorGrowths, armorCaps, armorBaseStats, types.armored, weaknesses.armor, proficiencies.swordUser, false);
export const lanceArmor = new classData("Lance Armor", armorGrowths, armorCaps, armorBaseStats, types.armored, weaknesses.armor, proficiencies.lanceUser, false);
export const axeArmor = new classData("Axe Armor", armorGrowths, armorCaps, armorBaseStats, types.armored, weaknesses.armor, proficiencies.axeUser, false);
export const generalSword = new classData("General (Sword)", generalGrowths, generalCaps, generalBaseStats, types.armored, weaknesses.armor, proficiencies.promotedSword, skills.swap);
export const generalLance = new classData("General (Lance)", generalGrowths, generalCaps, generalBaseStats, types.armored, weaknesses.armor, proficiencies.promotedLance, skills.swap);
export const generalAxe = new classData("General (Axe)", generalGrowths, generalCaps, generalBaseStats, types.armored, weaknesses.armor, proficiencies.promotedAxe, skills.swap);
export const greatKnightSwordLance = new classData("Great Knight (Sword and Lance)", greatKnightGrowths, greatKnightCaps, greatKnightBaseStats, types.armored, weaknesses.armorCavalry, proficiencies.mountedSwordLance, skills.alliedDefense);
export const greatKnightSwordAxe = new classData("Great Knight (Sword and Axe)", greatKnightGrowths, greatKnightCaps, greatKnightBaseStats, types.armored, weaknesses.armorCavalry, proficiencies.mountedSwordAxe, skills.alliedDefense);
export const greatKnightLanceAxe = new classData("Great Knight (Lance and Axe)", greatKnightGrowths, greatKnightCaps, greatKnightBaseStats, types.armored, weaknesses.armorCavalry, proficiencies.mountedAxeLance, skills.alliedDefense);
export const cavalierSword = new classData("Cavalier (Sword)", cavalierGrowths, cavalierCaps, cavalierBaseStats, types.rider, weaknesses.cavalry, proficiencies.swordUser, false);
export const cavalierLance = new classData("Cavalier (Lance)", cavalierGrowths, cavalierCaps, cavalierBaseStats, types.rider, weaknesses.cavalry, proficiencies.lanceUser, false);
export const cavalierAxe = new classData("Cavalier (Axe)", cavalierGrowths, cavalierCaps, cavalierBaseStats, types.rider, weaknesses.cavalry, proficiencies.axeUser, false);
export const paladinSword = new classData("Paladin (Sword)", paladinGrowths, paladinCaps, paladinBaseStats, types.rider, weaknesses.cavalry, proficiencies.promotedSword, skills.pivot);
export const paladinLance = new classData("Paladin (Lance)", paladinGrowths, paladinCaps, paladinBaseStats, types.rider, weaknesses.cavalry, proficiencies.promotedLance, skills.pivot);
export const paladinAxe = new classData("Paladin (Axe)", paladinGrowths, paladinCaps, paladinBaseStats, types.rider, weaknesses.cavalry, proficiencies.promotedAxe, skills.pivot);
export const wolfKnightSword = new classData("Wolf Knight (Sword)", wolfKnightGrowths, wolfKnightCaps, wolfKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.wolfKnightSword, skills.hobble);
export const wolfKnightLance = new classData("Wolf Knight (Lance)", wolfKnightGrowths, wolfKnightCaps, wolfKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.wolfKnightLance, skills.hobble);
export const wolfKnightAxe = new classData("Wolf Knight (Axe)", wolfKnightGrowths, wolfKnightCaps, wolfKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.wolfKnightAxe, skills.hobble);
export const mage = new classData("Mage", mageGrowths, mageCaps, mageBaseStats, types.mystical, weaknesses.na, proficiencies.mage, false);
export const sage = new classData("Sage", sageGrowths, sageCaps, sageBaseStats, types.mystical, weaknesses.na, proficiencies.sage, skills.spellHarmony);
export const mageKnightSword = new classData("Mage Knight (Sword)", mageKnightGrowths, mageKnightCaps, mageKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.mageKnightSword, skills.chaosStyle);
export const mageKnightLance = new classData("Mage Knight (Lance)", mageKnightGrowths, mageKnightCaps, mageKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.mageKnightLance, skills.chaosStyle);
export const mageKnightAxe = new classData("Mage Knight (Axe)", mageKnightGrowths, mageKnightCaps, mageKnightBaseStats, types.rider, weaknesses.cavalry, proficiencies.mageKnightAxe, skills.chaosStyle);
export const martialMonk = new classData("Martial Monk", martialMonkGrowths, martialMonkCaps, martialMonkBaseStats, types.qiAdept, weaknesses.na, proficiencies.martialMonk, false);
export const martialMaster = new classData("Martial Master", martialMasterGrowths, martialMasterCaps, martialMasterBaseStats, types.qiAdept, weaknesses.na, proficiencies.martialMaster, skills.diffuseHealer);
export const highPriest = new classData("High Priest", highPriestGrowths, highPriestCaps, highPriestBaseStats, types.qiAdept, weaknesses.na, proficiencies.highPriest, skills.selfHealing);
export const swordFlier = new classData("Sword Flier", flierGrowths, flierCaps, flierBaseStats, types.flier, weaknesses.flying, proficiencies.swordUser, false);
export const lanceFlier = new classData("Lance Flier", flierGrowths, flierCaps, flierBaseStats, types.flier, weaknesses.flying, proficiencies.lanceUser, false);
export const axeFlier = new classData("Axe Flier", flierGrowths, flierCaps, flierBaseStats, types.flier, weaknesses.flying, proficiencies.axeUser, false);
export const griffinKnightSword = new classData("Griffin Knight (Sword)", griffinKnightGrowths, griffinKnightCaps, griffinKnightBaseStats, types.flier, weaknesses.flying, proficiencies.mountedStaffSword, skills.clearTheWay);
export const griffinKnightLance = new classData("Griffin Knight (Lance)", griffinKnightGrowths, griffinKnightCaps, griffinKnightBaseStats, types.flier, weaknesses.flying, proficiencies.mountedStaffLance, skills.clearTheWay);
export const griffinKnightAxe = new classData("Griffin Knight (Axe)", griffinKnightGrowths, griffinKnightCaps, griffinKnightBaseStats, types.flier, weaknesses.flying, proficiencies.mountedStaffAxe, skills.clearTheWay);
export const wyvernKnightSwordLance = new classData("Wyvern Knight (Sword and Lance)", wyvernKnightGrowths, wyvernKnightCaps, wyvernKnightBaseStats, types.flier, weaknesses.dragonFlier, proficiencies.mountedSwordLance, skills.airRaid);
export const wyvernKnightSwordAxe = new classData("Wyvern Knight (Sword and Axe)", wyvernKnightGrowths, wyvernKnightCaps, wyvernKnightBaseStats, types.flier, weaknesses.dragonFlier, proficiencies.mountedSwordAxe, skills.airRaid);
export const wyvernKnightLanceAxe = new classData("Wyvern Knight (Lance and Axe)", wyvernKnightGrowths, wyvernKnightCaps, wyvernKnightBaseStats, types.flier, weaknesses.dragonFlier, proficiencies.mountedAxeLance, skills.airRaid);
export const thief = new classData("Thief", thiefGrowths, thiefCaps, thiefBaseStats, types.covert, weaknesses.na, proficiencies.thief, skills.pass);
export const dancer = new classData("Dancer", dancerGrowths, dancerCaps, dancerBaseStats, types.qiAdept, weaknesses.na, proficiencies.dancer, skills.specialDance);
export const fellChildNel = new classData("Fell Child (Nel)", fellChildNelGrowths, fellChildNelCaps, fellChildNelBaseStats, types.draconic, weaknesses.dragon, proficiencies.fellChildNel, skills.resistEmblems);
export const fellChildRafal = new classData("Fell Child (Rafal)", fellChildRafalGrowths, fellChildRafalCaps, fellChildRafalBaseStats, types.draconic, weaknesses.dragon, proficiencies.fellChildRafal, skills.spurEmblems);
export const melusine = new classData("Melusine", melusineGrowths, melusineCaps, melusineBaseStats, types.flier, weaknesses.dragonFlier, proficiencies.melusine, skills.soulBlade);
export const enchanter = new classData("Enchanter", enchanterGrowths, enchanterCaps, enchanterBaseStats, types.qiAdept, weaknesses.na, proficiencies.enchanter, skills.convoy);
export const mageCannoneer = new classData("Mage Cannoneer", mageCannoneerGrowths, mageCannoneerCaps, mageCannoneerBaseStats, types.armored, weaknesses.armor, proficiencies.mageCannoneer, skills.letFly);
const classInfo = [dragonChild, divineDragon, fellChildVeyle, nobleAlfred, avenir, nobleCeline, vidame, lordDiamant, successeur, lordAlcryst, tireurDelite, wingTamerIvy, lindwurm, wingTamerHortensia, sleipnirRider, sentinelTimerra, picket, sentinelFogado, cupido, swordFighter, swordMaster, heroLance, heroAxe, lanceFighter, halberdier, royalKnightSword, royalKnightLance, royalKnightAxe, axeFighter, berserker, warrior, archer, sniper, bowKnightSword, bowKnightLance, bowKnightAxe, swordArmor, lanceArmor, axeArmor, generalSword, generalLance, generalAxe, greatKnightSwordAxe, greatKnightSwordLance, greatKnightLanceAxe, cavalierSword, cavalierLance, cavalierAxe, paladinSword, paladinAxe, paladinLance, wolfKnightSword, wolfKnightAxe, wolfKnightLance, mage, sage, mageKnightSword, mageKnightLance, mageKnightAxe, martialMonk, martialMaster, highPriest, swordFlier, lanceFlier, axeFlier, griffinKnightSword, griffinKnightLance, griffinKnightAxe, wyvernKnightSwordAxe, wyvernKnightSwordLance, wyvernKnightLanceAxe, thief, dancer, fellChildNel, fellChildRafal, melusine, enchanter, mageCannoneer]
export default classInfo