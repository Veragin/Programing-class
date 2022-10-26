# React

-   framework for js/ts to create html,css,js code
-   use extension .jsx/.tsx for files

### Bundlers

-   webpack
-   rollup
-   parcel

### Projects

-   CRA ... create react app (webpack)
-   vite (rollup & parcel)
-   nextJS (server side rendering)

## Initialization

-   Node.js
-   Yarn

### Init project

    yarn create react-app my-app --template typescript

### Upgrade to yarn 2

https://yarnpkg.com/getting-started/migration

inside project

    yarn set version berry

### Install styled-components

    yarn add styled-components

### Start project

    yarn start

### Build project

    yarn build

## Syntax

    type Props = {
        ....
    }

    const Component = ({...}: Props) => {
        return <StyledDiv> Ahoj </StyledDiv>;
    }

    const StyledDiv = styled`
        color: black;
    `
