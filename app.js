var txtInput = document.querySelector('#txt-input');
var btnTranslate = document.querySelector('#btn-translate');
var outputDiv = document.querySelector('#txt-output');

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    alert("Server is not responding currently! Try again after some time.");
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);