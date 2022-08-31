const inputElement = document.getElementById("calulatorInput");
const resultElement = document.getElementById("result");

const showTheResult = () => {
    try {
        const result = processInputString(inputElement.value);
        resultElement.innerText = result;
    } catch (e) {
        resultElement.innerText = e.message;
    }
};

const initInput = () => {
    inputElement.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            showTheResult();
        }
    });
};

const initButtonListeners = () => {
    const addCharToInput = (char, withSpace) => {
        if (withSpace) {
            inputElement.value = `${inputElement.value} ${char} `;
        } else {
            inputElement.value = `${inputElement.value}${char}`;
        }
    };

    const btn0 = document.getElementById("btn0");
    btn0.addEventListener("click", () => addCharToInput("0"));

    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => addCharToInput("1"));

    const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", () => addCharToInput("2"));

    const btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", () => addCharToInput("3"));

    const btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", () => addCharToInput("4"));

    const btn5 = document.getElementById("btn5");
    btn5.addEventListener("click", () => addCharToInput("5"));

    const btn6 = document.getElementById("btn6");
    btn6.addEventListener("click", () => addCharToInput("6"));

    const btn7 = document.getElementById("btn7");
    btn7.addEventListener("click", () => addCharToInput("7"));

    const btn8 = document.getElementById("btn8");
    btn8.addEventListener("click", () => addCharToInput("8"));

    const btn9 = document.getElementById("btn9");
    btn9.addEventListener("click", () => addCharToInput("9"));

    const btn10 = document.getElementById("btn+");
    btn10.addEventListener("click", () => addCharToInput("+", true));

    const btn11 = document.getElementById("btn-");
    btn11.addEventListener("click", () => addCharToInput("-", true));

    const btn12 = document.getElementById("btn*");
    btn12.addEventListener("click", () => addCharToInput("*", true));

    const btn13 = document.getElementById("btn/");
    btn13.addEventListener("click", () => addCharToInput("/", true));

    const btn14 = document.getElementById("btn%");
    btn14.addEventListener("click", () => addCharToInput("%", true));

    const btn15 = document.getElementById("btn(");
    btn15.addEventListener("click", () => addCharToInput("(", true));

    const btn16 = document.getElementById("btn)");
    btn16.addEventListener("click", () => addCharToInput(")", true));

    const btn17 = document.getElementById("btn.");
    btn17.addEventListener("click", () => addCharToInput("."));

    const btn18 = document.getElementById("btn=");
    btn18.addEventListener("click", showTheResult);
};

initInput();
initButtonListeners();
