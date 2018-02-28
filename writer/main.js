var editor;
var url = "http://localhost:8049"
var timestamp = 0; // if it is zero, the server will create the post and add the time stamp, else it will edit it
var id = -1;

function post() {
    let tagset = document.getElementById('tags').value.trim().split(" ");
    let obj = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        post: editor.getData(),
        timestamp: timestamp,
        tags: tagset,
        id: id
    };

    let xhr = new XMLHttpRequest();
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

    if(localStorage.editpost == undefined){
        console.log("All clear");
    }else{
        let data = JSON.parse(localStorage.editpost);
        localStorage.removeItem("editpost");
        console.log(data);

        editor.setData(data.post);
        document.getElementById('title').value = data.title;
        document.getElementById('author').value = data.author;
        document.getElementById('tags').value = data.tags.join(" ");
        timestamp = data.timestamp;
        id = data.id;

    }
}
