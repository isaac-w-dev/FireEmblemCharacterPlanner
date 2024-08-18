class classWeaknesses{
    constructor(dragon, flying, armor, cavalry)
    {
        this.dragon = dragon;
        this.flying = flying;
        this.armor = armor;
        this.cavalry = cavalry;
    }
}
export const dragon = new classWeaknesses(true, false, false, false);
export const armor = new classWeaknesses(false, false, true, false);
export const cavalry = new classWeaknesses(false, false, false, true);
export const flying = new classWeaknesses(false, true, false, false);
export const armorCavalry = new classWeaknesses(false, false, true, true);
export const dragonFlier = new classWeaknesses(true, true, false, false);
export const na = new classWeaknesses(false, false, false, false);