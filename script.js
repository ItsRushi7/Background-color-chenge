let id = document.querySelectorAll(".button");

id.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'tomato') {
            document.body.style.background = 'tomato';
        }

        else if (e.target.innerHTML == 'red') {
            document.body.style.background = 'red';
        }

        else if (e.target.innerHTML == 'blue') {
            document.body.style.background = 'blue';
        }

        else if (e.target.innerHTML == 'orange') {
            document.body.style.background = 'orange';
        }

    })
});

