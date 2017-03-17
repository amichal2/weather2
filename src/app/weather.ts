class Weather {
    description: string;
}

class Sys {
    sunset: number;
    sunrise: number;    
}

class Main {
    temp: number;
}

export class WeatherObject {
    main: Main;
    sys: Sys;
    weather: Weather[];
    name: string;
}
