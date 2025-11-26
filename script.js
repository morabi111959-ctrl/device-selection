const API_URL = "https://script.google.com/macros/s/AKfycbw-o7dawL3afXj3KmfmXiHyZzYUWYollsb1fB4oNhJ4Q4DyZ7u945tFlT9WK1Kw-May/exec";

async function fetchDevices() {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderDevices(data);
}

function renderDevices(data) {
    const container = document.getElementById("devices");
    container.innerHTML = "";

    data.forEach(device => {
        const box = document.createElement("div");
        box.className = "device-box";

        box.innerHTML = `
            <h3>${device.device}</h3>
            <p>Available: ${device.available}</p>
        `;

        container.appendChild(box);
    });
}

fetchDevices();
