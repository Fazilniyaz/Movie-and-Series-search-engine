//https://www.omdbapi.com/?apikey=c951ff1&s=


//if you type the moviw name , The movie name was appended to the
//api and then it searches and fetches the movie.

var count = 0
function myfun(){
    var range = document.getElementById("range")

    count++
    if(count%2 != 0){
        var front = document.getElementById("frontbody")
        front.style.backgroundColor = "Black"
        front.style.color = "White"
        range.innerText = "Day"
    }
    else{
        var front = document.getElementById("frontbody")
        front.style.backgroundColor = "White"
        front.style.color = "Black"
        range.innerText = "Night"

    }
}


var movieSearchElement = document.getElementById("movie-input")
var movieSearchButton = document.getElementById("movie-search-btn")
var movieCardWrapper = document.getElementById("movieCardWrapper")

movieSearchButton.addEventListener("click",function(){
    movieCardWrapper.innerHTML = ""
    var api = "https://www.omdbapi.com/?apikey=c951ff1&s=" + movieSearchElement.value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            var result = JSON.parse(this.responseText)
            if(result.Response == "True"){
                // movieCardWrapper.innerText = "Got the movies"

                var movies = result.Search

                for(var i=0 ; i<movies.length ; i++){
                    var moviecard = document.createElement("div")
                    moviecard.className = "moviecard"

                    var mPoster = document.createElement("img")
                    mPoster.src = movies[i].Poster
                    mPoster.alt = movies[i].Title
                    mPoster.className = "movieimage"
                    moviecard.appendChild(mPoster)

                    var moviedetailsdiv = document.createElement("div")
                    moviedetailsdiv.className = "moviedetails"

                    var movieTitleElement = document.createElement("h3")
                    movieTitleElement.innerText = movies[i].Title 
                    movieTitleElement.className = "movietitle"

                    var movieType = document.createElement("h5")
                    movieType.innerText = movies[i].Type 
                    movieType.className = "movieType"

                    var movieRealeaseyear = document.createElement("h3")
                    movieRealeaseyear.innerText = movies[i].Year
                    movieRealeaseyear.className = "moviereleaseyear"

                    moviedetailsdiv.append(movieTitleElement,movieType,movieRealeaseyear)
                    moviecard.append(moviedetailsdiv)
                    movieCardWrapper.append(moviecard)
                    

                }

                
            }
            else{
                var text = document.createElement("h1")
                text.innerText = "404 Movie not found check your internet connection or enter valid movie"
                text.className = "center"
                movieCardWrapper.append(text)
            }
        }
    }
    xhttp.open("GET",api,true)
    xhttp.send()
})
