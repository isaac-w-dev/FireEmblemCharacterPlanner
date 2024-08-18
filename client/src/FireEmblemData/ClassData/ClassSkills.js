class classSkill {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
export const divineSpirit = new classSkill("Divine Spirit", "Unit's engage meter shortened one step.");
export const fellSpirit = new classSkill("Fell Spirit", "At the start of each turn, unit's engage meter is filled by 1.")
export const goldenLotus = new classSkill("Golden Lotus", "During combat, may prevent 50% of physical damage taken. Trigger %= Dex");
export const ignis = new classSkill("Ignis", "During combat, may add half of Str to magic damage or half of Mag to all other damage. Trigger %= Dex");
export const sol = new classSkill("Sol", "Unit may recover HP= 50% of damage dealt. Trigger %= Dex.")
export const luna = new classSkill("Luna", "While on the attack, may ignore half of foe's Def/Res. Trigger %= Dex.");
export const graspingVoid = new classSkill("Grasping Void", "When attacking with a tome, unit may deal extra = half of foe's Mag. Trigger %= Dex.");
export const worldTree = new classSkill("World Tree", "When unit uses a staff, may not consume a use. Trigger %= Dex.");
export const sandstorm = new classSkill("Sandstorm", "While making a physical attack, may calculate damage with 150% of Def instead of Str. Trigger %= Dex.");
export const backAtYou = new classSkill("Back at You", "When countering, unit may deal extra damage = half of damage taken. Trigger %= Dex.");
export const soulBlade = new classSkill("Soulblade", "When attacking with a sword, damage is calculated using average of foe's Def and Res.");
export const runThrough = new classSkill("Run Through", "Use to attack an adjacent foe, then move to the space opposite that foe.");
export const braveAssist = new classSkill("Brave Assist", "If unit's HP is at max while unit makes a chain attack, unit attacks twice.");
export const pincerAttack = new classSkill("Pincer Attack", "If unit initiates combat while an ally is on the opposite side of the foe, always follows up (if weapon allows).");
export const reforge = new classSkill("Reforge", "If unit's HP is 11 or more and an adjacent ally is broken after combat, sacrifices 10 HP and removes the break status from that ally.");
export const smashPlus = new classSkill("Smash+", "When making a smash attack, push the target 2 spaces instead of 1."); 
export const merciless = new classSkill("Merciless","Unit deals +50% damage against broken foes.");
export const noDistractions = new classSkill("No Distractions", "Grants Crit +10 during combat with a foe that can't counter.");
export const carefulAim = new classSkill("Careful Aim","If unit initiates combat without moving first, grants Hit +40 during combat.");
export const swap = new classSkill("Swap", "Use to switch places with an ally");
export const alliedDefense = new classSkill("Allied Defense", "If unit is between an ally and a foe, reduces damage to unit by 3 during combat with that foe.");
export const pivot = new classSkill("Pivot", "Use to move to the opposite side of an adjacent ally.");
export const hobble = new classSkill("Hobble", "If unit initiates combat with a knife, inflicts Mov-2 on foe for 1 turn.");
export const spellHarmony = new classSkill("Spell Harmony", "If unit initiates combat with a tome, grants Atk equal to the number of adjacent allies with tomes.");
export const chaosStyle = new classSkill("Chaos Style", "If unit initiates combat with a physical attack against a foe armed with magic or vice versa, grants Spd +3 during combat.");
export const diffuseHealer = new classSkill("Diffuse Healer", "When unit is healed by a staff, all adjacent allies also recover 50% of the HP that the unit recovered.");
export const selfHealing = new classSkill("Self-Healing", "Unit can target itself with healing staves.");
export const clearTheWay = new classSkill("Clear the Way", "Unit's space and adjacent spaces have a movement cost of 1 for allies.");
export const airRaid = new classSkill("Air Raid", "If unit initiates combat from a space a foe cannot enter, grants Spd +5 during combat.");
export const pass = new classSkill("Pass", "Foes do not block unit's movement.");
export const specialDance = new classSkill("Special Dance", "If unit uses Dance, grants Dex/Spd/Lck+3 to target for 1 turn.");
export const letFly = new classSkill("Let Fly", "Use to perform a guaranteed-hit, area-of-effect attack at the start of the next player phase. Unit loses equipped weapon.");
export const convoy = new classSkill("Convoy", "Use to deposit or retrieve weapons and items");
export const resistEmblems = new classSkill("Resist Emblems", "When attacked with an engage attack, prevents 20% of damage.");
export const spurEmblems = new classSkill("Spur Emblems", "At start of player phase, fills adjacent aliies' engage meters by 1.");
