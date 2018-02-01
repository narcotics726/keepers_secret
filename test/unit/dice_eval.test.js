import { shuntingYard } from '../../src/lib/dice_eval';

test('transform "1D6"', () => {
    expect(shuntingYard('1D6')).toEqual(['1', '6', 'D']);
});

test('transform "1D100"', () => {
    expect(shuntingYard('1D100')).toEqual(['1', '100', 'D']);
});

test('transform "3D100 + 2D6"', () => {
    expect(shuntingYard('3D100 + 2D6')).toEqual(['3', '100', 'D', '2', '6', 'D', '+']);
});

test('transform "3D100 + 2D6 / 8"', () => {
    expect(shuntingYard('3D100 + 2D6 / 8')).toEqual(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']);
});

test('transform "(3D100 + 2D6) / 8"', () => {
    expect(shuntingYard('(3D100 + 2D6) / 8')).toEqual(['3', '100', 'D', '2', '6', 'D', '+', '8', '/']);
});

test('transform "3D100 + (2D6 / 8)"', () => {
    expect(shuntingYard('3D100 + (2D6 / 8)')).toEqual(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']);
});

test('transform "(3D100) + (2D6 / 8)"', () => {
    expect(shuntingYard('(3D100) + (2D6 / 8)')).toEqual(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']);
});

test('transform "((3D100) + (2D6 / 8))"', () => {
    expect(shuntingYard('((3D100) + (2D6 / 8))')).toEqual(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']);
});