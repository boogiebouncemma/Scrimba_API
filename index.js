

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=55634f5e")
    .then(res => res.json())
    .then(data => console.log(data))

    