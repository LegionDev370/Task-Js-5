let form = document.querySelector("form");
let input = document.querySelector("#input");
let btn = document.querySelector("button");
let calculateWalk = document.querySelector(".calculating-text-1");
let calculateVelo = document.querySelector(".calculating-text-2");
let calculateCar = document.querySelector(".calculating-text-3");
let calculateAir = document.querySelector(".calculating-text-4");
let walk = 3.6;
let velo = 20.1;
let car = 70;
let air = 800;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let inputValue = input.value;
  if (!isNaN(inputValue)) {
    if (inputValue > 0){
      let resultWalk = inputValue / walk;
      const resultMinWalk = resultWalk * 60;
      const resultMaxWalk = Math.floor(resultWalk) * 60;
      const resultMin = resultMinWalk - resultMaxWalk;
      calculateWalk.textContent = Math.floor(resultWalk) + " " + "soat" + " " + resultMin.toFixed(2) + "min";
      let resultVelo = inputValue / velo;
      const resultMinVelo = resultVelo * 60;
      const resultMaxVelo = Math.floor(resultVelo) * 60;
      const resultVeloSumm = resultMinVelo - resultMaxVelo;
      calculateVelo.textContent = Math.floor(resultVelo) + " " + "soat" + " " + resultVeloSumm.toFixed(2) + "min";
      let resultCar = inputValue / car;
      const resultMinCar = resultCar * 60;
      const resultMaxCar = Math.floor(resultCar) * 60;
      const resultCarSumm = resultMinCar - resultMaxCar;
      calculateCar.textContent = Math.floor(resultCar) + " " + "soat" + " " + resultCarSumm.toFixed(2) + "min";
      let resultAir = inputValue / air;
      const resultMinAir = resultAir * 60;
      const resultMaxAir = Math.floor(resultAir) * 60;
      const resultAirSumm = resultMinAir - resultMaxAir;
      calculateAir.textContent = Math.floor(resultAir) + " " + "soat" + " " + resultAirSumm.toFixed(2) + "min";
    }else{
      alert("Please greater than zero")
    }
  }else{
    alert("Please only enter numbers")
  }
});
