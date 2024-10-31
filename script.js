let movies = [];

function addMovie() {
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const rating = document.getElementById("rating").value;
    const watched = document.getElementById("watched").checked;

    const movie = {
        title: title,
        director: director,
        rating: rating,
        watched: watched
    };

    movies.push(movie);

    updateTable();

    document.getElementById("movieForm").reset();
}

function updateTable() {
    const tableBody = document.getElementById("movieTable");

    tableBody.innerHTML = "";

    movies.forEach((movie) => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = movie.title;
        row.appendChild(titleCell);

        const directorCell = document.createElement("td");
        directorCell.textContent = movie.director;
        row.appendChild(directorCell);

        const ratingCell = document.createElement("td");
        ratingCell.textContent = movie.rating;
        row.appendChild(ratingCell);

        const watchedCell = document.createElement("td");
        const watchedIcon = document.createElement("span");
        watchedIcon.textContent = movie.watched ? "✓" : "✗";
        watchedIcon.className = movie.watched ? "watched" : "not-watched";
        watchedCell.appendChild(watchedIcon);

        row.appendChild(watchedCell);

        tableBody.appendChild(row);
    });
}