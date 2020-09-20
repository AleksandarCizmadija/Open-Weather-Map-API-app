class Weather {
    constructor() {
        this.apiCode = 'API KEY'
    }

    async getWeather(city) {
        const weatherApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiCode}&units=metric`)
        const response = await weatherApi.json();

        return {
            response
        }
    }
}
