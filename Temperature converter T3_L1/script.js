// Function to convert temperature
function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const conversionType = document.getElementById("conversionType").value;
    let result;

    if (conversionType === "celsius") {
        result = (inputTemp * 9/5) + 32;
    } else {
        result = (inputTemp - 32) * 5/9;
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)}°${conversionType === "celsius" ? "F" : "C"}`;
}

// Add event listener to the "Convert" button
document.getElementById("convertBtn").addEventListener("click", convertTemperature);
