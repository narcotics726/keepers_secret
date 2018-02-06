import { shuntingYard, evaluate } from '../../src/lib/dice_eval';

test('evaluate "1D6"', () => {
    expect(shuntingYard('1D6')).toEqual(['1', '6', 'D']);
    const result = evaluate('1D6');
    expect(result >= 1 && result <= 6).toBeTruthy();
});

test('evaluate "1D100"', () => {
    expect(shuntingYard('1D100')).toEqual(['1', '100', 'D']);
    const result = evaluate('1D100');
    expect(result >= 1 && result <= 100).toBeTruthy();
});

test('evaluate "3D100 + 2D6"', () => {
    expect(shuntingYard('3D100 + 2D6')).toEqual(['3', '100', 'D', '2', '6', 'D', '+']);
    const result = evaluate('3D100 + 2D6');
    expect(result >= 3+2 && result <= 300+12).toBeTruthy();
});

test('evaluate "3D100 + 2D6 / 8"', () => {
    expect(shuntingYard('3D100 + 2D6 / 8')).toEqual(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']);
    const result = evaluate('3D100 + 2D6 / 8');
    expect(result >= 3 + 2/8 && result <= 300 + 12/8).toBeTruthy();
});

test('evaluate "(3D100 + 2D6) / 8"', () => {
    expect(shuntingYard('(3D100 + 2D6) / 8')).toEqual(['3', '100', 'D', '2', '6', 'D', '+', '8', '/']);
    const result = evaluate('(3D100 + 2D6) / 8');
    expect(result >= (3 + 2) / 8 && result <= (300 + 12) / 8).toBeTruthy();
});

test('evaluate "3D100 + (2D6 / 8)"', () => {
    expect(shuntingYard('3D100 + (2D6 / 8)')).toEqual(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']);
    const result = evaluate('3D100 + (2D6 / 8)');
    expect(result >= 3 + 2 / 8 && result <= 300 + 12 / 8).toBeTruthy();
});

test('evaluate "(3D100) + (2D6 / 8)"', () => {
    expect(shuntingYard('(3D100) + (2D6 / 8)')).toEqual(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']);
    const result = evaluate('(3D100) + (2D6 / 8)');
    expect(result >= 3 + 2 / 8 && result <= 300 + 12 / 8).toBeTruthy();
});

test('evaluate "((3D100) + (2D6 / 8))"', () => {
    expect(shuntingYard('((3D100) + (2D6 / 8))')).toEqual(['3', '100', 'D', '2', '6', 'D', '8', '/', '+']);
    const result = evaluate('((3D100) + (2D6 / 8))');
    expect(result >= 3 + 2 / 8 && result <= 300 + 12 / 8).toBeTruthy();
});

test('the chance of a "1D6" result should be near to 1/6 for each result', () => {
    let chance = [0,0,0,0,0,0];
    for (let i = 0; i < 100000; i ++) {
        const result = evaluate('1D6');
        chance[result - 1] += 1;
    }

    chance = chance.map(x => Math.abs(x / 100000 - 1/6));
    
    chance.forEach(x => {
        expect(x).toBeCloseTo(0);
    });
});