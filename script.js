let btn = document.querySelector("button");

btn.onclick = () => {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "beige";
        btn.innerText = "Light Mode";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.innerText = "Dark Mode";
    }
};

let films = document.getElementsByClassName("items");

let searchedFilm = document.querySelector("input");

searchedFilm.onkeyup = () =>{
      Array.from(films).forEach((film) => {
     if (film.innerText.toLowerCase().includes(searchedFilm.value.toLowerCase())){
        film.style.display = "block";
     }
     else{
        film.style.display = "none";
     }
    }
)
}