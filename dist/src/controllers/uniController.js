"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniData = void 0;
const uniService_js_1 = require("../services/uniService.js");
const express_validator_1 = require("express-validator");
/**
 * Gets the weather data for a Uni
 * @param req the request object
 * @param res the response object
 */
const getUniData = async (req, res) => {
    // Check if there are any validation errors
    const errors = (0, express_validator_1.validationResult)(req);
    // We will log them and send a 400 status code
    if (!errors.isEmpty()) {
        console.error('Validation error', errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // We will use a try catch block to catch any errors
    try {
        // Get the Uni param from the request
        const { Uni } = req.params;
        console.log(Uni);
        // We will create a variable with a type of UniData
        let finalUniData;
        // We will use an if statement to check which Uni was passed in
        if (Uni === 'UEL') {
            console.log((0, uniService_js_1.generateUELUniData)());
            finalUniData = (0, uniService_js_1.generateUELUniData)();
        }
        else if (Uni === 'Oxford') {
            finalUniData = (0, uniService_js_1.generateOxfordUniData)();
        }
        else if (Uni === 'Harvard') {
            finalUniData = (0, uniService_js_1.generateHarvardUniData)();
        }
        else if (Uni === 'MIT') {
            finalUniData = (0, uniService_js_1.generateMITUniData)();
        }
        else {
            // If the Uni is not london or dublin, we will throw an error
            res.status(404).send('Universit not found');
            return;
        }
        res.status(200).json(finalUniData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send('Error in fetching University data');
    }
};
exports.getUniData = getUniData;
//# sourceMappingURL=uniController.js.map