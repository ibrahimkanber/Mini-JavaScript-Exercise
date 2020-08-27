document.getElementById("getOne").addEventListener("click", getOne);
document.getElementById("getAll").addEventListener("click", getAll);
document.getElementById("postData").addEventListener("click", postData);

var loading = document.getElementById("loading")

function getOne() {
    loading.style.display = "block";
    var input1 = document.getElementById("postid").value
    var xhr1 = new XMLHttpRequest();
    var url1 = `https://jsonplaceholder.typicode.com/posts/${input1}`
    xhr1.open("GET", url1, true);
    xhr1.onload = function() {
        var post1 = JSON.parse(this.responseText);
        if (this.status === 200) {
            setTimeout(() => {
                loading.style.display = "none";
                var html1 = `<tr>
                <td>${post1.userId}</td>
                <td>${post1.id}</td>
                <td>${post1.title}</td>
            </tr> `;
            }, 2000)
        }
        document.getElementById("tbody").innerHTML = html1
    }
    xhr1.send()
}

function getAll() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);
            console.log(posts);
            var html = "";
            posts.forEach(post => {
                html +=
                    `<tr>
                    <td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                </tr>
                  `
            })

        }
        document.getElementById("tbody").innerHTML = html;
    }
    xhr.send()
}

function postData() {
    const data = {
        userId: 1,
        title: "new title",
        body: "new body"
    }
    console.log(data);
    const data1 = JSON.stringify(data);
    const data2 = JSON.parse(data1)
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/JSON;charset=utf-8")
    xhr.onload = function() {
        if (xhr.status === 201 && xhr.readyState === 4) {
            var post = xhr.responseText;
            console.log(post)
        }

    }
    xhr.send(data1)

}