export class MultiplesdameKingsError extends Error {
    constructor() {
        super("There is multiple kings on the board");
    }
}

export class NoKingsError extends Error {
    constructor() {
        super("There is no kings on the board");
    }
}

export class TestFailedError extends Error {
    constructor() {
        super("test failed cause it didnt throw Error");
    }
}
