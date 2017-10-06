function newImage() {

}

function showImage(src, target) {
    var fr = new FileReader();
    fr.onload = function(e) {
        target.src = this.result;
    };
    src.addEventListener("change", function() {
        fr.readAsDataURL(src.files[0]);
    });
}

var src = document.getElementById("src");
var target = document.getElementById("target");
showImage(src,target);
