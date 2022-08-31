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

const isNumber = (s) => s !== " " && !Number.isNaN(Number(s));

const parseInput = (inputString) => {
    const chars = inputString.split("");
    const res = [];

    let previosNumbers = "";

    for (let char of chars) {
        if (validSigns.includes(char)) {
            if (previosNumbers !== "") {
                if (isNumber(previosNumbers)) {
                    res.push(Number(previosNumbers));
                }
                previosNumbers = "";
            }

            res.push(char);
            continue;
        }

        if (isNumber(char) || char === ".") {
            previosNumbers += char;
        }
    }

    if (previosNumbers !== "" || isNumber(previosNumbers)) {
        res.push(Number(previosNumbers));
    }

    return res;
};

const isPlusOrMinus = (sign) => sign === "+" || sign === "-";
const isMultiplyOrDivide = (sign) => sign === "*" || sign === "/";

const processStep = (input) => {
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

    for (let i = 0; i < input.length - 2; i++) {
        if (
            isNumber(input[i]) &&
            isMultiplyOrDivide(input[i + 1]) &&
            isNumber(input[i + 2])
        ) {
            const value = doMath(input[i], input[i + 1], input[i + 2]);
            const res = input.filter((v, j) => j !== i + 1 && j !== i + 2);
            res[i] = value;
            return res;
        }
    }

    for (let i = 0; i < input.length - 2; i++) {
        if (
            isNumber(input[i]) &&
            isPlusOrMinus(input[i + 1]) &&
            isNumber(input[i + 2])
        ) {
            const value = doMath(input[i], input[i + 1], input[i + 2]);
            const res = input.filter((v, j) => j !== i + 1 && j !== i + 2);
            res[i] = value;
            return res;
        }
    }

    if (input.length > 1) {
        throw new Error("Invalid value");
    }
    return input;
};

const process = (input) => {
    let processData = input;

    while (processData.length > 1) {
        processData = processStep(processData);
    }

    return processData[0];
};

const processInputString = (inputString) => {
    const input = parseInput(inputString);
    return process(input);
};
