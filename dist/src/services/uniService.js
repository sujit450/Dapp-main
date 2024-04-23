"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMITUniData = exports.generateHarvardUniData = exports.generateOxfordUniData = exports.generateUELUniData = void 0;
const faker_1 = require("@faker-js/faker");
const helpers_js_1 = require("../helpers/helpers.js");
const generateUELUniData = () => {
    const RankOptions = ['1st', '2nd', '3rd', '4th'];
    const AdmissionOptions = ['Easy', 'Normal', 'Hard', 'vhard'];
    const generateUniData = {
        Uni: 'UEL',
        Students: faker_1.faker.number.int({ min: 6000, max: 20000 }),
        Fees: faker_1.faker.number.int({ min: 9000, max: 19000 }),
        Rank: RankOptions[Math.floor(Math.random() * RankOptions.length)],
        Admission: AdmissionOptions[Math.floor(Math.random() * AdmissionOptions.length)],
    };
    (0, helpers_js_1.storeUniData)(generateUniData);
    try { }
    catch (console) { }
    Error;
    return generateUniData;
};
exports.generateUELUniData = generateUELUniData;
const generateOxfordUniData = () => {
    const RankOptions = ['1st', '2nd', '3rd', '4th'];
    const AdmissionOptions = ['Easy', 'Normal', 'Hard', 'vhard'];
    const generateUniData = {
        Uni: 'Oxford',
        Students: faker_1.faker.number.int({ min: 2000, max: 10000 }),
        Fees: faker_1.faker.number.int({ min: 2000, max: 20000 }),
        Rank: RankOptions[Math.floor(Math.random() * RankOptions.length)],
        Admission: AdmissionOptions[Math.floor(Math.random() * AdmissionOptions.length)],
    };
    (0, helpers_js_1.storeUniData)(generateUniData).catch(console.error);
    return generateUniData;
};
exports.generateOxfordUniData = generateOxfordUniData;
const generateHarvardUniData = () => {
    const RankOptions = ['1st', '2nd', '3rd', '4th'];
    const AdmissionOptions = ['Easy', 'Normal', 'Hard', 'vhard'];
    const generateUniData = {
        Uni: 'Harvard',
        Students: faker_1.faker.number.int({ min: 3000, max: 6000 }),
        Fees: faker_1.faker.number.int({ min: 2000, max: 20000 }),
        Rank: RankOptions[Math.floor(Math.random() * RankOptions.length)],
        Admission: AdmissionOptions[Math.floor(Math.random() * AdmissionOptions.length)],
    };
    (0, helpers_js_1.storeUniData)(generateUniData).catch(console.error);
    return generateUniData;
};
exports.generateHarvardUniData = generateHarvardUniData;
const generateMITUniData = () => {
    const RankOptions = ['1st', '2nd', '3rd', '4th'];
    const AdmissionOptions = ['Easy', 'Normal', 'Hard', 'vhard'];
    const generateUniData = {
        Uni: 'MIT',
        Students: faker_1.faker.number.int({ min: 1000, max: 10000 }),
        Fees: faker_1.faker.number.int({ min: 2000, max: 20000 }),
        Rank: RankOptions[Math.floor(Math.random() * RankOptions.length)],
        Admission: AdmissionOptions[Math.floor(Math.random() * AdmissionOptions.length)],
    };
    (0, helpers_js_1.storeUniData)(generateUniData).catch(console.error);
    return generateUniData;
};
exports.generateMITUniData = generateMITUniData;
//# sourceMappingURL=uniService.js.map