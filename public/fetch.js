fetch('https://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(data => {
        let norrisSpan = document.querySelector("#norris");
        norrisSpan.innerHTML = data.value.joke;
    });