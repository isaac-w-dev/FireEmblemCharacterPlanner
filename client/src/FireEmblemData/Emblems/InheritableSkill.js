class inheritableSkill {
    constructor(name, description, spCost)
    {
        this.name = name;
        this.description = description;
        this.spCost = spCost;

    }
}
//Marth Inheritable Skills
export const perceptive = new inheritableSkill("Perceptive", "If the unit initiates combat, grants Avo+15 during combat. Avo increases with high Spd.", 250);
export const avoid10 = new inheritableSkill("Avoid +10", "Grants Avo +10", 500);
export const swordAgility1 = new inheritableSkill("Sword Agility 1", "Grants Avo +10 at the cost of Crit -10 when using a sword", 500);
export const breakDefenses = new inheritableSkill("Break Defenses", "If unit's attack breaks foe, unit makes an extra attack at 50% damage.", 500);
export const avoid15 = new inheritableSkill("Avoid +15", "Grants Avo +15", 1500);
export const swordAgility2 = new inheritableSkill("Sword Agility 2", "Grants Avo +15 at a cost of Crit -10 when using a sword", 1000);
export const unyielding = new inheritableSkill("Unyielding", "At start of player phase, if HP is 20% or less, restores 20% of unit's max HP", 100);
export const swordAgility3 = new inheritableSkill("Sword Agility 3", "Grants Avo +20 at a cost of Crit -10 when using a sword", 2000);
export const avoid20 = new inheritableSkill("Avoid +20", "Grants Avo +20", 2500);
export const unyieldingPlus = new inheritableSkill("Unyielding+", "At start of player phase, if HP is 30% or less, restores 30% of unit's max HP", 200);
export const swordAgility4 = new inheritableSkill("Sword Agility 4", "Grants Avo +25 at a cost of Crit -10 when using a sword", 3000);
export const Avoid25 = new inheritableSkill("Avoid +25", "Grants Avo +25", 3500);
export const perceptivePlus = new inheritableSkill("Perceptive+", "If the unit initiates combat, grants Avo+30 during combat. Avo increases with high Spd.", 500);
export const swordAgility5 = new inheritableSkill("Grants Avo +30 at a cost of Crit -10 when using a sword", 4000)
export const unyieldingPlusPlus = new inheritableSkill("Unyielding++", "At start of player phase, if HP is 40% or less, restores 40% of unit's max HP", 300);
export const Avoid30 = new inheritableSkill("Avoid +30", "Grants Avo +30", 4500);

