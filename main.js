let cookie = document.cookie;
let isEnglish = true;

function setCookie() {
    if (cookie.substring(cookie.indexOf("=")+1, cookie.length) == "Spanish") {
        spanish();
        isEnglish = false;
    }
}

function spanish() {
    let image = document.getElementById("flag");
    image.src = "es_flag.png";
    image.style.right = "10px";
}

function english() {
    let image = document.getElementById("flag");
    image.src = "en_flag.png";
    image.style.right = "0px";
}

function changeLanguage() {
    if (isEnglish) {
        isEnglish = false;
        document.cookie = "language=Spanish";
        spanish();
    } else {
        isEnglish = true;
        document.cookie = "language=English";
        english();
    }
}