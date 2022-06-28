# Browser Javascript

### Get html element from DOM

    const button = document.getElementById('buttonId');

### EventListeners

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

    button.addEventListener('click', (evt) => { });
    document.addEventListener('keydown', (evt) => { });

### Date

    const now = Date.now();
    const date = new Date();

### XMLHttpRequest

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", () => {
        oReq.response
    });
    oReq.open("GET", "http://www.example.org/example.txt");
    oReq.send();

### Fetch

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

### RegExp

regular expressions

    const reg1 = /formula/;
    const reg2 = new RegExp('formula');

https://www.w3schools.com/jsref/jsref_obj_regexp.asp

### ResizeObserver

listener for element resizing
