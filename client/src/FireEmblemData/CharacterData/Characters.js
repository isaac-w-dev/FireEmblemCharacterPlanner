import * as classInfo from "../ClassData/Classes";
import * as characterGrowthRate from "./CharacterGrowths";
import * as characterMaxStats from "./CharacterMaximumStats";
import * as characterBaseStats from "./CharacterBaseStats";
import * as availableClasses from "./AvailableClasses";
import * as proficiencies from "./UnitProficiencies";
import * as personalSkills from "./PersonalSkills";
import alearMImage from '../CharacterImages/AlearM.png';
import alearFImage from '../CharacterImages/AlearF.png';
import alcrystImage from '../CharacterImages/Alcryst.png';
import alfredImage from '../CharacterImages/Alfred.png';
import amberImage from '../CharacterImages/Amber.png';
import annaImage from '../CharacterImages/Anna.png';
import boucheronImage from '../CharacterImages/Boucheron.png';
import bunetImage from '../CharacterImages/Bunet.png';
import celineImage from '../CharacterImages/Celine.png';
import chloeImage from '../CharacterImages/Chloe.png';
import citrinneImage from '../CharacterImages/Citrinne.png';
import clanneImage from '../CharacterImages/Clanne.png';
import diamantImage from '../CharacterImages/Diamant.png';
import etieImage from '../CharacterImages/Etie.png';
import fogadoImage from '../CharacterImages/Fogado.png';
import frammeImage from '../CharacterImages/Framme.png';
import goldmaryImage from '../CharacterImages/Goldmary.png';
import gregoryImage from '../CharacterImages/Gregory.png';
import hortensiaImage from '../CharacterImages/Hortensia.png';
import ivyImage from '../CharacterImages/Ivy.png';
import jadeImage from '../CharacterImages/Jade.png';
import jeanImage from '../CharacterImages/Jean.png';
import kagetsuImage from '../CharacterImages/Kagetsu.png';
import lapisImage from '../CharacterImages/Lapis.png';
import lindonImage from '../CharacterImages/Lindon.png';
import louisImage from '../CharacterImages/Louis.png';
import madelineImage from '../CharacterImages/Madeline.png';
import mauvierImage from '../CharacterImages/Mauvier.png';
import merrinImage from '../CharacterImages/Merrin.png';
import nelImage from '../CharacterImages/Nel.png';
import pandreoImage from '../CharacterImages/Pandreo.png';
import panetteImage from '../CharacterImages/Panette.png';
import rafalImage from '../CharacterImages/Rafal.png';
import rosadoImage from '../CharacterImages/Rosado.png';
import saphirImage from '../CharacterImages/Saphir.png';
import seadallImage from '../CharacterImages/Seadall.png';
import timerraImage from '../CharacterImages/Timerra.png';
import vanderImage from '../CharacterImages/Vander.png';
import veyleImage from '../CharacterImages/Veyle.png';
import yunakaImage from '../CharacterImages/Yunaka.png';
import zelestiaImage from '../CharacterImages/Zelestia.png';
import zelkovImage from '../CharacterImages/Zelkov.png';

