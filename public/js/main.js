


const submitbtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_c = document.getElementById('temp_c');
const temp_status = document.getElementById('temp-status');
const datahide = document.getElementsByClassName('middle-layer');


const getInfo = async(e) => {
    e.preventDefault();

    
    let cityVal = cityName.value;
    if(cityName === ""){
        city_name.innerText= 'please write the name before you search';
        datahide.classList.add('data-hide');

    }else{
        try {
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7c3eb2dc453e4aab3f9a977bae18f404`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            temp_c.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather.main;


            // condition to check sunny or cloudy

            if (tempMood == "clear") {
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68';></i>"
                
            }else if (tempMood == "clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6';></i>"
            }else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #a4b0be';></i>"
            }else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6';></i>"
            }

            

        }catch {
            city_name.innerText = 'please enter the name properly';
        }
    }

}
submitbtn.addEventListener('click', getInfo);


