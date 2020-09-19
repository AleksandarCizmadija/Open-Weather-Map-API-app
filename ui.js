class UI {
    constructor() {
        this.conatiner = document.querySelector('.conatiner');
        this.header = document.querySelector('.header');
        this.side = document.querySelector('.side');
        this.alertBox = document.querySelector('.alert');
        this.input = document.querySelector('#input');

    }
    showWeather(weather) {
        console.log(weather);

        const conditionsImages = [
            {
                name: 'thunderstorm',
                img: 'https://i.ibb.co/xsFQsJm/storm.jpg'
            },
            {
                name: 'drizzle',
                img: 'https://i.ibb.co/6RbbcLn/rain-drizzle.jpg'
            },
            {
                name: 'rain',
                img: 'https://i.ibb.co/Mn9Qb7D/rain.jpg'
            },
            {
                name: 'snow',
                img: 'https://i.ibb.co/nQnWWZx/snow.jpg'
            },
            {
                name: 'clear',
                img: 'https://i.ibb.co/kxvLHz2/sunny.jpg'
            },
            {
                name: 'clouds',
                img: 'https://i.ibb.co/fx5zMC1/cloudy.jpg'
            }
        ];

        const main = weather.weather[0].main.toLowerCase();

        conditionsImages.forEach(cond => {
            if (main === cond.name) {
                this.conatiner.style.backgroundImage = `url(${cond.img})`;
            }
        })

        this.header.innerHTML = `
                <h2>${weather.name}, ${weather.sys.country}</h2>
                <p>${weather.weather[0].description}</p>
                <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">        
                <h1>${weather.main.temp} &#8451;</h1>
        `;

        this.side.innerHTML = `
            <div class="conditions">
                <div class="condition">
                    <span>Sunrise</span>
                    <p>${calcTime(weather.sys.sunrise, weather.timezone)}</p>
                    </div> <!-- condition -->
                    
                    <div class="condition">
                    <span>Sunset</span>
                    <p>${calcTime(weather.sys.sunset, weather.timezone)}</p>
                </div> <!-- condition -->
    
                <div class="condition">
                    <span>Feels Like</span>
                    <p>${weather.main.feels_like}</p>
                </div> <!-- condition -->
    
                <div class="condition">
                    <span>Pressure</span>
                    <p>${weather.main.pressure} hPa</p>
                </div> <!-- condition -->
    
                <div class="condition">
                    <span>Min Temp</span>
                    <p>${weather.main.temp_min}</p>
                    </div> <!-- condition -->
                    
                    <div class="condition">
                    <span>Max Temp</span>
                    <p>${weather.main.temp_max}</p>
                </div> <!-- condition -->
            </div>
            <div id="map"></div>
        `;


        function calcTime(time, timezone) {
            const timeInDate = new Date(time * 1000);
            const timeInMil = timeInDate.getTime();
            const timeOffset = timeInDate.getTimezoneOffset() * 60000;
            const diff = timeInMil + timeOffset;
            const sum = diff + (1000 * timezone);
            return new Date(sum).toLocaleTimeString('uk-UK');
        }

        let map;

        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: weather.coord.lat, lng: weather.coord.lon },
                zoom: 10
            });
        }
        initMap()

    }
    alert(msg, color) {
        this.header.innerHTML = '';
        this.side.innerHTML = '';
        // this.conditions.innerHTML = '';
        // this.googleMap.innerHTML = '';
        this.alertBox.style.display = 'block';
        this.alertBox.innerHTML = msg;
        this.alertBox.classList.add(color);
        this.alertBox.style.background = color;
        this.input.style.borderColor = color;
        setTimeout(() => {
            this.alertBox.innerHTML = '';
            this.alertBox.classList.remove(color);
            this.input.style.borderColor = 'rgba(0,0,0,0.5)';
            this.alertBox.style.display = 'none';
            this.alertBox.style.background = 'transparent';
        }, 2500)
    }
}