
function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitSelectFrom = document.getElementById('unitSelectFrom').value;
    const unitSelectTo = document.getElementById('unitSelectTo').value;
    let convertedTemp = 0;
    
    if (unitSelectFrom === 'fahrenheit' && unitSelectTo === 'celsius') {
        convertedTemp = (tempInput - 32) * 5/9;
    } else if (unitSelectFrom === 'celsius' && unitSelectTo === 'fahrenheit') {
        convertedTemp = (tempInput * 9/5) + 32;
    } else if (unitSelectFrom === 'celsius' && unitSelectTo === 'kelvin') {
        convertedTemp = tempInput + 273.15;
    } else if (unitSelectFrom === 'kelvin' && unitSelectTo === 'celsius') {
        convertedTemp = tempInput - 273.15;
    }
    else if(unitSelectFrom === 'fahrenheit' && unitSelectTo === 'kelvin'){
        convertedTemp = (tempInput-32)*5/9+273.15;
    }
    else if(unitSelectFrom === 'kelvin' && unitSelectTo === 'fahrenheit'){
        convertedTemp = (tempInput-273.15)*9/5+32;
    }
    document.getElementById('result').textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}°`;
}
