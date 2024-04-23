import { faker } from '@faker-js/faker';
import { storeUniData } from '../helpers/helpers.js';

export const generateUELUniData = (): UniData => {
  const RankOptions = ['1st', '2nd', '3rd','4th'];
  const AdmissionOptions = ['Easy', 'Normal', 'Hard', 'vhard'];
  const generateUniData = {
    Uni: 'UEL',
    Students: faker.number.int({ min: 6000, max: 20000 }),
    Fees: faker.number.int({ min: 9000, max: 19000 }),
    Rank: RankOptions[Math.floor(Math.random() * RankOptions.length)],
    Admission: AdmissionOptions[Math.floor(Math.random() * AdmissionOptions.length)],
  };

  storeUniData(generateUniData); try { } catch (console) { } Error;

  return generateUniData;
};
export const generateOxfordUniData = (): UniData => {
  const RankOptions = ['1st', '2nd', '3rd','4th'];
  const AdmissionOptions = ['Easy', 'Normal', 'Hard', 'vhard'];
  const generateUniData: UniData = {
    Uni: 'Oxford',
    Students: faker.number.int({ min: 2000, max: 10000 }),
    Fees: faker.number.int({ min: 2000, max: 20000 }),
    Rank: RankOptions[Math.floor(Math.random() * RankOptions.length)],
    Admission: AdmissionOptions[Math.floor(Math.random() * AdmissionOptions.length)],

  };

  storeUniData(generateUniData).catch(console.error);

  return generateUniData;
};
export const generateHarvardUniData = (): UniData => {
  const RankOptions = ['1st', '2nd', '3rd','4th'];
  const AdmissionOptions = ['Easy', 'Normal', 'Hard', 'vhard'];
  const generateUniData = {
    Uni: 'Harvard',
    Students: faker.number.int({ min: 3000, max: 6000 }),
    Fees: faker.number.int({ min: 2000, max: 20000 }),
    Rank: RankOptions[Math.floor(Math.random() * RankOptions.length)],
    Admission: AdmissionOptions[Math.floor(Math.random() * AdmissionOptions.length)],
  };

  storeUniData(generateUniData).catch(console.error);

  return generateUniData;
};
export const generateMITUniData = (): UniData => {
  const RankOptions = ['1st', '2nd', '3rd','4th'];
  const AdmissionOptions = ['Easy', 'Normal', 'Hard', 'vhard'];
  const generateUniData = {
    Uni: 'MIT',
    Students: faker.number.int({ min: 1000, max: 10000 }),
    Fees: faker.number.int({ min: 2000, max: 20000 }),
    Rank: RankOptions[Math.floor(Math.random() * RankOptions.length)],
    Admission: AdmissionOptions[Math.floor(Math.random() * AdmissionOptions.length)],
  };

  storeUniData(generateUniData).catch(console.error);

  return generateUniData;
};
