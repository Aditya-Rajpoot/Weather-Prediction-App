import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import GrainIcon from '@mui/icons-material/Grain';
import FoggyIcon from '@mui/icons-material/Foggy';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

export default function InfoBox({ info }) {

    const URLS = {
        thunderstorm: "https://images.unsplash.com/photo-1559087867-ce4c91325525?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        drizzle:      "https://images.unsplash.com/photo-1556485689-33e55ab56127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rain:         "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        snow:         "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        clear_hot:    "https://plus.unsplash.com/premium_photo-1680995369588-502d70f0e3c8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        clear_mild:   "https://images.unsplash.com/photo-1703355333725-e6e034ac30cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        clouds:       "https://images.unsplash.com/photo-1659571420397-4b2b92862814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        mist:         "https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cold:         "https://images.unsplash.com/photo-1485870458886-d489883a6751?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

    const ICONS = {
        thunderstorm: <ThunderstormIcon sx={{ fontSize: 28 }} />,
        drizzle: <GrainIcon sx={{ fontSize: 28 }} />,
        rain: <GrainIcon sx={{ fontSize: 28 }} />,
        snow: <AcUnitIcon sx={{ fontSize: 28 }} />,
        mist: <FoggyIcon sx={{ fontSize: 28 }} />,
        clouds: <WbCloudyIcon sx={{ fontSize: 28 }} />,
        clear_hot: <SunnyIcon sx={{ fontSize: 28 }} />,
        clear_mild: <SunnyIcon sx={{ fontSize: 28 }} />,
        cold: <AcUnitIcon sx={{ fontSize: 28 }} />,
    };

    const condition = getCondition(info);

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <div className="glassCard">
                    <img className="cardImage" src={URLS[condition]} alt={condition} />

                    <div className="cardBody">
                        <p className="city">
                            {info.city} {ICONS[condition]}
                        </p>

                        <div className="heroTemp">
                            {Math.round(info.temp)}<span className="deg">°C</span>
                        </div>
                        <p className="condition">{info.weather}</p>

                        <div className="statsGrid">
                            <div className="stat">
                                <span className="statLabel">Feels like</span>
                                <span className="statValue">{Math.round(info.feelsLike)}°</span>
                            </div>
                            <div className="stat">
                                <span className="statLabel">Humidity</span>
                                <span className="statValue">{info.humidity}%</span>
                            </div>
                            <div className="stat">
                                <span className="statLabel">Min</span>
                                <span className="statValue">{Math.round(info.tempMin)}°</span>
                            </div>
                            <div className="stat">
                                <span className="statLabel">Max</span>
                                <span className="statValue">{Math.round(info.tempMax)}°</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}