$(document).ready(function () {
    const films = $('#films');
    const film_detail = $('#film-detail');
    const films_array = [];
    
    $(window).on("load", function () {
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/films/",
            dataType: "json",
            async: "true",
            success: function (response) {
                displayFilms(response.results)
                films_array.push(response.results)
            }
        });
    });


    const displayFilms = (film) => {
        const htmlString = film.map(f => {
            return `<div class="film">
                        <a href="#" class="film-link"><img class="film-poster" src="images/${f.title}.jpg" alt="film-poster"></a>
                        <div class="film-description">
                        <h1 class="film-title"><a class="film-link" href="#">${f.title}</a></h1>
                            <p class="film-year">${f.release_date}</p>
                        </div>
                    </div>`;
        }).join('');
        films.html(htmlString)
    }

    const filmDetail = (movie) => {
        const str = movie.map(m => {
            return  `<div class="film">
                        <div class="film-description">
                            <p class="film-year">${m.release_date}</p>
                            <p class="film-year">${m.opening_crawl}</p>
                            <p class="film-year">${m.director}</p>
                            <p class="film-year">${m.producer}</p>
                        </div>
                    </div>`
        }).join('');
        film_detail.html(str)
    }

    $('#search').keyup(function () {
        const searchString = $('#search').val().toLowerCase().trim();
        $.ajax({
            type: "GET",
            url: `https://swapi.dev/api/films/?search=${searchString}`,
            dataType: "json",
            success: function (response) {
                displayFilms(response.results)
                filmDetail(response)
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

