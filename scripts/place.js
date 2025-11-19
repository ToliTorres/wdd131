// FOOTER DATE
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// WEATHER LOGIC
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

function calculateWindChill(T, V) {
    return (
        13.12 +
        0.6215 * T -
        11.37 * Math.pow(V, 0.16) +
        0.3965 * T * Math.pow(V, 0.16)
    ).toFixed(1);
}

let windChillValue = "N/A";

// Conditions for viable wind chill (°C, km/h)
if (temp > 10 && wind <= 4.8) {
    windChillValue = calculateWindChill(temp, wind) + " °C";
}

document.getElementById("windchill").textContent = windChillValue;