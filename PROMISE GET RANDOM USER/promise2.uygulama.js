let myObj = {
    //method: "POST",
    url: "https://randomuser.me/api/?results=5",
    headers: [
        { "content-type": "application/json" }
    ]

}



let request = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url, true);
        // if (xhr.headers) {
        //     Object.keys(obj.headers).forEach(key => {
        //         xhr.setRequestHeader(key, obj.headers[key])
        //     })
        // }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }

        }

        xhr.onerror = () => {
            reject(xhr.statusText)
        }
        xhr.send(obj.body)

    });
}

let buildHTML = data => {
    let users = JSON.parse(data);
    let html = "";
    users.results.forEach(user => {
        html +=
            `<div>
            <img src="${user.picture.medium}">
            <div>
                ${user.name.title}
                ${user.name.first}
                ${user.name.last}
            </div>
        </div>  
       `
    })
    document.getElementById("users").innerHTML = html;
    return Promise.resolve("HTML is loaded")
}

request(myObj).then(buildHTML).then(console.log).catch(console.log)