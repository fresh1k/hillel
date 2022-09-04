$(document).ready(function () { 
    const actors = $('#actors');
    $(window).on("load", function (e) {
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/people/",
            dataType: "json",
            async: "true",
            success: function (response) {
                displayPerson(response.results)
            }
        })    
    })

    const displayPerson = (person) => {
        const htmlString = person.map(p => {
            return `<div class="film">
                        <a href="#"><img class="film-poster" src="images/${p.name}.jpg" alt="film-poster"></a>
                        <div class="film-description">
                            <h1 class="film-title"><a class="film-link" href="#">${p.name}</a></h1>
                        </div>
                    </div>`;
        }).join('');
        actors.html(htmlString)
    }
})