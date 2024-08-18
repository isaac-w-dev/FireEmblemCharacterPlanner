class classType {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
export const qiAdept = new classType("Qi Adept", "Allows for Chain Guarding in which the user sacrifices 20% HP to nullify a single attack against an adjacent ally. Must have full HP.");
export const draconic = new classType("Dragon", "Grants a bonus to engage skills and attacks");
export const armored = new classType("Armored", "Cannot be inflicted with break.");
export const covert = new classType("Covert", "Doubles user's terrain bonuses");
export const rider = new classType("Cavalry", "Higher movement than most other units");
export const mystical = new classType("Mystical", "Ignores foes terrain bonus when attacking with magic.");
export const backup = new classType("Backup", "Allows for this unit to make a weak follow up at 80% accuracy if unit is capable of hitting a foe being attacked by an ally.");
export const flier = new classType("Flying", "Unhindered by terrain bonuses/penalties")