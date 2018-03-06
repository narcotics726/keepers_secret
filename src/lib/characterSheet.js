const COC_CHARACTERISTICS = [
    { key: 'str', name: '力量 STR', formula: '3D6*5' },
    { key: 'dex', name: '敏捷 DEX', formula: '2D6*5' },
    { key: 'pow', name: '意志 POW', formula: '3D6*5' },
    { key: 'con', name: '体质 CON', formula: '3D6*5' },
    { key: 'app', name: '外貌 APP', formula: '3D6*5' },
    { key: 'edu', name: '教育 EDU', formula: '(2D6+6)*5' },
    { key: 'siz', name: '体型 SIZ', formula: '(2D6+6)*5' },
    { key: 'int', name: '智力 INT', formula: '(2D6+6)*5' },
    { key: 'luc', name: '幸运 LUC', formula: '3D6*5' }
];

export default class CharacterSheet {
    constructor () {
        this.characteristics = {};
        COC_CHARACTERISTICS.forEach(x => {
            this.characteristics[x.key] = 0;
        });
    }

    static getChaList () {
        return COC_CHARACTERISTICS.slice();
    }
};