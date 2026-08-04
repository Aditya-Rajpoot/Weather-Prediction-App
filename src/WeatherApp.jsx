import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

const GRADIENTS = {
    thunderstorm: "var(--grad-thunderstorm)",
    drizzle: "var(--grad-drizzle)",
    rain: "var(--grad-rain)",
    snow: "var(--grad-snow)",
    clear_hot: "var(--grad-clear_hot)",
    clear_mild: "var(--grad-clear_mild)",
    clouds: "var(--grad-clouds)",
    mist: "var(--grad-mist)",
    cold: "var(--grad-cold)",
};

function getCondition(info) {
    const weather = info.weather?.toLowerCase() || "";
    if (weather.includes("thunderstorm")) return "thunderstorm";
    if (weather.includes("drizzle")) return "drizzle";
    if (weather.includes("rain") || info.humidity > 80) return "rain";
    if (weather.includes("snow") || info.temp < 5) return "snow";
    if (weather.includes("mist") || weather.includes("haze") || weather.includes("fog")) return "mist";
    if (weather.includes("cloud")) return "clouds";
    if (info.temp > 30) return "clear_hot";
    if (info.temp > 15) return "clear_mild";
    return "cold";
}

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 39.65,
        humidity: 53,
        temp: 34.09,
        tempMax: 34.09,
        tempMin: 34.09,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    const condition = getCondition(weatherInfo);

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
        }}>
            <div style={{
                width: "100%",
                maxWidth: "460px",
                borderRadius: "32px",
                background: GRADIENTS[condition],
                transition: "background 1.2s ease",
                boxShadow: "0 25px 70px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "40px 28px 48px",
            }}>
                <h1 style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "34px",
                    margin: "0 0 32px",
                    letterSpacing: "-0.5px",
                    textShadow: "0 4px 20px rgba(0,0,0,0.3)"
                }}>
                    Weather Prediction App
                </h1>
                <SearchBox updateInfo={updateInfo} />
                <br />
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    )
}