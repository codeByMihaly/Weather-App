const weather = async function fetchWeather(location, unit = "metric") {
  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=FXXNUQBR8DRNNEDKXEQV8YWNJ`,
    );

    const response = await data.json();
    return response;
  } catch (e) {
    console.log(`Error: ${e}`);
    return null;
  }
};

export default weather;
