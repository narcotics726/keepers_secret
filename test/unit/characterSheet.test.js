/* global test, expect */

import CharacterSheet from '../../src/lib/characterSheet';

test('create a new sheet', () => {
    expect(new CharacterSheet()).toHaveProperty(['characteristics', 'str']);
});

test('the chaList should not be modified', () => {
    let chaList = CharacterSheet.getChaList();
    chaList.push({ key: 'modified_key' });
    expect(new CharacterSheet()).not.toHaveProperty(['characteristics', 'modified_key']);
    chaList = [{key: 'modified_key'}];
    expect(new CharacterSheet()).not.toHaveProperty(['characteristics', 'modified_key']);
});