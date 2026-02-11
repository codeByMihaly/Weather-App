const weather = async function fetchWeather() {
  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formInput.value}?key=FXXNUQBR8DRNNEDKXEQV8YWNJ`,
    );
    const response = await data.json();
    console.log(response);
    return response;
  } catch (e) {
    console.log(`Error: ${e}`);
    return null;
  }
};

export default weather;
