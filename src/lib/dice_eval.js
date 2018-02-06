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
            let result = 0;
            for (let i = 0; i < x; i++) {
                result += rnd(y);
            }
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
                for (let j = opStack.length - 1; j >= 0; j --) {
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
    for (let i = 0; i < rpnExprArr.length; i ++) {
        const char = rpnExprArr[i];
        const opDef = getOperatorDef(char);
        if (opDef !== undefined && _.isFunction(opDef.handler)) {
            const y = valStack.pop();
            const x = valStack.pop();
            const r = opDef.handler(x, y);
            valStack.push(r);
        } else {
            const num = Number(char);
            if (!_.isNumber(num)) {
                throw new Error(`${char} is neither a Number nor an Operator.`);
            }

            valStack.push(num);
        }
    }

    if (valStack.length === 1) {
        return valStack[0];
    } else {
        throw new Error(`there are reduncant numbers in the expression.`);
    }
};

const evaluate = function (infixExpr) {
    return evaluateRPNExpr(shuntingYard(infixExpr));
};

export {
    shuntingYard,
    evaluate
};