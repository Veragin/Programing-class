# Typescript

-   framework for javascript, adds types to js
-   checks if all types are valid
-   you need to transpile (compile) your code into js to be able to run the code inside browser
-   you need nodejs, some package manager (npm, yarn)

https://www.w3schools.com/typescript/

## Syntax

-   `const variableName: type = ...`
-   `type typeName = ...`

## Types

### Basic types

-   boolean
-   string
-   number
-   explicit value: 55, null, "Ahoj", undefined

### Special types

-   any
-   never
-   unknown

*   Arrays: `[]`
*   Object: `{}`
*   Functions: `() => void`
*   Classes
    -   private, public, protected

### Utility Types

-   or: `|`
-   and: `&`
-   `Record<key,value>`
-   `Partial<value>`
-   `Required<value>`
-   `Omit<value,key | ...>`
-   `Exclude<value,key | ...>`
-   `Pick<value,key,...>`
-   `ReturnType<function>` ... return type of function
-   `Parameters<function>[index]` ... parameters of function of index

### Keywords

-   `readonly` ... cant be changed
-   `keyof`
-   `typeof` ... conver value to type
-   `?` ... or undefined

*   `as const` ... cant be changed anymore (whole object)

### Tricks

-   change type: `as ...`
-   generic types: `<T>() => T`

*   aliases: `type TCarId = number;`
