const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Helper functions for temperature conversion
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function fahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

// API endpoints

// Convert Celsius to Fahrenheit and Kelvin
app.post('/convert/celsius', (req, res) => {
  const celsius = req.body.celsius;

  if (isNaN(celsius)) {
    return res
      .status(400)
      .json({ error: 'Invalid input. Please provide a number for Celsius.' });
  }

  const fahrenheit = celsiusToFahrenheit(celsius);
  const kelvin = celsiusToKelvin(celsius);

  res.json({ fahrenheit, kelvin });
});

// Convert Fahrenheit to Celsius and Kelvin
app.post('/convert/fahrenheit', (req, res) => {
  const fahrenheit = req.body.fahrenheit;

  if (isNaN(fahrenheit)) {
    return res
      .status(400)
      .json({
        error: 'Invalid input. Please provide a number for Fahrenheit.',
      });
  }

  const celsius = fahrenheitToCelsius(fahrenheit);
  const kelvin = fahrenheitToKelvin(fahrenheit);

  res.json({ celsius, kelvin });
});

// Convert Kelvin to Celsius and Fahrenheit
app.post('/convert/kelvin', (req, res) => {
  const kelvin = req.body.kelvin;

  if (isNaN(kelvin)) {
    return res
      .status(400)
      .json({ error: 'Invalid input. Please provide a number for Kelvin.' });
  }

  const celsius = kelvinToCelsius(kelvin);
  const fahrenheit = kelvinToFahrenheit(kelvin);

  res.json({ celsius, fahrenheit });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
