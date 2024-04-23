"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUniName = void 0;
const express_validator_1 = require("express-validator");
exports.validateUniName = (0, express_validator_1.param)('Uni')
    .isString()
    .isIn(['UEL', 'Oxford', 'Harvard', 'MIT'])
    .withMessage('Uni name must be either UEL, Oxford, Harvard, or MIT');
//# sourceMappingURL=validator.js.map