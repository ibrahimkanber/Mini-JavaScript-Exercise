let getTextExternalAPI = () => {
    fetch('https://randomuser.me/api/?results=5').then(response => {
        return response.json()
    }).then(buildHTML).catch(console.log)
}


let buildHTML = datas => {
    let html = "";
    datas.results.forEach(data => {
        html +=
            `
            <div>
                <div>
                    <img src="${data.picture.medium}">
                </div>
                <div>
                    ${data.name.title}
                    ${data.name.first}
                    ${data.name.last}

                </div>
            </div>
        `
    })
    console.log(html)
    document.body.innerHTML = html
}

getTextExternalAPI()