function calcWater() {
    const weight = +document.getElementById("weight").value;
    const activity = document.getElementById("activity").value;
    if (!weight) {
        document.getElementById("output").innerText = "Please enter your weight.";
        return;
    }
    let multiplier = 0.5;
    if (activity === "moderate") multiplier = 0.6;
    if (activity === "active") multiplier = 0.7;
    const ounces = (weight * multiplier).toFixed(1);
    const liters = (ounces * 0.0296).toFixed(1);
    const cups = (ounces / 8).toFixed(1);
    const gallons = (ounces / 128).toFixed(2);
    document.getElementById("output").innerText = `You should drink about ${ounces} oz (${liters} liters) of water daily.`;
}