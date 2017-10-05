var editor;
var url = "http://localhost:8049"

function post() {
    let tagset = document.getElementById('tags').value.trim().split(" ");
    let obj = {
        html: editor.getData(),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        tags: tagset
    };

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url + '/blog/', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(obj);

    console.log(obj);
}

function setup() {
    CKEDITOR.replace('editor1');
    editor = CKEDITOR.instances["editor1"];
}
