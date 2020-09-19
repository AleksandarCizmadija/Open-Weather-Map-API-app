const form = document.querySelector('form'),
    weather = new Weather,
    ui = new UI;

form.addEventListener('submit', function (e) {
    const input = document.querySelector('#input').value,
        loader = document.querySelector('.loader');
    if (input && input !== ' ') {
        loader.style.display = 'block'

        weather.getWeather(input)
            .then(data => {
                if (data.response.cod !== '404') {
                    ui.showWeather(data.response);
                    loader.style.display = 'none'

                } else {
                    ui.alert(`${input}: city not found`, 'red')

                    loader.style.display = 'none'
                    console.log('not found');
                }
            })
        form.reset();
    }
    e.preventDefault();
})


// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 40, lng: -71 },
//         zoom: 8
//     });
// }

// console.log(conditions);
// conditions.forEach(cond => console.log(cond))