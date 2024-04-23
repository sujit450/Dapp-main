import { param } from 'express-validator';
export const validateUniName = param('Uni')
  .isString()
  .isIn(['UEL', 'Oxford', 'Harvard', 'MIT'])
  .withMessage('Uni name must be either UEL, Oxford, Harvard, or MIT');
