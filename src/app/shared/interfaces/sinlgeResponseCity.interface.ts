interface ICloud {
  all: number;
}

interface ICoord {
  lat: number;
  lon: number;
}

interface IMain {
  feels_like: number;
  grnd_leve: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface ISys {
  country: string;
  sunrise?: number;
  sunset?: number;
}

export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IWind {
  deg: number;
  speed: number;
  gust?: number;
}

export interface ILists {
  clouds?: ICloud;
  coord?: ICoord;
  dt?: number;
  id?: number;
  main?: IMain;
  name?: string;
  rain?: any;
  snow?: any;
  sys?: ISys;
  weather?: IWeather[];
  wind?: IWind;
  image?: string;
  description?: string;
}
