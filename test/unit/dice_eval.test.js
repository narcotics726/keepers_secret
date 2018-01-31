import { shuntingYard } from '../../src/lib/dice_eval';

test('transform "1D6" to "1,6,D"', () => {
    expect(shuntingYard('1D6').toBe(['1', '6', 'D']));
});

test('transform "1D100" to "1,100,D"', () => {
    expect(shuntingYard('1D100').toBe(['1', '100', 'D']));
});

test('transform "1D100" to "1,100,D"', () => {
    expect(shuntingYard('3D100 + 2D6').toBe(['3', '100', 'D', '2', '6', 'D', '+']));
});

test('transform "1D100" to "1,100,D"', () => {
    expect(shuntingYard('3D100 + 2D6 / 8').toBe(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']));
});