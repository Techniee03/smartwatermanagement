const waterValueElement = document.getElementById('waterValue');

// Simulate receiving real-time water consumption data
function getRandomWaterValue() {
    return (Math.random() * 100).toFixed(2); // Replace with actual data from IoT sensors
}

function updateWaterValue() {
    const waterValue = getRandomWaterValue();
    waterValueElement.textContent = `${waterValue} gallons`;
}

// Update water consumption data every 5 seconds
setInterval(updateWaterValue, 5000);

// Initial update
updateWaterValue();