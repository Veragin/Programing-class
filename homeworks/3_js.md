# Homework 3

## practise css again

-   create your own project

or

-   if you dont have any idea, pick one from this site:

    https://www.figma.com/community

or

-   create this one

    https://www.figma.com/file/CmyPk3V2QKiVKvmONjVuQl/%F0%9F%8E%A8-Creative-Website-Template-for-Figma-(Community)?node-id=164%3A107372

## calculator project

-   create functions:

    -   create function which gets two numbers and sign (as a string) and returns result

            const doMath = (a, b, sign) => { ... }

    -   create function which split string into sings and numbers (other characters are ignored) => convert numbers to a number type

            const parseInput = (inputString) => { ... }

    -   create a function that can process parsed input, it will validate the input. It will use the doMath function

            const process = (input) => { ... }

    -   create a function that joins characters into string with spaces

            const createValidInput = (chars) => { ... }

-   create function that will fire onchange, it should:

    -   get the value from the event
    -   use parseInput() to get signs and numbers
    -   use process() to process the parsed input
    -   display the result

            const calculate = () => { ... }

-   create function that will fire onblur, it should:

    -   get the value from input
    -   use parseInput() to get signs and numbers
    -   use createValidInput() to create valud input
    -   set input tag with this valid value

            const prettify = () => { ... }
