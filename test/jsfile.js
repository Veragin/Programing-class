class Animal {
    #name = "noname";
    age = 1;
    numberOfLegs = 2;

    constructor(initAge, initName) {
        this.age = initAge;
        this.name = initName;

        this.run();
    }

    run() {
        console.log("run as an animal", this.#name);
    }

    walk() {
        console.log(`walks on ${this.numberOfLegs} legs`);
    }
}

class Dog extends Animal {
    numberOfLegs = 4;

    constructor(initName) {
        super(10, initName);
    }

    run() {
        console.log("run as an dog");
    }

    walk() {
        super.walk();
        this.numberOfLegs--;
    }
}

const a = 2;

switch (a) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
        break;
    default:
        console.log("default");
}
