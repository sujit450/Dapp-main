import express from 'express';
import { validateUniName } from '../middleware/validator.js';
import { getUniData } from '../controllers/uniController.js';
const router = express.Router();

router.get('/:Uni', validateUniName, getUniData);
export default router;
