# Good practice

## Dont repeat yourselfs

## Functional programing

-   work with immutable simple data objects
-   if you need to modify object => create a new one

## Dont use else => return

instead of

    const doStuff () => {
        if(x === 1){
            // do ...
        } else if(x === 2){
            // do ...
        } else if(x === 3){
            // do ...
        } else if(x === 4){
            // do ...
        } else {
            // do ...
        }
    }

use

    const doStuff () => {
        if(x === 1){
            // do ...
            reaturn;
        }

        if(x === 2){
            // do ...
            return;
        }

        if(x === 3){
            // do ...
            return;
        }

        if(x === 4){
            // do ...
            return;
        }

        // do ...
    }

## is/has/should as prefix for boolean variables

    let isPlaying = false;
    let shouldBePlaying = true;

## use good naming of variables

-   try to focus to naming of variables, that describe its meaning

## get, find, list prefix for functions

while function has prefix:

-   get => always returns an item or throws an error
-   find => returns item or null
-   list => return array of items or empty array

## null vs undefined

-   null ... value, that i know is possible
-   undefined ... value is missing
