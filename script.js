alert("Web siteme hoş geldiniz, hala yapım aşamasındadır!");


function saatiGoster() {
    var d = new Date();
    var saat = d.toLocaleTimeString();
    document.getElementById("saat").innerHTML = saat;
}

function bilgiGoster(){
    document.getElementById("saat").innerHTML = "Şule Aktürk";
}
