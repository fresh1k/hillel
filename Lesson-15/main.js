const form = document.querySelector('#form')
const btn = document.querySelector('#btn');
const RndBtn = document.querySelector('#btn-rand')

let getOption = () => {
    const select = document.querySelector('#select').value;
    const input = document.querySelector('#input');
    if (select === 'date') {
        input.type = "text";
    }
}


btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#input').value;
    const select = document.querySelector('#select');
    const selectOption = select.value;
    const card = document.createElement('div')
    const card_number = document.createElement('h1');
    const card_text = document.createElement('p');

    if (selectOption === 'trivia') {
        fetch(`http://numbersapi.com/${input}`, {
            method: 'GET'
        })
            .then(response => response.text())
            .then(result => {
                card_number.innerHTML = input
                card_text.innerHTML = result
                card.appendChild(card_number)
                card.appendChild(card_text)
                form.append(card)
            })
    }
    else if (selectOption === 'math') {
        console.log(selectOption)
        fetch(`http://numbersapi.com/${input}/${selectOption}`, {
            method: 'GET'
        })
            .then(response => response.text())
            .then(result => {
                card_number.innerHTML = input
                card_text.innerHTML = result
                card.appendChild(card_number)
                card.appendChild(card_text)
                form.append(card)
            })
    }
    else {
        console.log(selectOption)
        fetch(`http://numbersapi.com/${input}/${selectOption}`, {
            method: 'GET'
        })
        .then(response => response.text())
        .then(result => {
            card_number.innerHTML = input
            card_text.innerHTML = result
            card.appendChild(card_number)
            card.appendChild(card_text)
            form.append(card)
        })
    }
})

RndBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const select = document.querySelector('#select');
    const card = document.createElement('div')
    const card_number = document.createElement('h1');
    const card_text = document.createElement('p');
    const rnd = Math.floor(Math.random() * 1000);
    const selectOption = select.value;
    fetch(`http://numbersapi.com/${rnd}/${selectOption}`, {
        method: 'GET'
    })
    .then(response => response.text())
    .then(result => {
        card_number.innerHTML = rnd
        card_text.innerHTML = result
        card.appendChild(card_number)
        card.appendChild(card_text)
        form.append(card)
    })
})