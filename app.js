const txtInput = document.querySelector('#txt-input');
const btnTranslate = document.querySelector('#btn-translate');
const outputDiv = document.querySelector('#txt-output');

const serverURL = "https://api.funtranslations.com/translate/valyrian.json";
const encodedURL = encodeURI(serverURL);

function getTranslationURL(text) {
    return encodedURL + "?" + "text=" + text
}

function errorHandler(error) {
    alert("Server is not responding currently! Try again after some time.");
}

function clickHandler() {
    const inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);