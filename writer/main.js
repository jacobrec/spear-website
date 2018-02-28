var editor;
var url = "http://localhost:8049"
var timestamp_aka_the_unique_identifier = 0; // if it is zero, the server will create the post and add the time stamp, else it will edit it
function post() {
    let tagset = document.getElementById('tags').value.trim().split(" ");
    let obj = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        post: editor.getData(),
        timestamp: timestamp_aka_the_unique_identifier,
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
        timestamp_aka_the_unique_identifier = data.timestamp;

    }
}
