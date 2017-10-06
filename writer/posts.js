var url = "http://localhost:8049"
var postList = [];

function getPosts() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url + '/blog/posts?index=1&number=100', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);
            posts.reverse();
            for (let post of posts) {
                if (notNull(post)) {
                    showPost(post);
                }
            }
        }
    };
    xhr.send(null);
}

function notNull(post) {
    return post.timestamp != 0;
}

function convertToDate(time) {
    return new Date(time / 1000 / 1000); // Date Requires Milliseconds, stored as nanoseconds
}

function showPost(post) {
    var postDiv = document.createElement("div");
    var title = document.createElement("h2");
    var author = document.createElement("p");
    var timestamp = document.createElement("p");
    var buttonBar = document.createElement("div");

    postDiv.classList.add("blogPostPreview");
    title.classList.add("blogPostPreviewTitle");
    author.classList.add("blogPostPreviewAuthor");
    timestamp.classList.add("blogPostPreviewTimestamp");
    buttonBar.classList.add("blogPostPreviewButtonBar");

    title.appendChild(document.createTextNode(post.title));
    author.appendChild(document.createTextNode(post.author));
    timestamp.appendChild(document.createTextNode(convertToDate(post.timestamp)));

    // Make Buttons
    var view = document.createElement("button");
    var del = document.createElement("button");
    view.classList.add("blogPostPreviewButView");
    del.classList.add("blogPostPreviewButDel");
    view.appendChild(document.createTextNode("View"));
    del.appendChild(document.createTextNode("Delete"));
    let i = postList.length;
    del.onclick = function() {
        deletePost(i);
    };
    view.onclick = function() {
        viewPost(i);
    };
    buttonBar.appendChild(view);
    buttonBar.appendChild(del);
    // Done Making Buttons

    postDiv.appendChild(title);
    postDiv.appendChild(author);
    postDiv.appendChild(timestamp);
    postDiv.appendChild(buttonBar);
    document.getElementById("postHolder").appendChild(postDiv);
    postList.push({
        jsonPost: post,
        htmlPost: postDiv
    });
}

function viewPost(index) {
    let item = postList[index];
    let post = item.jsonPost;
    console.log(post);
    alert(post.post);

}

function deletePost(index) {
    if (confirm("Are you sure? Deleting this post can not be undone.")) {
        let item = postList[index];
        let post = item.jsonPost;
        let postDiv = item.htmlPost;
        console.log(post);
        postDiv.parentNode.removeChild(postDiv);
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', url + '/blog/' + post.id, true);
        xhr.send(null);
    }
}


getPosts();
