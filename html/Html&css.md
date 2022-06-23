# HTML

XML file that brownsers can read and display. Handle the data.

- syntax => tags, attributes, children
- file structure

## Tags

- \<head> & \<body> ... holds content
- \<div> ... basic tag
- \<p> ... paragraph tag
- \<span> ... short text tag
- \<br> ... enter
- \<button> ... button
- \<a href=""> ... web link
- \<img src=""> ... image
- \<input value=""> ... input value from user
- \<form action=""> ... formular to send data to server (not need to be used)
- \<label> ... click will trigger all tags

- \<video> ... can display video
- \<canvas width=300 height=200> ... can draw whatever you want
- \<iframe src=""> ... can insert another html (dont use it)
- \<!-- ... --> ... comments

# CSS

You can define styles, how should components look

can be linked in headdersvia:

    <link rel="stylesheet" href="mystyle.css">

## Syntax

styles will overvrite the previous

- \* ... all elements
- tag ... as it is
- class ... prefix .
- id ... prefix # (unique html element)

!!! dont use inline styles

## Units

- px
- %
- vh, vw
- rem, em
- calc(), min(), max()
- #fff, rgb(), rgba(), hsl(), linear-gradient()

## Positioning

- width, height, max-width, min-width, max-height, min-height
- padding, border, margin
- display = none | block | flex | grid
- position = static | relative | fixed | absolute | sticky
- box-sizing

## Flex

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- flex-direction
- gap
- justify-content
- align-items
- flex-wrap
- flex-grow, flex-shrink, flex-basis

## Useful

- overflow
- object-fit
- border-radius
- background-color
- z-index

!important ... overwrites following rules (dont use it)

## Font

- font-size
- font-weight
- color
- text-decoration
- text-align

## Selectors

- p.red .... all \<p> elements with .red class

* p .red .... all elements with .red class inside \<p> tag

- p > .red ... all elements with .red class and their parent is \<p> tag

## Pseudo-selectors

- :hover
- :focus
- :first-child
- :disabled
- :checked

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
