# Homework 3

## practise css again (if you are not sure with it)

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

            const doMath = (a, sign, b) => { ... }

        example:

            doMath(20, '+', 10) // return 30
            doMath(20, '/', 10) // return 2

    -   create function which split string into sings and numbers (other characters are ignored) => convert numbers to a number type

            const parseInput = (inputString) => { ... }

        example:

            parseInput('20 +a10') // return [20, '+', 10]
            parseInput('1000.2 - +2') // return [1000.2, '-', '+', 2]

    -   create a function that can process parsed input, it will validate the input. It will use the doMath function inside

            const process = (input) => { ... }

        example:

            process([20, '+', 10]) // return 30
            process([1000.2, '-', '+', 2]) // return 998.2
            process([1, '/', '*', 2]) // return null
            process([1, '/', 0]) // return null

    -   create a function that joins characters into string with spaces

            const createValidInput = (chars) => { ... }

        example:

            createValidInput([20, '+', 10]) // return '20 + 10'
            createValidInput([1000.2, '-', '+', 2]) // return '1000.2 - 2'

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
