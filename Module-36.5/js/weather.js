const API_KEY = 'df413e09da72740809f4a7e112fae254';

const loadTemperature = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemperature(data)
}

const displayTemperature = (data) => {
    const temp = document.getElementById('temperature');
    const status = document.getElementById('status');
    const cityName = document.getElementById('city-name');
    temp.innerText = data.main.temp;
    status.innerText = data.weather[0].main;
    cityName.innerText = data.name;
    console.log(data)
};

document.getElementById('search-btn').addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    loadTemperature(searchText);
    inputField.value = '';
})



loadTemperature('california');