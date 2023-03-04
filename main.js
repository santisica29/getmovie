const button = document.querySelector("button");

async function getMovie() {
  const input = document.querySelector("input").value;
  const movieDataBase = `https://private.omdbapi.com/?apikey=bef9c583&t=${input}`;
  const titleOutput = document.querySelector("h2");
  const imgOutput = document.querySelector("img");
  const plotOutput = document.querySelector("p");
  const awardsOutput = document.getElementById("awards");
  const directorOutput = document.getElementById("director");
  const releaseYear = document.getElementById("year");
  const rating = document.querySelectorAll(".text-movie ul li");
  const actors = document.getElementById("actors");
  const genre = document.getElementById("genre");

  try {
    const res = await fetch(movieDataBase);
    const data = await res.json();
    console.log(data);
    titleOutput.innerText = data.Title;
    titleOutput.style.border = "3px solid rgb(204, 198, 198)";
    // titleOutput.style.backgroundColor = 'rgba(1, 1, 75, 0.966);'
    imgOutput.src = data.Poster;
    plotOutput.innerText = `Plot: \n ${data.Plot}`;
    directorOutput.innerText = `Director: \n ${data.Director}`;
    releaseYear.innerText = `Year: \n${data.Released}`;
    for (let i = 0; i < 3; i++) {
      rating[
        i
      ].innerText = `${data.Ratings[i].Source}: \n ${data.Ratings[i].Value}`;
    }
    awardsOutput.innerText = `Awards: ${data.Awards}`;
    genre.innerText = `Genre: ${data.Genre}`;
    actors.innerHTML = `Actors: \n <h4>${data.Actors}</h4>`;
    document.querySelector('.text-movie').style.border = '4px solid rgb(204, 198, 198)'

    input.value = "";
  } catch (err) {
    console.log(err.message);
  }
}

button.addEventListener("click", getMovie);
