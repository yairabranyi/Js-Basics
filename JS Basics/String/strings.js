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
        showRes.innerHTML= "please enter a word to search"
        // alert("please enter a word to search")
    } else if (position1 == -1) {
        showRes.innerHTML= "No match was found"
        // alert("No match was found")
    }
    else {
        console.log("The position is", position1)
        showRes.innerHTML = 'The location is: ' + position1
    }



}

