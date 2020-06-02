fetch('https://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(data => console.log(data));