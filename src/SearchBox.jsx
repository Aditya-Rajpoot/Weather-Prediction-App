import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

   let handleSubmit = async (event) => {
    try {
        event.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);   
    } catch (err) {
        setError(true);
    }
}

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    sx={{
                        input: { color: "#fff" },
                        label: { color: "rgba(255,255,255,0.7)" },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            background: "rgba(255,255,255,0.08)",
                            backdropFilter: "blur(10px)",
                            "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                            "&:hover fieldset": { borderColor: "rgba(255,255,255,0.6)" },
                            "&.Mui-focused fieldset": { borderColor: "#fff" },
                        },
                    }}
                />
                <br />
                <br />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        borderRadius: "12px",
                        px: 4,
                        py: 1.2,
                        background: "linear-gradient(135deg, #ff8c42, #ff5f6d)",
                        boxShadow: "0 4px 20px rgba(255,95,109,0.4)",
                        "&:hover": { background: "linear-gradient(135deg, #ff5f6d, #ff8c42)" },
                    }}
                >
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    )
}