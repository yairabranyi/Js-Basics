window.onload = {
    // var textToBeSliced = document.getElementById("textToBeSliced")
}

handleTextInputChange = (elm) => {
    inputText = document.getElementById("textInput")
    stringLengthRes = document.getElementById("stringLengthRes")
    stringLengthRes.innerHTML = inputText.value.length

    console.log(inputText.value)
    console.log(stringLengthRes)

    //    document.getElementById

}
searchText = () => {
    var text2 = document.getElementById("text2")
    console.log("searching...")
    console.log(text2.innerHTML)

    var textToFined = document.getElementById("textToFined")
    var showRes = document.getElementById("showRes")

    console.log(textToFined.value)
    var position1 = text2.innerHTML.indexOf(textToFined.value)
    if (position1 == 0) {
        showRes.innerHTML = "please enter a word to search"
        // alert("please enter a word to search")
    } else if (position1 == -1) {
        showRes.innerHTML = "No match was found"
        // alert("No match was found")
    }
    else {
        console.log("The position is", position1)
        showRes.innerHTML = 'The location is: ' + position1
    }


}
var textStartPosition = ""
var textEndPosition = ""
var textToSearch = ""

var getPosition = (elm) => {
    if (elm.id == 'textStartPosition') {
        textStartPosition = elm.value
        console.log(`The Start position is:: ${elm.value}`)

    } else {
        textEndPosition = elm.value
        console.log(`The End position is: ${elm.value}`)

    }

}

var getSlice = () => {
    let slicedText = document.getElementById("clisedText")
    console.log(`The Text to be sliced is: ${textToBeSliced.innerHTML}`)
    console.log(`Sliceing...,The start position is: ${textStartPosition} and the end position is ${textEndPosition}`)
    slicedText.innerHTML = textToBeSliced.innerHTML.slice(textStartPosition, textEndPosition);
}

// Updating the requested text to search
var updateTextToSearch = (elm) => {
    textToSearch = elm.value
    console.log("Update text to search ",textToSearch)
}


var getSearchedText = () => {
    textToBeSliced
    // var pos1 = str.search("color");
    clisedText.innerHTML=textToBeSliced.innerHTML.search(textToSearch)
    console.log("Searching test...",textToBeSliced.innerHTML)
}