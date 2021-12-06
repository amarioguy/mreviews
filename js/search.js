var moviesSearchBar = document.getElementById("searchMovies");
var genresSearchBar = document.getElementById("searchGenres");
moviesSearchBar.onkeyup = function(){searchMovies()};
genresSearchBar.onkeyup = function(){searchGenres()};


function searchMovies(){
    var input, filtered, movies, i, a;
    input = document.getElementById("searchMovies");
    filtered = input.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    movies = document.getElementById("movie-menu").getElementsByClassName("dropitm");

    for(i = 1; i<movies.length; i++){
        a = movies[i].innerHTML.replace(/[^A-Za-z0-9]/g,"").toUpperCase();
        if (a.indexOf(filtered)>-1){
            movies[i].style.display="block";
        } else {
            movies[i].style.display="none";
        }

    }
}

function searchGenres(){
    var input, filtered, genres, i, a;
    input = document.getElementById("searchGenres");
    filtered = input.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    genres = document.getElementById("genre-menu").getElementsByClassName("dropitm");

    for(i = 1; i<genres.length; i++){
        a = genres[i].innerHTML.replace(/[^A-Za-z0-9]/g,"").toUpperCase();
        if (a.indexOf(filtered)>-1){
            genres[i].style.display="block";
        } else {
            genres[i].style.display="none";
        }

    }
}