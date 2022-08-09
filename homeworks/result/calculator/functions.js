const validSigns = ["+", "-", "/", "*"];

const doMath = (a, sign, b) => {
    switch (sign) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b === 0 ? null : a / b;
    }
};

const isNumber = (s) => !Number.isNaN(Number(s));

const parseInput = (inputString) => {
    const chars = inputString.split("");
    const res = [];

    let previosNumbers = "";

    for (let char of chars) {
        if (validSigns.includes(char)) {
            if (previosNumbers !== "" && isNumber(previosNumbers)) {
                res.push(Number(previosNumbers));
                previosNumbers = "";
            }

            res.push(char);

            continue;
        }

        if (char === "." || isNumber(char)) {
            previosNumbers += char;
        }
    }

    if (previosNumbers !== "" && isNumber(previosNumbers)) {
        res.push(Number(previosNumbers));
    }

    return res;
};

const isPlusOrMinus = (char) => char === "+" || char === "-";
const isMultiplyOrDivide = (char) => char === "*" || char === "/";

const processStep = (input) => {
    // get rid of the + -
    for (let i = 0; i < input.length - 1; i++) {
        if (isPlusOrMinus(input[i]) && isPlusOrMinus(input[i + 1])) {
            const sign = input[i] === input[i + 1] ? "+" : "-";
            const res = input.filter((v, j) => j !== i + 1);
            res[i] = sign;
            return res;
        }
    }

    // get rid of the * -
    for (let i = 0; i < input.length - 2; i++) {
        if (
            isMultiplyOrDivide(input[i]) &&
            isPlusOrMinus(input[i + 1]) &&
            typeof input[i + 2] === "number"
        ) {
            const value = input[i + 1] === "-" ? -input[i + 2] : input[i + 2];
            const res = input.filter((v, j) => j !== i + 1);
            res[i + 1] = value;
            return res;
        }
    }

    if (isPlusOrMinus(input[0])) {
    }
};

const process = (input) => {
    while (input !== null || input.length > 3) {
        input = processStep(input);
    }
};
