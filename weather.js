class Weather {
    constructor() {
        this.apiCode = 'ff92b1013794c3020d316da5725313d8'
    }

    async getWeather(city) {
        const weatherApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiCode}&units=metric`)
        const response = await weatherApi.json();

        return {
            response
        }
    }
}