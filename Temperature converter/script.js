function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
  
    if (fromUnit === toUnit) {
      document.getElementById("result").innerHTML = "Please select different units.";
      return;
    }
  
    var result;
    if (fromUnit === "C") {
      if (toUnit === "F") {
        result = (temperature * 9 / 5) + 32;
      } else if (toUnit === "K") {
        result = temperature + 273.15;
      }
    } else if (fromUnit === "F") {
      if (toUnit === "C") {
        result = (temperature - 32) * 5 / 9;
      } else if (toUnit === "K") {
        result = (temperature + 459.67) * 5 / 9;
      }
    } else if (fromUnit === "K") {
      if (toUnit === "C") {
        result = temperature - 273.15;
      } else if (toUnit === "F") {
        result = (temperature * 9 / 5) - 459.67;
      }
    }
  
    document.getElementById("result").innerHTML = temperature + " " + fromUnit + " = " + result.toFixed(2) + " " + toUnit;
  }
  