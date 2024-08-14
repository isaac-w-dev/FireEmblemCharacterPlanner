import { Schema, model } from "mongoose";

const characterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    class:
    {
        type: String,
        minLength: [3, 'Class name must be greater than 3 characters']
    },
    hp:
    {
        type: Number,
        required: [true, "HP stat is required"],
        max: [99, "HP stat can't be greater than 99"]
    },
    str:
    {
        type: Number,
        required: [true, 'Str is required'],
        max: [99, "Strength stat can't be greater than 99"]
    },
    def:
    {
        type: Number,
        required: [true, 'Def is required'],
        max: [99, "Defense stat can't be greater than 99"]
    },
    mag:
    {
        type: Number,
        required: [true, 'Mag is required'],
        max: [99, "Magic stat can't be greater than 99"]
    },
    res:
    {
        type: Number,
        required: [true, 'Res is required'],
        max: [99, "Resilience stat can't be greater than 99"]
    },
    dex:
    {
        type: Number,
        required: [true, 'Dex is required'],
        max: [99, "Dexterity stat can't be greater than 99"]
    },
    luck:
    {
        type: Number,
        required: [true, 'Luck is required'],
        max: [99, "Luck stat can't be greater than 99"]
    },
    spd:
    {
        type: Number,
        required: [true, 'Spd is required'],
        max: [99, "Speed stat can't be greater than 99"]
    },
    internalLevel: {
        type: Number,
        required: [true, "Internal Level is required"],
        min: [1, "Minimum internal level is 1"],
        max: [99, "Maximum internal level is 99"]
    },
    level:
    {
        type: Number,
        required: [true, "Internal Level is required"],
        min: [1, "Minimum internal level is 1"],
        max: [99, "Maximum internal level is 99"]
    },
    isMale:
    {
        type: Boolean,
        required: [true, "Gender must be selected"]
    }
}, { timestamps: true });
const Character = model('Character', characterSchema);
export default Character;