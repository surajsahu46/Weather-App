import { OpenWeatherAPIResponse, TypeWithKey } from "@/models";
import axios, { AxiosInstance, AxiosResponse } from "axios";


const api: AxiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: 'b140112156d09ecd23f52561f1195500',
  },
});

export const fetchWeatherByCoordinates = (coords: TypeWithKey<number>): Promise<AxiosResponse<OpenWeatherAPIResponse>> => {
  return api.get('/weather', {
    params: {
      lat: coords.latitude,
      lon: coords.longitude,
      units: 'metric'
    },
  });
};

export const fetchWeatherByCity = (city: string): Promise<AxiosResponse<OpenWeatherAPIResponse>> => {
  return api.get('/weather', {
    params: {
      q: city,
      units: 'metric'
    },
  });
};