import * as classInfo from "../ClassData/Classes";
import * as characterGrowthRate from "./CharacterGrowths";
import * as characterMaxStats from "./CharacterMaximumStats";
import * as characterBaseStats from "./CharacterBaseStats";
import * as availableClasses from "./AvailableClasses";
class character {
    constructor(name, baseClass, isMale, growthRate, characterStatCap, baseStats, baseLevel, baseInternalLevel, potentialClasses) {
        this.name = name;
        this.baseClass = baseClass;
        this.isMale = isMale;
        this.characterGrowthRate = growthRate;
        this.characterStatCap = characterStatCap;
        this.baseStats = baseStats;
        this.baseLevel = baseLevel;
        this.baseInternalLevel = baseInternalLevel;
        this.potentialClasses = potentialClasses;
        //this.proficiency = proficiency;
        // this.personalSkill = personalSkill;
    }
}
export const AlearM = new character("Alear (M)", classInfo.dragonChild, true, characterGrowthRate.alearGrowths, characterMaxStats.alearMaxStats, characterBaseStats.alearBaseStats, 1, 1, availableClasses.alearM)
export const AlearF = new character("Alear (F)", classInfo.dragonChild, false, characterGrowthRate.alearGrowths, characterMaxStats.alearMaxStats, characterBaseStats.alearBaseStats, 1, 1, availableClasses.alearF)
export const Vander = new character("Vander", classInfo.paladin, true, characterGrowthRate.vanderGrowths, characterMaxStats.vanderMaxStats, characterBaseStats.vanderBaseStats, 1, 15, availableClasses.male)
export const Clanne = new character("Clanne", classInfo.mage, true, characterGrowthRate.clanneGrowths, characterMaxStats.clanneMaxStats, characterBaseStats.clanneBaseStats, 1, 1, availableClasses.male)
export const Framme = new character("Framme", classInfo.martialMonk, false, characterGrowthRate.frammeGrowths, characterMaxStats.frammerMaxStats, characterBaseStats.frammeBaseStats, 1, 1, availableClasses.female)
export const Alfred = new character("Alfred", classInfo.nobleAlfred, true, characterGrowthRate.alfredGrowths, characterMaxStats.alfredMaxStats, characterBaseStats.alfredBaseStats, 5, 5, availableClasses.alfred)
export const Etie = new character("Etie", classInfo.archer, false, characterGrowthRate.etieGrowths, characterMaxStats.etieMaxStats, characterBaseStats.etieBaseStats, 4, 4, availableClasses.female)
export const Boucheron = new character("Boucheron", classInfo.axeFighter, true, characterGrowthRate.boucheronGrowths, characterMaxStats.boucheronMaxStats, characterBaseStats.boucheronBaseStats, 4, 4, availableClasses.male)
export const Celine = new character("Celine", classInfo.nobleCeline, false, characterGrowthRate.celineGrowths, characterMaxStats.celineMaxStats, characterBaseStats.celineBaseStats, 5, 5, availableClasses.celine)
export const Chloe = new character("Chloe", classInfo.lanceFlier, false, characterGrowthRate.chloeGrowths, characterMaxStats.chloeMaxStats, characterBaseStats.chloeBaseStats, 6, 6, availableClasses.female)
export const Louis = new character("Louis", classInfo.lanceArmor, true, characterGrowthRate.louisGrowths, characterMaxStats.louisMaxStats, characterBaseStats.louisBaseStats, 6, 6, availableClasses.male)
export const Yunaka = new character("Yunaka", classInfo.thief, false, characterGrowthRate.yunakaGrowths, characterMaxStats.yunakaMaxStats, characterBaseStats.yunakaBaseStats, 6, 6, availableClasses.female)
export const Alcryst = new character("Alcryst", classInfo.lordAlcryst, true, characterGrowthRate.alcrystGrowths, characterMaxStats.alcrystMaxStats, characterBaseStats.alcrystBaseStats, 10, 10, availableClasses.alcryst)
export const Citrinne = new character("Citrinne", classInfo.mage, false, characterGrowthRate.citrinneGrowths, characterMaxStats.citrinneMaxStats, characterBaseStats.citrinneBaseStats, 10, 10, availableClasses.female)
export const Lapis = new character("Lapis", classInfo.swordFighter, false, characterGrowthRate.lapisGrowths, characterMaxStats.lapisMaxStats, characterBaseStats.lapisBaseStats, 10, 10, availableClasses.female)
export const Diamant = new character("Diamant", classInfo.lordDiamant, true, characterGrowthRate.diamantGrowths, characterMaxStats.diamantMaxStats, characterBaseStats.diamantBaseStats, 11, 11, availableClasses.diamant)
export const Amber = new character("Amber", classInfo.lanceCavalier, true, characterGrowthRate.amberGrowths, characterMaxStats.amberMaxStats, characterBaseStats.amberBaseStats, 11, 11, availableClasses.male)
export const Jade = new character("Jade", classInfo.axeArmor, false, characterGrowthRate.jadeGrowths, characterMaxStats.jadeMaxStats, characterBaseStats.jadeBaseStats, 12, 12, availableClasses.female)
export const Ivy = new character("Ivy", classInfo.wingTamerIvy, false, characterGrowthRate.ivyGrowths, characterMaxStats.ivyMaxStats, characterBaseStats.ivyBaseStats, 17, 17, availableClasses.ivy)
export const Kagetsu = new character("Kagetsu", classInfo.swordMaster, true, characterGrowthRate.kagetsuGrowths, characterMaxStats.kagetsuMaxStats, characterBaseStats.kagetsuBaseStats, 1, 16, availableClasses.male)
export const Zelkov = new character("Zelkov", classInfo.thief, true, characterGrowthRate.zelkovGrowths, characterMaxStats.zelkovMaxStats, characterBaseStats.zelkovBaseStats, 17, 17, availableClasses.male)
export const Fogado = new character("Fogado", classInfo.sentinelFogado, true, characterGrowthRate.fogadoGrowths, characterMaxStats.fogadoMaxStats, characterBaseStats.fogadoBaseStats, 17, 17, availableClasses.fogado)
export const Pandreo = new character("Pandreo", classInfo.highPriest, true, characterGrowthRate.pandreoGrowths, characterMaxStats.pandreoMaxStats, characterBaseStats.pandreoBaseStats, 1, 16, availableClasses.male)
export const Bunet = new character("Bunet", classInfo.greatKnight, true, characterGrowthRate.bunetGrowths, characterMaxStats.bunetMaxStats, characterBaseStats.bunetBaseStats, 1, 16, availableClasses.male)
export const Timerra = new character("Timerra", classInfo.sentinelTimerra, false, characterGrowthRate.timerraGrowths, characterMaxStats.timerraMaxStats, characterBaseStats.timerraBaseStats, 18, 18, availableClasses.timerra)
export const Pannette = new character("Panette", classInfo.berserker, false, characterGrowthRate.panetteGrowths, characterMaxStats.panneteMaxStats, characterBaseStats.pannetteBaseStats, 1, 16, availableClasses.female)
export const Merrin = new character("Merrin", classInfo.wolfKnight, false, characterGrowthRate.merrinGrowths, characterMaxStats.merrinMaxStats, characterBaseStats.merrinBaseStats, 1, 16, availableClasses.male)
export const Hortensia = new character("Hortensia", classInfo.wingTamerHortensia, false, characterGrowthRate.hortensiaGrowths, characterMaxStats.hortensiaMaxStats, characterBaseStats.hortensiaBaseStats, 19, 19, availableClasses.hortensia)
export const Seadall = new character("Seadall", classInfo.dancer, true, characterGrowthRate.seadallGrowths, characterMaxStats.seadallMaxStats, characterBaseStats.seadallBaseStats, 15, 15, availableClasses.seadall)
export const Rosado = new character("Rosado", classInfo.wyvernKnight, true, characterGrowthRate.rosadoGrowths, characterMaxStats.rosadoMaxStats, characterBaseStats.rosadoBaseStats, 3, 20, availableClasses.male)
export const Goldmary = new character("Goldmary", classInfo.hero, false, characterGrowthRate.goldmaryGrowths, characterMaxStats.goldmaryMaxStats, characterBaseStats.goldmaryBaseStats, 3, 20, availableClasses.female)
export const Lindon = new character("Lindon", classInfo.sage, true, characterGrowthRate.lindonGrowths, characterMaxStats.lindonMaxStats, characterBaseStats.lindonBaseStats, 5, 23, availableClasses.male)
export const Saphir = new character("Saphir", classInfo.warrior, false, characterGrowthRate.saphirGrowths, characterMaxStats.saphirMaxStats, characterBaseStats.saphirBaseStats, 7, 26, availableClasses.female)
export const Veyle = new character("Veyle", classInfo.fellChildVeyle, false, characterGrowthRate.veyleGrowths, characterMaxStats.veyleMaxStats, characterBaseStats.veyleBaseStats, 35, 35, availableClasses.veyle)
export const Mauvier = new character("Mauvier", classInfo.royalKnight, true, characterGrowthRate.mauvierGrowths, characterMaxStats.mauvierMaxStats, characterBaseStats.mauvierBaseStats, 12, 31, availableClasses.male)
export const Anna = new character("Anna", classInfo.axeFighter, false, characterGrowthRate.annaGrowths, characterMaxStats.annaMaxStats, characterBaseStats.annaBaseStats, 5, 5, availableClasses.female)
export const Jean = new character("Jean", classInfo.martialMonk, true, characterGrowthRate.jeanGrowths, characterMaxStats.jeanMaxStats, characterBaseStats.jeanBaseStats, 1, 1, availableClasses.male)
export const Nel = new character("Nel", classInfo.fellChildNel, false, characterGrowthRate.nelGrowths, characterMaxStats.nelMaxStats, characterBaseStats.nelBaseStats, 20, 20, availableClasses.nel)
export const Rafal = new character("Rafal", classInfo.fellChildRafal, true, characterGrowthRate.rafalGrowths, characterMaxStats.rafalMaxStats, characterBaseStats.rafalBaseStats, 20, 20, availableClasses.rafal)
export const Zelestia = new character("Zelestia", classInfo.melusine, false, characterGrowthRate.zelestiaGrowths, characterMaxStats.zelestiaMaxStats, characterBaseStats.zelestiaBaseStats, 20, 20, availableClasses.zelestia)
export const Gregory = new character("Gregory", classInfo.sage, true, characterGrowthRate.gregoryGrowths, characterMaxStats.gregoryMaxStats, characterBaseStats.gregoryBaseStats, 1, 20, availableClasses.male)
export const Madeline = new character("Madeline", classInfo.general, false, characterGrowthRate.madelineGrowths, characterMaxStats.madelineMaxStats, characterBaseStats.madelineBaseStats, 1, 20, availableClasses.female)
const CharacterData = [AlearM, AlearF, Vander, Clanne, Framme, Alfred, Etie, Boucheron, Celine, Chloe, Louis, Yunaka, Alcryst, Citrinne, Lapis, Diamant, Amber, Jade, Ivy, Kagetsu, Zelkov, Fogado, Pandreo, Bunet, Timerra, Pannette, Merrin, Hortensia, Seadall, Rosado, Goldmary, Lindon, Saphir, Veyle, Mauvier, Anna, Jean, Nel, Rafal, Zelestia, Gregory, Madeline]
export default CharacterData