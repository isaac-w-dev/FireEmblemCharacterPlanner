import { Router } from "express";
import * as characterController from "../controllers/character.controller.js";
const router = Router();
router.route('/myCharacters')
.get(characterController.getAllCharacters)
.post(characterController.createCharacter);
router.route('/myCharacters/:id')
.get(characterController.getCharacterById)
.delete(characterController.deleteById)
.put(characterController.updateCharacterById);

export default router;
