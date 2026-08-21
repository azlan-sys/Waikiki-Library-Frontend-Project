document.getElementById('generate').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    if (url.trim() !== "") {
        if (isValidURL(url)) {
            const qrcodeContainer = document.getElementById('qrcode');
            qrcodeContainer.innerHTML = "";
            new QRCode(qrcodeContainer, url);
        } else {
            alert("Please enter a valid URL");
        }
    } else {
        alert("Please enter a URL");
    }
});

function isValidURL(string) {
    var res = string.match(/(https?:\/\/[^\s]+)/g);
    return (res !== null);
}
