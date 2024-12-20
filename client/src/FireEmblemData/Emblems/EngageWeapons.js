class engageWeapon {
    constructor(name, description, mt, hit, crit, wt, avo, ddg, effective, range) {
        this.name = name;
        this.description = description;
        this.mt = mt;
        this.hit = hit;
        this.crit = crit;
        this.wt = wt;
        this.avo = avo;
        this.ddg = ddg;
        this.effective = effective;
        this.range = range;
    }
}
//Marth Engage Weapons
export const rapier = new engageWeapon("Rapier", "Sword wielded by Emblem Marth", 7, 95, 0, 3, 20, 0, ["Calvary", "Armored"], 1);
export const mercurius = new engageWeapon("Mercurius", "Sword wielded by Emblem Marth. Doubles user's earned experience.", 12, 80, 0, 7, 0, 0, false, 1);
export const falchion = new engageWeapon("Falchion", "Sacred sword wielded by Emblem Marth", 12, 100, 0, 10, 0, 0, "Dragon", 1);
