"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const validator_js_1 = require("../middleware/validator.js");
const uniController_js_1 = require("../controllers/uniController.js");
const router = express_1.default.Router();
router.get('/:Uni', validator_js_1.validateUniName, uniController_js_1.getUniData);
exports.default = router;
//# sourceMappingURL=uniRoute.js.map