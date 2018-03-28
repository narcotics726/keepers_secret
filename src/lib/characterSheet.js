import { evaluate } from './dice_eval';
import * as _ from 'lodash';

const COC_CHARACTERISTICS = {
    'STR': { key: 'str', name: '力量 STR', formula: '3D6*5' },
    'DEX': { key: 'dex', name: '敏捷 DEX', formula: '2D6*5' },
    'POW': { key: 'pow', name: '意志 POW', formula: '3D6*5' },
    'CON': { key: 'con', name: '体质 CON', formula: '3D6*5' },
    'APP': { key: 'app', name: '外貌 APP', formula: '3D6*5' },
    'EDU': { key: 'edu', name: '教育 EDU', formula: '(2D6+6)*5' },
    'SIZ': { key: 'siz', name: '体型 SIZ', formula: '(2D6+6)*5' },
    'INT': { key: 'int', name: '智力 INT', formula: '(2D6+6)*5' }
};

const between = (val, min, max) => {
    return val >= min && val <= max;
};

export default class CharacterSheet {
    constructor() {
        this.characteristics = {};
        _.forIn(COC_CHARACTERISTICS, x => {
            this.characteristics[x.key] = evaluate(x.formula);
        });

        this.age = -1;
        this.bonus = [];
    }

    decideAgeBonus() {
        if (this.age < 15 || this.age > 90) {
            return;
        }

        if (between(this.age, 15, 19)) {
            this.bonus.push({ cha: ['str', 'siz'], bonus: -5 });
            this.bonus.push({ cha: 'edu', bonus: -5 });
            this.bonus.push({ cha: 'luc', bonus: '-1D' });
            return;
        }

        if (between(this.age, 20, 39)) {
            this.bonus.push({ cha: 'edu', bonus: '1D' });
            return;
        }

        if (between(this.age, 40, 49)) {
            this.bonus.push({ cha: 'edu', bonus: '2D' });
            this.bonus.push({ cha: ['str', 'con', 'dex'], bonus: -5 });
            this.bonus.push({ cha: 'app', bonus: -5 });
            return;
        }

        if (between(this.age, 50, 59)) {
            this.bonus.push({cha: 'edu', bonus: '3D'});
            this.bonus.push({ cha: ['str', 'con', 'dex'], bonus: -10 });
            this.bonus.push({ cha: 'app', bonus: -10 });
            return;
        }

        if (between(this.age, 60, 69)) {
            this.bonus.push({ cha: 'edu', bonus: '4D' });
            this.bonus.push({ cha: ['str', 'con', 'dex'], bonus: -20 });
            this.bonus.push({ cha: 'app', bonus: -15 });
            return;
        }

        if (between(this.age, 70, 79)) {
            this.bonus.push({ cha: 'edu', bonus: '4D' });
            this.bonus.push({ cha: ['str', 'con', 'dex'], bonus: -40 });
            this.bonus.push({ cha: 'app', bonus: -20 });
            return;
        }

        if (between(this.age, 80, 89)) {
            this.bonus.push({ cha: 'edu', bonus: '4D' });
            this.bonus.push({ cha: ['str', 'con', 'dex'], bonus: -80 });
            this.bonus.push({ cha: 'app', bonus: -25 });
            return;
        }
    }

    calculateBonus(bonus) {

    }

    static getChaList() {
        return _.cloneDeep(COC_CHARACTERISTICS);
    }

    toString() {
        return 'CHA_SHEET';
    }
}