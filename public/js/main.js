const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event) => {
    event.preventDefault();
    let city = cityName.value;
    

    if(city === "") {
        city_name.innerText = "Please write you city name first...";
        temp.innerText = "0";
    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e47e45dac0983e7309dc097853a778f5`;
            const response = await fetch(url);
            const jsonObj = await response.json();
            const arrayData = [jsonObj];
            console.log(jsonObj);
            city_name.innerText = `Temprature of ${arrayData[0].name}, ${arrayData[0].sys.country} is:`
            temp.innerText = arrayData[0].main.temp;
            tempCondition = arrayData[0].weather[0].main; 
            
            if(tempCondition == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: yellow;' aria-hidden='true'></i>";
            } else if(tempCondition == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: gray;' aria-hidden='true'></i>";
            } else if(tempCondition == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: blue;' aria-hidden='true'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: yellow;' aria-hidden='true'></i>";
            }

        }catch {
            city_name.innerText = "Invalid city name!!  ";
            temp.innerText = "0";
        }
    }
}

submitBtn.addEventListener('click', getInfo);