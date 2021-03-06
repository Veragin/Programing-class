# CSS

You can define styles, how should components look

can be linked in headders via:

    <link rel="stylesheet" href="mystyle.css">

## Syntax

styles will overvrite the previous

-   \* ... all elements
-   tag ... his name
-   class ... prefix .
-   id ... prefix # (unique html element)

!!! dont use inline styles

## Units

-   px
-   %
-   vh, vw
-   rem, em
-   calc(), min(), max()

## Color

-   white, green, yellow, lime, ...
-   transparent
-   #fff
-   rgb()
-   rgba()
-   hsl()

background:

-   linear-gradient(180deg, white 0%, #525252 100%)
-   radial-gradient(black, transparent);

## Positioning

-   display = none | block | flex | grid
-   position = static | relative | fixed | absolute | sticky
-   width, height, max-width, min-width, max-height, min-height
-   padding, border, margin
-   box-sizing

## Flex

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

-   flex-direction
-   gap
-   justify-content
-   align-items
-   flex-wrap
-   flex-grow, flex-shrink, flex-basis

## Useful

-   overflow
-   object-fit
-   border-radius
-   background-color
-   z-index
-   transform

!important ... overwrites following rules (dont use it)

## Font

-   font-size
-   font-weight
-   color
-   text-decoration
-   text-align

## Selectors

-   p.red .... all \<p> elements with .red class

*   p .red .... all elements with .red class inside \<p> tag

-   p > .red ... all elements with .red class and their parent is \<p> tag

## Pseudo-selectors

-   :hover
-   :focus
-   :first-child
-   :disabled
-   :checked

## Responsivity

    @media only screen and (max-width: 600px) {
        body {
            background-color: lightblue;
        }
    }

## Animations

     /* The animation code */
    @keyframes example {
        0%   {background-color: red;}
        25%  {background-color: yellow;}
        50%  {background-color: blue;}
        100% {background-color: green;}
    }

    /* The element to apply the animation to */
    div {
        width: 100px;
        height: 100px;
        background-color: red;
        animation-name: example;
        animation-duration: 4s;
    }

## Fontawsome (icons)

-   https://fontawesome.com/

## Animate

-   https://animate.style/
