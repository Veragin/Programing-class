class EndError extends Error {
    constructor() {
        super("You are on end");
    }
}

class InvalidInputError extends Error {
    constructor() {
        super("Invalid Input");
    }
}
