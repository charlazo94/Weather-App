import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Weather from "./codebase/weather";
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Weathers from './codebase/weathers';

const list = [
    {
        "dt": 1595732400,
        "main": {
            "temp": 294.65,
            "feels_like": 298.28,
            "temp_min": 294.65,
            "temp_max": 296.32,
            "pressure": 1016,
            "sea_level": 1013,
            "grnd_level": 980,
            "humidity": 94,
            "temp_kf": -1.67
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 95
        },
        "wind": {
            "speed": 0.43,
            "deg": 305
        },
        "visibility": 10000,
        "pop": 0.88,
        "rain": {
            "3h": 4.21
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-26 03:00:00"
    },
    {
        "dt": 1595743200,
        "main": {
            "temp": 295.44,
            "feels_like": 298.81,
            "temp_min": 295.44,
            "temp_max": 296.1,
            "pressure": 1014,
            "sea_level": 1013,
            "grnd_level": 980,
            "humidity": 89,
            "temp_kf": -0.66
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 98
        },
        "wind": {
            "speed": 0.73,
            "deg": 20
        },
        "visibility": 10000,
        "pop": 0.72,
        "rain": {
            "3h": 1.97
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-26 06:00:00"
    },
    {
        "dt": 1595754000,
        "main": {
            "temp": 295.14,
            "feels_like": 298.2,
            "temp_min": 295.14,
            "temp_max": 295.28,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 978,
            "humidity": 87,
            "temp_kf": -0.14
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 61
        },
        "wind": {
            "speed": 0.72,
            "deg": 21
        },
        "visibility": 10000,
        "pop": 0.27,
        "rain": {
            "3h": 0.48
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-26 09:00:00"
    },
    {
        "dt": 1595764800,
        "main": {
            "temp": 295.47,
            "feels_like": 298.1,
            "temp_min": 295.47,
            "temp_max": 295.49,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 86,
            "temp_kf": -0.02
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 34
        },
        "wind": {
            "speed": 1.43,
            "deg": 27
        },
        "visibility": 10000,
        "pop": 0.43,
        "rain": {
            "3h": 0.18
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-26 12:00:00"
    },
    {
        "dt": 1595775600,
        "main": {
            "temp": 302.35,
            "feels_like": 306.1,
            "temp_min": 302.35,
            "temp_max": 302.35,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 980,
            "humidity": 63,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 39
        },
        "wind": {
            "speed": 0.92,
            "deg": 267
        },
        "visibility": 10000,
        "pop": 0.35,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-26 15:00:00"
    },
    {
        "dt": 1595786400,
        "main": {
            "temp": 300.83,
            "feels_like": 304.66,
            "temp_min": 300.83,
            "temp_max": 300.83,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 76,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 46
        },
        "wind": {
            "speed": 2.06,
            "deg": 231
        },
        "visibility": 5249,
        "pop": 0.89,
        "rain": {
            "3h": 5.05
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-26 18:00:00"
    },
    {
        "dt": 1595797200,
        "main": {
            "temp": 298.32,
            "feels_like": 302.71,
            "temp_min": 298.32,
            "temp_max": 298.32,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 977,
            "humidity": 85,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.8,
            "deg": 250
        },
        "visibility": 10000,
        "pop": 0.88,
        "rain": {
            "3h": 6.29
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-26 21:00:00"
    },
    {
        "dt": 1595808000,
        "main": {
            "temp": 297.1,
            "feels_like": 301.09,
            "temp_min": 297.1,
            "temp_max": 297.1,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 978,
            "humidity": 88,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.89,
            "deg": 261
        },
        "visibility": 7482,
        "pop": 0.89,
        "rain": {
            "3h": 7.1
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-27 00:00:00"
    },
    {
        "dt": 1595818800,
        "main": {
            "temp": 296.51,
            "feels_like": 300.65,
            "temp_min": 296.51,
            "temp_max": 296.51,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 980,
            "humidity": 89,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.38,
            "deg": 288
        },
        "visibility": 10000,
        "pop": 0.9,
        "rain": {
            "3h": 3.39
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-27 03:00:00"
    },
    {
        "dt": 1595829600,
        "main": {
            "temp": 296.02,
            "feels_like": 299.71,
            "temp_min": 296.02,
            "temp_max": 296.02,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 88,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.54,
            "deg": 25
        },
        "visibility": 10000,
        "pop": 0.83,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-27 06:00:00"
    },
    {
        "dt": 1595840400,
        "main": {
            "temp": 295.72,
            "feels_like": 298.72,
            "temp_min": 295.72,
            "temp_max": 295.72,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 977,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 1.06,
            "deg": 24
        },
        "visibility": 10000,
        "pop": 0.1,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-27 09:00:00"
    },
    {
        "dt": 1595851200,
        "main": {
            "temp": 295.36,
            "feels_like": 297.76,
            "temp_min": 295.36,
            "temp_max": 295.36,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 978,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 89
        },
        "wind": {
            "speed": 1.43,
            "deg": 32
        },
        "visibility": 10000,
        "pop": 0.11,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-27 12:00:00"
    },
    {
        "dt": 1595862000,
        "main": {
            "temp": 301.73,
            "feels_like": 305.19,
            "temp_min": 301.73,
            "temp_max": 301.73,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 980,
            "humidity": 64,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 74
        },
        "wind": {
            "speed": 1.1,
            "deg": 242
        },
        "visibility": 10000,
        "pop": 0.13,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-27 15:00:00"
    },
    {
        "dt": 1595872800,
        "main": {
            "temp": 302.47,
            "feels_like": 305.72,
            "temp_min": 302.47,
            "temp_max": 302.47,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 979,
            "humidity": 66,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 60
        },
        "wind": {
            "speed": 2.29,
            "deg": 239
        },
        "visibility": 10000,
        "pop": 0.68,
        "rain": {
            "3h": 1.1
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-27 18:00:00"
    },
    {
        "dt": 1595883600,
        "main": {
            "temp": 298.96,
            "feels_like": 302.78,
            "temp_min": 298.96,
            "temp_max": 298.96,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 976,
            "humidity": 82,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 97
        },
        "wind": {
            "speed": 1.64,
            "deg": 227
        },
        "visibility": 10000,
        "pop": 0.88,
        "rain": {
            "3h": 8.65
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-27 21:00:00"
    },
    {
        "dt": 1595894400,
        "main": {
            "temp": 296.83,
            "feels_like": 300.89,
            "temp_min": 296.83,
            "temp_max": 296.83,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 977,
            "humidity": 90,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 0.87,
            "deg": 202
        },
        "visibility": 1439,
        "pop": 1,
        "rain": {
            "3h": 14.52
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-28 00:00:00"
    },
    {
        "dt": 1595905200,
        "main": {
            "temp": 296.71,
            "feels_like": 300.86,
            "temp_min": 296.71,
            "temp_max": 296.71,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 89,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.52,
            "deg": 97
        },
        "visibility": 8344,
        "pop": 0.99,
        "rain": {
            "3h": 6.87
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-28 03:00:00"
    },
    {
        "dt": 1595916000,
        "main": {
            "temp": 296.36,
            "feels_like": 299.26,
            "temp_min": 296.36,
            "temp_max": 296.36,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 978,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.65,
            "deg": 32
        },
        "visibility": 10000,
        "pop": 0.92,
        "rain": {
            "3h": 0.21
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-28 06:00:00"
    },
    {
        "dt": 1595926800,
        "main": {
            "temp": 295.86,
            "feels_like": 299.13,
            "temp_min": 295.86,
            "temp_max": 295.86,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 976,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.78,
            "deg": 50
        },
        "visibility": 10000,
        "pop": 0.02,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-28 09:00:00"
    },
    {
        "dt": 1595937600,
        "main": {
            "temp": 295.88,
            "feels_like": 299.14,
            "temp_min": 295.88,
            "temp_max": 295.88,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 978,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.8,
            "deg": 61
        },
        "visibility": 10000,
        "pop": 0.06,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-28 12:00:00"
    },
    {
        "dt": 1595948400,
        "main": {
            "temp": 302.04,
            "feels_like": 306.07,
            "temp_min": 302.04,
            "temp_max": 302.04,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 65,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 89
        },
        "wind": {
            "speed": 0.69,
            "deg": 201
        },
        "visibility": 10000,
        "pop": 0.04,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-28 15:00:00"
    },
    {
        "dt": 1595959200,
        "main": {
            "temp": 301.93,
            "feels_like": 305.13,
            "temp_min": 301.93,
            "temp_max": 301.93,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 978,
            "humidity": 68,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 93
        },
        "wind": {
            "speed": 2.35,
            "deg": 231
        },
        "visibility": 10000,
        "pop": 0.28,
        "rain": {
            "3h": 0.6
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-28 18:00:00"
    },
    {
        "dt": 1595970000,
        "main": {
            "temp": 298.93,
            "feels_like": 303.22,
            "temp_min": 298.93,
            "temp_max": 298.93,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 976,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 1.26,
            "deg": 213
        },
        "visibility": 4967,
        "pop": 0.89,
        "rain": {
            "3h": 8.57
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-28 21:00:00"
    },
    {
        "dt": 1595980800,
        "main": {
            "temp": 297.22,
            "feels_like": 301.67,
            "temp_min": 297.22,
            "temp_max": 297.22,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 977,
            "humidity": 88,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.32,
            "deg": 297
        },
        "visibility": 6578,
        "pop": 0.95,
        "rain": {
            "3h": 8.82
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-29 00:00:00"
    },
    {
        "dt": 1595991600,
        "main": {
            "temp": 296.71,
            "feels_like": 300.98,
            "temp_min": 296.71,
            "temp_max": 296.71,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 88,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.2,
            "deg": 124
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 4.93
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-29 03:00:00"
    },
    {
        "dt": 1596002400,
        "main": {
            "temp": 296.46,
            "feels_like": 299.49,
            "temp_min": 296.46,
            "temp_max": 296.46,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 978,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.53,
            "deg": 30
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 1.8
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-29 06:00:00"
    },
    {
        "dt": 1596013200,
        "main": {
            "temp": 295.92,
            "feels_like": 299.64,
            "temp_min": 295.92,
            "temp_max": 295.92,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 977,
            "humidity": 87,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.3,
            "deg": 271
        },
        "visibility": 10000,
        "pop": 0.02,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-29 09:00:00"
    },
    {
        "dt": 1596024000,
        "main": {
            "temp": 296.35,
            "feels_like": 299.56,
            "temp_min": 296.35,
            "temp_max": 296.35,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 978,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.19,
            "deg": 43
        },
        "visibility": 10000,
        "pop": 0.27,
        "rain": {
            "3h": 0.43
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-29 12:00:00"
    },
    {
        "dt": 1596034800,
        "main": {
            "temp": 301.32,
            "feels_like": 305.13,
            "temp_min": 301.32,
            "temp_max": 301.32,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 980,
            "humidity": 68,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.04,
            "deg": 239
        },
        "visibility": 10000,
        "pop": 0.2,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-29 15:00:00"
    },
    {
        "dt": 1596045600,
        "main": {
            "temp": 301.67,
            "feels_like": 305.49,
            "temp_min": 301.67,
            "temp_max": 301.67,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 978,
            "humidity": 72,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 98
        },
        "wind": {
            "speed": 2.01,
            "deg": 234
        },
        "visibility": 9964,
        "pop": 0.77,
        "rain": {
            "3h": 2.39
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-29 18:00:00"
    },
    {
        "dt": 1596056400,
        "main": {
            "temp": 299.28,
            "feels_like": 303.49,
            "temp_min": 299.28,
            "temp_max": 299.28,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 976,
            "humidity": 82,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.33,
            "deg": 229
        },
        "visibility": 10000,
        "pop": 0.93,
        "rain": {
            "3h": 8.37
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-29 21:00:00"
    },
    {
        "dt": 1596067200,
        "main": {
            "temp": 297.18,
            "feels_like": 301.46,
            "temp_min": 297.18,
            "temp_max": 297.18,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 977,
            "humidity": 88,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.53,
            "deg": 233
        },
        "visibility": 8049,
        "pop": 0.94,
        "rain": {
            "3h": 8.26
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-30 00:00:00"
    },
    {
        "dt": 1596078000,
        "main": {
            "temp": 296.88,
            "feels_like": 300.74,
            "temp_min": 296.88,
            "temp_max": 296.88,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 87,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.78,
            "deg": 43
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 2.48
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-30 03:00:00"
    },
    {
        "dt": 1596088800,
        "main": {
            "temp": 296.63,
            "feels_like": 300.21,
            "temp_min": 296.63,
            "temp_max": 296.63,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 978,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.86,
            "deg": 20
        },
        "visibility": 10000,
        "pop": 0.93,
        "rain": {
            "3h": 0.13
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-30 06:00:00"
    },
    {
        "dt": 1596099600,
        "main": {
            "temp": 296.02,
            "feels_like": 299.19,
            "temp_min": 296.02,
            "temp_max": 296.02,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 976,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.02,
            "deg": 39
        },
        "visibility": 10000,
        "pop": 0.02,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2020-07-30 09:00:00"
    },
    {
        "dt": 1596110400,
        "main": {
            "temp": 296.12,
            "feels_like": 299.18,
            "temp_min": 296.12,
            "temp_max": 296.12,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 977,
            "humidity": 85,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.12,
            "deg": 48
        },
        "visibility": 10000,
        "pop": 0.15,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-30 12:00:00"
    },
    {
        "dt": 1596121200,
        "main": {
            "temp": 302.03,
            "feels_like": 306.41,
            "temp_min": 302.03,
            "temp_max": 302.03,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 979,
            "humidity": 66,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 90
        },
        "wind": {
            "speed": 0.37,
            "deg": 282
        },
        "visibility": 10000,
        "pop": 0.35,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-30 15:00:00"
    },
    {
        "dt": 1596132000,
        "main": {
            "temp": 300.78,
            "feels_like": 304.99,
            "temp_min": 300.78,
            "temp_max": 300.78,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 977,
            "humidity": 77,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 93
        },
        "wind": {
            "speed": 1.66,
            "deg": 234
        },
        "visibility": 10000,
        "pop": 0.75,
        "rain": {
            "3h": 3.46
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-30 18:00:00"
    },
    {
        "dt": 1596142800,
        "main": {
            "temp": 298.68,
            "feels_like": 303.22,
            "temp_min": 298.68,
            "temp_max": 298.68,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 976,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.02,
            "deg": 221
        },
        "visibility": 6795,
        "pop": 0.9,
        "rain": {
            "3h": 7.65
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-30 21:00:00"
    },
    {
        "dt": 1596153600,
        "main": {
            "temp": 297.56,
            "feels_like": 302.28,
            "temp_min": 297.56,
            "temp_max": 297.56,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 977,
            "humidity": 87,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 0.05,
            "deg": 149
        },
        "visibility": 10000,
        "pop": 0.98,
        "rain": {
            "3h": 3.71
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2020-07-31 00:00:00"
    }
];


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path='/' component={() => <Weathers />}/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
