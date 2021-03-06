
let url="https://randomuser.me/api/?gender=female&results=4";

async function fetchContent(){
    try{
        let data = await fetch(url);
        let jsonData = await data.json();
        console.log(jsonData)
        updateContentToDOM(jsonData)
    } catch (e) {
        let errorElement = document.createElement('p')
        errorElement.innerHTML = e;
        document.getElementById("container")[0].appendChild(errorElement);
    }
}

function updateContentToDOM(jsonData) {
    let contentDiv = document.getElementById('content');
    for (let content in jsonData.results) {

        let div = document.createElement('div');
        div.className = 'col-3';
        let img = document.createElement('img');
        img.src = jsonData.results[content].picture.large;
        img.className = 'img-thumbnail';
        div.appendChild(img)
        let name = document.createElement('h6')
        name.innerHTML = `${jsonData.results[content].name.first} ${jsonData.results[content].name.last}`
        div.appendChild(name)
        contentDiv.appendChild(div);
    }
}

