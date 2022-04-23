export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface City {
	coord: {
		lon: number;
		lat: number;
	};
	weather: Weather[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
		sea_level: number;
		grnd_level: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
		gust: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface DetailCity {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: Current;
	daily: DailyEntity[];
	alerts: AlertsEntity[];
	hourly: Hourly[];
}

export interface Hourly {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: WeatherEntity[];
	pop: number;
	rain: {
		[key: string]: number;
	};
}

export interface Current {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: WeatherEntity[];
}
export interface WeatherEntity {
	id: number;
	main: string;
	description: string;
	icon: string;
}
export interface DailyEntity {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	temp: Temp;
	feels_like: FeelsLike;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: WeatherEntity[];
	clouds: number;
	pop: number;
	rain?: number | null;
	uvi: number;
}
export interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}
export interface FeelsLike {
	day: number;
	night: number;
	eve: number;
	morn: number;
}
export interface AlertsEntity {
	sender_name: string;
	event: string;
	start: number;
	end: number;
	description: string;
	tags?: (string | null)[] | null;
}
