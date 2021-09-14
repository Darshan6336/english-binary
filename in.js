var textarea1 = document.querySelector("#textarea-1");
var textarea2 = document.querySelector("#textarea-2");
var buttonb = document.querySelector("#button-b");
var BURL = "https://api.funtranslations.com/translate/binary.json";
;

// to translate english to binary
function transleationURL (input) {
    return BURL + "?" + "text=" + input
}
function errorHandler(error) {
    console.log("something Wrong", error)
    alert("something wrong with server. Sorry")
}

function clickHandler() {
    var inputText = textarea1.value;
    fetch(transleationURL (inputText))
    .then(response => response.json())
    .then(json => {
        var transText = json.contents.translated;
        textarea2.innerText = transText;

    })
    .catch (errorHandler)
    
};
buttonb.addEventListener("click" , clickHandler)
