$(document).ready(function () {
    const films = $('#films');
    const film_detail = $('#film-detail');
    const films_array = [];


    const displayFilm = (film) => {
            return films.html(`<div class="film">
                        <a href="#" class="film-link"><img class="film-poster" src="images/${film.title}.jpg" alt="film-poster"></a>
                        <div class="film-description">
                        <h1 class="film-title"><a class="film-link" href="#">${film.title}</a></h1>
                            <p class="film-year">${film.release_date}</p>
                        </div>
                    </div>`);
    }

    const filmDetail = (movie) => {
        return film_detail.html(`<div class="film">
                    <div class="film-description">
                        <p class="film-year">${movie.release_date}</p>
                        <p class="film-year">${movie.opening_crawl}</p>
                        <p class="film-year">${movie.director}</p>
                        <p class="film-year">${movie.producer}</p>
                    </div>
                </div>`);
    }

    $('#search').keyup(function () {
        const searchString = $('#search').val().toLowerCase().trim();
        $.ajax({
            type: "GET",
            url: `https://swapi.dev/api/films/?search=${searchString}`,
            dataType: "json",
            success: function (response) {
                displayFilm(response.results[0])
                $('.film-link').on('click', function () {
                    filmDetail(response.results[0])
                })
            }
        })
        // Список ниже более универсальнее чем с ajax 

        // const filteredFilms = films_array[0].filter(movie => {
        //     return (
        //         movie.title.toLowerCase().includes(searchString) ||
        //         movie.release_date.includes(searchString)
        //     )
        // })
        // displayFilms(filteredFilms)
    })
})

