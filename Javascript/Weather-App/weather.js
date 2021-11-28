class Weather {
  constructor(city, state) {
    this.apiKey = "57c741c086e33a328055";
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.wunderground.com/api/57c741c086e33a328055/conditions/q/${
        this.state
      }/${this.city}.json`
    );

    const responseData = await response.json();
    return responseData.current_observation;
  }

  //Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
