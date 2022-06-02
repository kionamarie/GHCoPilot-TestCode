// find all images without alternate text
// and give them a red border
function process() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        var alt = images[i].getAttribute('alt');
        if (alt == null || alt == '') {
            images[i].style.border = '2px solid red';
        }
    }
}