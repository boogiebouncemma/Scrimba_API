
const searchBtn = document.getElementById("search-button")
let searchOutput = {}
let movieCnt = document.getElementById("movie-container")

function getMovie(movie) {
    `
    <img src=${movie.poster} />
    <h3>${movie.Title}</h3>
    `
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let searchValue = document.getElementById("search-box").value

    fetch(`http://www.omdbapi.com/?t=${searchValue}&apikey=55634f5e`)
        .then(res => res.json())
        .then(data => {
            searchOutput = data
        })

    movieCnt.innerHTML = getMovie(searchOutput)
    // how to do so that fetch is running when the value is available?
    document.getElementById("search-box").value = ""
    console.log(searchOutput)
})




    