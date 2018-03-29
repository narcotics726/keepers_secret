import _ from 'lodash';

const rnd = function (max) {
    return Math.floor(Math.random() * max + 1);
};

const OPERATOR_LIST = [
    { char: '+', handler: (x, y) => x + y, priority: 1 },
    { char: '-', handler: (x, y) => x - y, priority: 1 },
    { char: '*', handler: (x, y) => x * y, priority: 0 },
    { char: '/', handler: (x, y) => x / y, priority: 0 },
    {
        char: 'D',
        handler: (x, y) => {
            let result = { dices: [], value: 0 };
            for (let i = 0; i < x; i++) {
                result.dices.push(rnd(y));
            }
            result.value = result.dices.reduce((x, y) => x + y);
            return result;
        },
        priority: -1
    },
    {
        char: '(', priority: Number.POSITIVE_INFINITY
    },
    {
        char: ')', priority: Number.POSITIVE_INFINITY
    }
];

const getOperatorDef = function (opChar) {
    return _.find(OPERATOR_LIST, (x) => x.char === opChar);
};

const shuntingYard = function (infixExpr) {
    let output = [];
    const opStack = [];

    let nextNumber = '';
    for (let i = 0; i < infixExpr.length; i++) {
        const char = infixExpr[i];
        if (char === ' ') {
            continue;
        }
        const opDef = getOperatorDef(char);
        if (opDef !== undefined) {
            if (nextNumber !== '') {
                output.push(nextNumber);
                nextNumber = '';
            }

            if (opStack.length === 0) {
                opStack.push(char);
                continue;
            }

            if (opDef.char === '(') {
                opStack.push('(');
                continue;
            }

            if (opDef.char === ')') {
                for (let j = opStack.length - 1; j >= 0; j--) {
                    const x = opStack.pop();
                    if (x !== '(') {
                        output.push(x);
                    } else {
                        continue;
                    }
                }
                continue;
            }

            for (let j = opStack.length - 1; j >= 0; j--) {
                const peekOp = opStack.pop();
                if (opDef.priority < getOperatorDef(peekOp).priority) {
                    opStack.push(peekOp);
                    opStack.push(char);
                    break;
                }

                output.push(peekOp);

                if (opStack.length === 0) {
                    opStack.push(char);
                }
            }
        } else {
            nextNumber += char;
        }
    }
    if (nextNumber !== '') {
        output.push(nextNumber);
    }
    output = output.concat(opStack.reverse().filter(x => ['(', ')'].indexOf(x) === -1));

    return output;
};

const evaluateRPNExpr = function (rpnExprArr) {
    const valStack = [];
    const dices = [];
    for (let i = 0; i < rpnExprArr.length; i++) {
        const char = rpnExprArr[i];
        const opDef = getOperatorDef(char);
        if (opDef !== undefined && _.isFunction(opDef.handler)) {
            const y = valStack.pop();
            let yVal = typeof y === 'number' ? y : y.value;
            const x = valStack.pop();
            let xVal = typeof x === 'number' ? x : x.value;
            const r = opDef.handler(xVal, yVal);
            valStack.push(r);
            if (typeof r === 'object') {
                dices.push({ string: `${x}D${y}=${r.dices.toString()}`, dices: r.dices });
            }
        } else {
            const num = Number(char);
            if (!_.isNumber(num)) {
                throw new Error(`${char} is neither a Number nor an Operator.`);
            }

            valStack.push(num);
        }
    }

    if (valStack.length === 1) {
        return { value: typeof valStack[0] === 'number' ? valStack[0] : valStack[0].value, dices: dices };
    } else {
        throw new Error('there are reduncant numbers in the expression.');
    }
};

const evaluate = function (infixExpr) {
    return evaluateRPNExpr(shuntingYard(infixExpr));
};

export {
    shuntingYard,
    evaluate
};