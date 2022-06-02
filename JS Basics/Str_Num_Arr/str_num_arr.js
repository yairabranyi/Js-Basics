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
    console.log("Update text to search ", textToSearch)
}


var getSearchedText = () => {
    textToBeSliced
    clisedText.innerHTML = textToBeSliced.innerHTML.search(textToSearch)
    console.log("Searching test...", textToBeSliced.innerHTML)
}

// NUMBERS.............................................................................

var getNumberToPars = () => {

    // Getting the value to Parse
    var numberToParse = document.getElementById('inputNumberToPars').value
    console.log(`Parsing the frase: ${numberToParse}`)

    //Paersing the value
    var parsedValue = parseInt(numberToParse)
    console.log(`The parsed Number is: ${parsedValue}`)
    // console.log(document.getElementById('VALUE:').value)

    //Show the result
    document.getElementById('parsedResult').innerHTML = parsedValue

}

var getNumberToString = () => {
    var numberToString = parseInt(document.getElementById('inputNumberToSering').value)
    console.log("Number", typeof numberToString)
    console.log("The extracted Number", numberToString)

    //Geting the entered value 
    numberToString = document.getElementById('inputNumberToSering').value

    // console.log(`Extracting Number from string.... ${numberToString}`)

    //Convert Number to String
    var ConvertedString = numberToString.toString()
    // console.log(`tHE string IS ${numberToString}`)
    console.log("String", typeof ConvertedString)

    //Show the result
    document.getElementById("stringToNumberResult").innerHTML = ConvertedString

}
// ARRAYS.............................................................................
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

//Get the requested array item
var getArrItem = () => {
    document.getElementById("displayArrItem").innerHTML = "<span>Result: </span>" + fruits[document.getElementById("arrItemNumber").value]
    console.log("Getting Item")
}

// Looping Through Array Elements
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]) ;
    var item = document.createElement("h3")
    var itemContent = document.createTextNode("fruits[i]")
    item.innerHTML="itemContent"
    // document.body.appendChild(item);
    console.log(item) ;
    
}


