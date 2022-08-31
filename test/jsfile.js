const kkk = () => {
    const n = 5 / 0;
    console.log(n);

    if (n === Infinity) {
        throw new Error("That should not happen");
    }

    console.log("asdsaa");
};

const lll = () => {
    try {
        kkk();
        console.log("not executed code");
    } catch (e) {
        console.log("My error", e);
    }
    console.log("function lll");
};

lll();
