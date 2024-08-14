class characterGrowthRate {
    constructor(hp, str, mag, dex, spd, def, res, lck, bld) {
        this.hp = hp;
        this.str = str;
        this.mag = mag;
        this.dex = dex;
        this.spd = spd;
        this.def = def;
        this.res = res;
        this.lck = lck;
        this.bld = bld;
        this.total = hp + str + mag + dex + spd + def + res + lck + bld;
    }
}
export const alearGrowths = new characterGrowthRate(60, 35, 20, 45, 50, 40, 25, 25, 5);
export const vanderGrowths = new characterGrowthRate(60, 25, 10, 25, 35, 35, 20, 10, 5);
export const clanneGrowths = new characterGrowthRate(40, 35, 10, 40, 50, 30, 25, 20, 5);
export const frammeGrowths = new characterGrowthRate(55, 30, 25, 35, 55, 25, 30, 25, 0);
export const alfredGrowths = new characterGrowthRate(65, 40, 5, 35, 40, 40, 20, 40, 10);
export const etieGrowths = new characterGrowthRate(45, 40, 0, 25, 35, 25, 30, 25, 5);
export const boucheronGrowths = new characterGrowthRate(85, 20, 0, 50, 45, 35, 20, 15, 20);
export const celineGrowths = new characterGrowthRate(50, 35, 25, 30, 45, 30, 40, 50, 5);
export const chloeGrowths = new characterGrowthRate(75, 25, 35, 40, 55, 30, 25, 25, 5);
export const louisGrowths = new characterGrowthRate(75, 40, 0, 40, 55, 30, 25, 25, 5);
export const yunakaGrowths = new characterGrowthRate(50, 35, 25, 40, 45, 15, 45, 25, 5);
export const alcrystGrowths = new characterGrowthRate(65, 30, 10, 40, 45, 30, 20, 15, 5);
export const citrinneGrowths = new characterGrowthRate(45, 10, 40, 25, 30, 20, 40, 25, 5);
export const lapisGrowths = new characterGrowthRate(55, 25, 20, 35, 55, 35, 30, 25, 5);
export const diamantGrowths = new characterGrowthRate(75, 30, 15, 20, 40, 40, 25, 20, 15);
export const amberGrowths = new characterGrowthRate(65, 45, 0, 25, 30, 35, 5, 35, 15);
export const jadeGrowths = new characterGrowthRate(55, 35, 25, 35, 30, 40, 30, 20, 10);
export const ivyGrowths = new characterGrowthRate(55, 25, 30, 25, 40, 30, 35, 15, 10);
export const kagetsuGrowths = new characterGrowthRate(60, 30, 15, 50, 50, 40, 25, 40, 10);
export const zelkovGrowths = new characterGrowthRate(65, 35, 15, 40, 35, 35, 15, 25, 10);
export const fogadoGrowths = new characterGrowthRate(60, 30, 25, 30, 55, 30, 35, 25, 10);
export const pandreoGrowths = new characterGrowthRate(60, 5, 30, 45, 45, 15, 55, 30, 15);
export const bunetGrowths = new characterGrowthRate(65, 30, 10, 40, 35, 45, 25, 40, 10);
export const timerraGrowths = new characterGrowthRate(55, 25, 25, 45, 45, 30, 30, 30, 10);
export const panetteGrowths = new characterGrowthRate(75, 45, 10, 40, 25, 30, 15, 20, 15);
export const merrinGrowths = new characterGrowthRate(55, 25, 25, 40, 50, 30, 30, 25, 10);
export const hortensiaGrowths = new characterGrowthRate(40, 20, 20, 35, 50, 25, 55, 50, 0);
export const seadallGrowths = new characterGrowthRate(55, 25, 15, 25, 50, 25, 25, 35, 10);
export const rosadoGrowths = new characterGrowthRate(75, 45, 25, 40, 45, 30, 30, 20, 5);
export const goldmaryGrowths = new characterGrowthRate(65, 30, 5, 25, 25, 55, 25, 25, 5);
export const lindonGrowths = new characterGrowthRate(65, 25, 25, 25, 40, 25, 40, 15, 10);
export const saphirGrowths = new characterGrowthRate(80, 35, 0, 25, 30, 30, 5, 20, 10);
export const veyleGrowths = new characterGrowthRate(40, 25, 45, 35, 30, 25, 35, 20, 0);
export const mauvierGrowths = new characterGrowthRate(70, 35, 40, 40, 35, 50, 45, 15, 15);
export const annaGrowths = new characterGrowthRate(55, 15, 50, 50, 50, 20, 35, 45, 5);
export const jeanGrowths = new characterGrowthRate(50, 20, 20, 35, 40, 25, 20, 25, 5);
export const nelGrowths = new characterGrowthRate(55, 30, 25, 40, 45, 30, 35, 30, 10);
export const rafalGrowths = new characterGrowthRate(70, 40, 10, 40, 35, 45, 20, 10, 10);
export const zelestiaGrowths = new characterGrowthRate(60, 35, 35, 35, 50, 30, 35, 20, 5);
export const gregoryGrowths = new characterGrowthRate(55, 30, 50, 20, 25, 35, 50, 25, 5);
export const madelineGrowths = new characterGrowthRate(75, 50, 20, 15, 15, 55, 25, 25, 10);
const characterGrowths = [alearGrowths, vanderGrowths, clanneGrowths, frammeGrowths, alfredGrowths, etieGrowths, boucheronGrowths, celineGrowths, chloeGrowths, louisGrowths, yunakaGrowths, alcrystGrowths, citrinneGrowths, lapisGrowths, diamantGrowths, amberGrowths, jadeGrowths, ivyGrowths, kagetsuGrowths, zelkovGrowths, fogadoGrowths, pandreoGrowths, bunetGrowths, panetteGrowths, merrinGrowths, hortensiaGrowths, seadallGrowths, rosadoGrowths, goldmaryGrowths, lindonGrowths, veyleGrowths, mauvierGrowths, annaGrowths, jeanGrowths, nelGrowths, rafalGrowths, zelestiaGrowths, gregoryGrowths, madelineGrowths];
export default characterGrowths