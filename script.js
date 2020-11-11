if ('serviceWorker' in navigator) {
    //regiter sw on load of the page, so that 
    //page can load most imp resources before it fetches the sw
    window.addEventListener("load",() => {
        // Assumes your service worker has file name "sw.js"
        navigator.serviceWorker.register('sw.js')
        .then(console.log)
        .catch(console.error);
    });
}

const friends = document.querySelector("#friends");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    let html = "";
    data.forEach(element => {
        html += `<div class="card">
        <h2>${element.name}</h2>
        <div> ${element.email}</div>
        </div>
        `;
    });
    friends.innerHTML = html;
    console.log(data);
}); 