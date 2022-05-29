onloadHandler = () => {
    console.log('PAGE LOAWDED')
}


function sayHello() {
    console.log('Hello World!');
}

onContextMenuaHandler=()=>{
    console.log('You have right-clicked a button!');

}

function mouseMovedOut() {
    console.log('Mouse moved Out');

}
function KeyPrestDown(elm) {
    console.log(elm.innerHTML)
    console.log("Key prest down")
}

function OnFocusHndler(elm) {
    elm.style.background = 'yellow'
}
function onBlueHandler(elm) {
    elm.style.background = 'white'
}

function OnChangeHandler(elm) {
    // elm.style.background = "green"
    console.log("Input text Chenged")
}