class character {
    constructor(name, baseClass, isMale, growthRate, characterStatCap, baseStats, baseLevel, baseInternalLevel, potentialClasses, src, proficiency, personalSkill) {
        this.name = name;
        this.baseClass = baseClass;
        this.isMale = isMale;
        this.characterGrowthRate = growthRate;
        this.characterStatCap = characterStatCap;
        this.baseStats = baseStats;
        this.baseLevel = baseLevel;
        this.baseInternalLevel = baseInternalLevel;
        this.potentialClasses = potentialClasses;
        this.src = src;

        this.image = this.generateImg(this.src, 100, 100, this.name);
        this.proficiency = proficiency;
        this.personalSkill = personalSkill;
    }
    generateImg(src, width, height, name) {
        const unitImage = new Image();
        unitImage.src = src;
        unitImage.width = width;
        unitImage.height = height;
        unitImage.alt = `Image of ${name}`;
        unitImage.title = name;
        return unitImage;
    }
}
export const AlearM = new character("Alear (M)", classInfo.dragonChild, true, characterGrowthRate.alearGrowths, characterMaxStats.alearMaxStats, characterBaseStats.alearBaseStats, 1, 1, availableClasses.alearM, alearMImage, proficiencies.sword, personalSkills.alearSkill)
export const AlearF = new character("Alear (F)", classInfo.dragonChild, false, characterGrowthRate.alearGrowths, characterMaxStats.alearMaxStats, characterBaseStats.alearBaseStats, 1, 1, availableClasses.alearF, alearFImage, proficiencies.sword, personalSkills.alearSkill)
export const Vander = new character("Vander", classInfo.paladinAxe, true, characterGrowthRate.vanderGrowths, characterMaxStats.vanderMaxStats, characterBaseStats.vanderBaseStats, 1, 15, availableClasses.male, vanderImage, proficiencies.axe, personalSkills.vanderSkill)
export const Clanne = new character("Clanne", classInfo.mage, true, characterGrowthRate.clanneGrowths, characterMaxStats.clanneMaxStats, characterBaseStats.clanneBaseStats, 1, 1, availableClasses.male, clanneImage, proficiencies.tome, personalSkills.clanneSkill)
export const Framme = new character("Framme", classInfo.martialMonk, false, characterGrowthRate.frammeGrowths, characterMaxStats.frammerMaxStats, characterBaseStats.frammeBaseStats, 1, 1, availableClasses.female, frammeImage, proficiencies.arts, personalSkills.frammeSkill)
export const Alfred = new character("Alfred", classInfo.nobleAlfred, true, characterGrowthRate.alfredGrowths, characterMaxStats.alfredMaxStats, characterBaseStats.alfredBaseStats, 5, 5, availableClasses.alfred, alfredImage, proficiencies.lance, personalSkills.alfredSkill)
export const Etie = new character("Etie", classInfo.archer, false, characterGrowthRate.etieGrowths, characterMaxStats.etieMaxStats, characterBaseStats.etieBaseStats, 4, 4, availableClasses.female, etieImage, proficiencies.bow, personalSkills.etieSkill)
export const Boucheron = new character("Boucheron", classInfo.axeFighter, true, characterGrowthRate.boucheronGrowths, characterMaxStats.boucheronMaxStats, characterBaseStats.boucheronBaseStats, 4, 4, availableClasses.male, boucheronImage, proficiencies.axe, personalSkills.boucheronSkill)
export const Celine = new character("Celine", classInfo.nobleCeline, false, characterGrowthRate.celineGrowths, characterMaxStats.celineMaxStats, characterBaseStats.celineBaseStats, 5, 5, availableClasses.celine, celineImage, proficiencies.tome, personalSkills.celineSkill)
export const Chloe = new character("Chloe", classInfo.lanceFlier, false, characterGrowthRate.chloeGrowths, characterMaxStats.chloeMaxStats, characterBaseStats.chloeBaseStats, 6, 6, availableClasses.female, chloeImage, proficiencies.lance, personalSkills.chloeSkill)
export const Louis = new character("Louis", classInfo.lanceArmor, true, characterGrowthRate.louisGrowths, characterMaxStats.louisMaxStats, characterBaseStats.louisBaseStats, 6, 6, availableClasses.male, louisImage, proficiencies.lance, personalSkills.louisSkill)
export const Yunaka = new character("Yunaka", classInfo.thief, false, characterGrowthRate.yunakaGrowths, characterMaxStats.yunakaMaxStats, characterBaseStats.yunakaBaseStats, 6, 6, availableClasses.female, yunakaImage, proficiencies.knife, personalSkills.yunakaSkill)
export const Alcryst = new character("Alcryst", classInfo.lordAlcryst, true, characterGrowthRate.alcrystGrowths, characterMaxStats.alcrystMaxStats, characterBaseStats.alcrystBaseStats, 10, 10, availableClasses.alcryst, alcrystImage, proficiencies.bow, personalSkills.alcrystSkill)
export const Citrinne = new character("Citrinne", classInfo.mage, false, characterGrowthRate.citrinneGrowths, characterMaxStats.citrinneMaxStats, characterBaseStats.citrinneBaseStats, 10, 10, availableClasses.female, citrinneImage, proficiencies.tome, personalSkills.citrinneSkill)
export const Lapis = new character("Lapis", classInfo.swordFighter, false, characterGrowthRate.lapisGrowths, characterMaxStats.lapisMaxStats, characterBaseStats.lapisBaseStats, 10, 10, availableClasses.female, lapisImage, proficiencies.sword, personalSkills.lapisSkill)
export const Diamant = new character("Diamant", classInfo.lordDiamant, true, characterGrowthRate.diamantGrowths, characterMaxStats.diamantMaxStats, characterBaseStats.diamantBaseStats, 11, 11, availableClasses.diamant, diamantImage, proficiencies.sword, personalSkills.diamantSkill)
export const Amber = new character("Amber", classInfo.cavalierLance, true, characterGrowthRate.amberGrowths, characterMaxStats.amberMaxStats, characterBaseStats.amberBaseStats, 11, 11, availableClasses.male, amberImage, proficiencies.lance, personalSkills.amberSkill)
export const Jade = new character("Jade", classInfo.axeArmor, false, characterGrowthRate.jadeGrowths, characterMaxStats.jadeMaxStats, characterBaseStats.jadeBaseStats, 12, 12, availableClasses.female, jadeImage, proficiencies.axe, personalSkills.jadeSkill)
export const Ivy = new character("Ivy", classInfo.wingTamerIvy, false, characterGrowthRate.ivyGrowths, characterMaxStats.ivyMaxStats, characterBaseStats.ivyBaseStats, 17, 17, availableClasses.ivy, ivyImage, proficiencies.tome, personalSkills.ivySkill)
export const Kagetsu = new character("Kagetsu", classInfo.swordMaster, true, characterGrowthRate.kagetsuGrowths, characterMaxStats.kagetsuMaxStats, characterBaseStats.kagetsuBaseStats, 1, 16, availableClasses.male, kagetsuImage, proficiencies.sword, personalSkills.kagetsuSkill)
export const Zelkov = new character("Zelkov", classInfo.thief, true, characterGrowthRate.zelkovGrowths, characterMaxStats.zelkovMaxStats, characterBaseStats.zelkovBaseStats, 17, 17, availableClasses.male, zelkovImage, proficiencies.knife, personalSkills.zelkovSkill)
export const Fogado = new character("Fogado", classInfo.sentinelFogado, true, characterGrowthRate.fogadoGrowths, characterMaxStats.fogadoMaxStats, characterBaseStats.fogadoBaseStats, 17, 17, availableClasses.fogado, fogadoImage, proficiencies.bow, personalSkills.fogadoSkill)
export const Pandreo = new character("Pandreo", classInfo.highPriest, true, characterGrowthRate.pandreoGrowths, characterMaxStats.pandreoMaxStats, characterBaseStats.pandreoBaseStats, 1, 16, availableClasses.male, pandreoImage, proficiencies.staff, personalSkills.pandreoSkill)
export const Bunet = new character("Bunet", classInfo.greatKnightSwordAxe, true, characterGrowthRate.bunetGrowths, characterMaxStats.bunetMaxStats, characterBaseStats.bunetBaseStats, 1, 16, availableClasses.male, bunetImage, proficiencies.sword, personalSkills.bunetSkill)
export const Timerra = new character("Timerra", classInfo.sentinelTimerra, false, characterGrowthRate.timerraGrowths, characterMaxStats.timerraMaxStats, characterBaseStats.timerraBaseStats, 18, 18, availableClasses.timerra, timerraImage, proficiencies.lance, personalSkills.timerraSkill)
export const Panette = new character("Panette", classInfo.berserker, false, characterGrowthRate.panetteGrowths, characterMaxStats.panneteMaxStats, characterBaseStats.pannetteBaseStats, 1, 16, availableClasses.female, panetteImage, proficiencies.knife, personalSkills.panetteSkill)
export const Merrin = new character("Merrin", classInfo.wolfKnightSword, false, characterGrowthRate.merrinGrowths, characterMaxStats.merrinMaxStats, characterBaseStats.merrinBaseStats, 1, 16, availableClasses.male, merrinImage, proficiencies.knife, personalSkills.merrinSkill)
export const Hortensia = new character("Hortensia", classInfo.wingTamerHortensia, false, characterGrowthRate.hortensiaGrowths, characterMaxStats.hortensiaMaxStats, characterBaseStats.hortensiaBaseStats, 19, 19, availableClasses.hortensia, hortensiaImage, proficiencies.staff, personalSkills.staff)
export const Seadall = new character("Seadall", classInfo.dancer, true, characterGrowthRate.seadallGrowths, characterMaxStats.seadallMaxStats, characterBaseStats.seadallBaseStats, 15, 15, availableClasses.seadall, seadallImage, proficiencies.arts, personalSkills.seadallSkill)
export const Rosado = new character("Rosado", classInfo.wyvernKnight, true, characterGrowthRate.rosadoGrowths, characterMaxStats.rosadoMaxStats, characterBaseStats.rosadoBaseStats, 3, 20, availableClasses.male, rosadoImage, proficiencies.axe, personalSkills.rosadoSkill)
export const Goldmary = new character("Goldmary", classInfo.heroLance, false, characterGrowthRate.goldmaryGrowths, characterMaxStats.goldmaryMaxStats, characterBaseStats.goldmaryBaseStats, 3, 20, availableClasses.female, goldmaryImage, proficiencies.lance, personalSkills.goldmarySkill)
export const Lindon = new character("Lindon", classInfo.sage, true, characterGrowthRate.lindonGrowths, characterMaxStats.lindonMaxStats, characterBaseStats.lindonBaseStats, 5, 23, availableClasses.male, lindonImage, proficiencies.staff, personalSkills.lindonSkill)
export const Saphir = new character("Saphir", classInfo.warrior, false, characterGrowthRate.saphirGrowths, characterMaxStats.saphirMaxStats, characterBaseStats.saphirBaseStats, 7, 26, availableClasses.female, saphirImage, proficiencies.axe, personalSkills.saphirSkill)
export const Veyle = new character("Veyle", classInfo.fellChildVeyle, false, characterGrowthRate.veyleGrowths, characterMaxStats.veyleMaxStats, characterBaseStats.veyleBaseStats, 35, 35, availableClasses.veyle, veyleImage, proficiencies.tome, personalSkills.veyleSkill)
export const Mauvier = new character("Mauvier", classInfo.royalKnightLance, true, characterGrowthRate.mauvierGrowths, characterMaxStats.mauvierMaxStats, characterBaseStats.mauvierBaseStats, 12, 31, availableClasses.male, mauvierImage, proficiencies.staff, personalSkills.mauvierSkill)
export const Anna = new character("Anna", classInfo.axeFighter, false, characterGrowthRate.annaGrowths, characterMaxStats.annaMaxStats, characterBaseStats.annaBaseStats, 5, 5, availableClasses.female, annaImage, proficiencies.bow, personalSkills.annaSkill)
export const Jean = new character("Jean", classInfo.martialMonk, true, characterGrowthRate.jeanGrowths, characterMaxStats.jeanMaxStats, characterBaseStats.jeanBaseStats, 1, 1, availableClasses.male, jeanImage, proficiencies.arts, personalSkills.jeanSkill)
export const Nel = new character("Nel", classInfo.fellChildNel, false, characterGrowthRate.nelGrowths, characterMaxStats.nelMaxStats, characterBaseStats.nelBaseStats, 20, 20, availableClasses.nel, nelImage, proficiencies.lance, personalSkills.nelSkill)
export const Rafal = new character("Rafal", classInfo.fellChildRafal, true, characterGrowthRate.rafalGrowths, characterMaxStats.rafalMaxStats, characterBaseStats.rafalBaseStats, 20, 20, availableClasses.rafal, rafalImage, proficiencies.axe, personalSkills.rafalSkill)
export const Zelestia = new character("Zelestia", classInfo.melusine, false, characterGrowthRate.zelestiaGrowths, characterMaxStats.zelestiaMaxStats, characterBaseStats.zelestiaBaseStats, 20, 20, availableClasses.zelestia, zelestiaImage, proficiencies.sword, personalSkills.zelestiaSkill)
export const Gregory = new character("Gregory", classInfo.sage, true, characterGrowthRate.gregoryGrowths, characterMaxStats.gregoryMaxStats, characterBaseStats.gregoryBaseStats, 1, 20, availableClasses.male, gregoryImage, proficiencies.staff, personalSkills.gregorySkill)
export const Madeline = new character("Madeline", classInfo.generalAxe, false, characterGrowthRate.madelineGrowths, characterMaxStats.madelineMaxStats, characterBaseStats.madelineBaseStats, 1, 20, availableClasses.female, madelineImage, proficiencies.axe, personalSkills.madelineSkill)
const CharacterData = [AlearM, AlearF, Vander, Clanne, Framme, Alfred, Etie, Boucheron, Celine, Chloe, Louis, Yunaka, Alcryst, Citrinne, Lapis, Diamant, Amber, Jade, Ivy, Kagetsu, Zelkov, Fogado, Pandreo, Bunet, Timerra, Panette, Merrin, Hortensia, Seadall, Rosado, Goldmary, Lindon, Saphir, Veyle, Mauvier, Anna, Jean, Nel, Rafal, Zelestia, Gregory, Madeline]
export default CharacterData