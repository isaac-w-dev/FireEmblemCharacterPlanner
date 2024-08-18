class unitProficiencies {
    constructor(sword, lance, axe, bow, knife, tome, staff, arts) {
        this.sword = sword;
        this.lance = lance;
        this.axe = axe;
        this.bow = bow;
        this.knife = knife;
        this.tome = tome;
        this.staff = staff;
        this.arts = arts;
    }
}
export const sword = new unitProficiencies(true, false, false, false, false, false, false, false);
export const lance = new unitProficiencies(false, true, false, false, false, false, false, false);
export const axe = new unitProficiencies(false, false, true, false, false, false, false, false);
export const bow = new unitProficiencies(false, false, false, true, false, false, false, false);
export const knife = new unitProficiencies(false, false, false, false, true, false, false, false);
export const tome = new unitProficiencies(false, false, false, false, false, true, false, false);
export const staff = new unitProficiencies(false, false, false, false, false, false, true, false);
export const arts = new unitProficiencies(false, false, false, false, false, false, false, true);