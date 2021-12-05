function searchMovies(){
    var input, filtered, movies, i, a;
    input = document.getElementById("searchMovies");
    filtered = input.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    movies = document.getElementsByClassName("dropitm");

    for(i = 1; i<movies.length; i++){
        a = movies[i].innerHTML.replace(/[^A-Za-z0-9]/g,"").toUpperCase();
        console.log(a)
        if (a.indexOf(filtered)>-1){
            console.log(a.indexOf(filtered)>-1);
            movies[i].style.display="block";
        } else {
            movies[i].style.display="none";
        }

    }
}

function searchGenres(){
    var input, filtered, movies, i, a;
    input = document.getElementById("searchGenres");
    filtered = input.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    movies = document.getElementsByClassName("dropitm");

    for(i = 1; i<movies.length; i++){
        a = movies[i].innerHTML.replace(/[^A-Za-z0-9]/g,"").toUpperCase();
        console.log(a)
        if (a.indexOf(filtered)>-1){
            console.log(a.indexOf(filtered)>-1);
            movies[i].style.display="block";
        } else {
            movies[i].style.display="none";
        }

    }
}