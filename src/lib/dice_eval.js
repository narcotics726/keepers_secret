import _ from 'lodash';

const rnd = function (max) {
    return Math.floor(Math.random() * (max - 1) + 1);
};

const OPERATOR_LIST = [
    { char: '+', handler: (x, y) => x + y, priority: 1 },
    { char: '-', handler: (x, y) => x - y, priority: 1 },
    { char: '*', handler: (x, y) => x * y, priority: 0 },
    { char: '/', handler: (x, y) => x / y, priority: 0 },
    {
        char: 'D',
        handler: (x, y) => {
            let result = 0;
            for (let i = 0; i < x; i++) {
                result += rnd(y);
            }
            return result;
        },
        priority: -1
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
    output = output.concat(opStack.reverse());

    return output;
};

export {
    shuntingYard
};