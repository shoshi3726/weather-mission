class WeatherClass {
    constructor(_parent, _item) {
        console.log(_item)
        this.parent = _parent;
        console.log(this.parent)
        this.city = _item.name;
        this.weather_description = _item.weather[0].description;
        this.temp = _item.main.temp;
        this.feels_like = _item.main.feels_like;
        this.humidity = _item.main.humidity;
        if (this.temp < 20) {
            this.weather_icon = `<i class="fa fa-thermometer-empty fa-3x" style="color: blue;"></i>`
        }
        else if (this.temp < 30 && this.temp >= 20) {
            this.weather_icon = `<i class="fa fa-thermometer-half fa-3x" style="color: yellow;"></i>`

        }
        else {
            this.weather_icon = `<i class="fa fa-thermometer-full fa-3x" aria-hidden="true" style="color: red;"></i>
            `
        }
        //   this.weather_icon = _item.weather[0].icon;
    }

    render() {


        let div = document.createElement("div");
        div.className = "col-md-5 p-2 shadow";
        document.querySelector(this.parent).append(div);
        div.innerHTML += `
        <div class="card text-right">
        <div class="card-body">
        <div class="row justify-content-between mb-5 p-3">

                  <div class="col-md-5">
                      <h4 class="card-title" style="white-space: nowrap;">${this.city}</h4>
                      <p class="card-text text-secondary" style="white-space: nowrap;"> ${this.weather_description}</p>
                  </div>
                  <div class="icon pl-4">
                      ${this.weather_icon}
                  </div>
              </div>
              <div class="row justify-content-around">
                  <div class="col-md-4">
                  <p class="my-2">טמפ' נמדדת:</p>
                  <h4>${this.temp}°C</h4>
                  </div>
                  <div class="col-md-4">
                  
                  <p class="my-2" style="overflow-wrap: nowrap">טמפ' מורגשת:</p>
                  <h4>${this.feels_like}°C</h4>
                  </div>
                  <div class="col-md-4">
                  
                  <p class="my-2" style="overflow-wrap: break-word;">לחות:</p>
                  <h4>${this.humidity}%</h4>
                  </div>
              </div>
          </div>
      </div>
      `
    }

}
