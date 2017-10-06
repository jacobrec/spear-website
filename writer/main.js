var editor;
var url = "http://localhost:8049"

function post() {
    let tagset = document.getElementById('tags').value.trim().split(" ");
    let obj = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        post: editor.getData(),
        timestamp: 0,
        tags: tagset
    };

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url + '/blog/', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("It Worked!")
        }
    };

    console.log(obj);
    xhr.send(JSON.stringify(obj));


}

function setup() {
    CKEDITOR.replace('editor1');
    editor = CKEDITOR.instances["editor1"];
}
