function init() {
  cities_arr = [ 'new york','london', 'alaska' , 'eilat']
  doApi();
}

function doApi() {
  for (let i = 0; i < cities_arr.length; i++) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cities_arr[i]}&units=metric&appid=21bfe76e4b5047875a7ee531ff8c0c17&lang=he`;

    $.get(url, function (resp) {
      console.log(resp);
      createAllWeathers(resp,i);
    })
  }
}



function createAllWeathers(_ar,row_num) {
  let weather = new WeatherClass(`#row${Math.floor(row_num/2)}`, _ar);
  weather.render();

}


init();
