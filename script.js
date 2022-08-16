//String MUST contain a . for it to be added some commas
function commaIfy(str) {
	let periodPosition = str.search(/\./);
	  console.log(periodPosition);
	while (true) {
	  if (periodPosition >= 4) {
		periodPosition -= 3;
		  str = str.slice(0, periodPosition) + "," + str.slice(periodPosition);
	  } else {break;}
	}
	  return str;
  }
  
  function refresh(){
  
  let text = document.getElementById("text");
  let text2 = document.getElementById("text2");
  let text3 = document.getElementById("text3");
  
  let startTime = new Date("June 20, 2020 13:35:00");
  let currentTime = new Date();
  
  let diffTime = currentTime.getTime() - startTime.getTime();
  
  
  let periods = ((((diffTime / 1000) / 60) / 60) / 24) / 7;
  
  function round(n){
	  return Math.floor((n * 100) + .5) / 100
  };
  
  console.log(periods);
  
  let princ = 110.02663454759562 - 55.01; //principle
  let r = .1; //Interest rate
  let n = 7; //number of times interest applied per time period
  let t = periods; //periods
  
  let moneyOwed = princ * Math.pow((1 + (r/n)), n * t);
  let roundedMoney = round(moneyOwed)
  
  text.textContent = "You owe me: " + commaIfy(moneyOwed.toString())
  text2.textContent = "Or: $" + commaIfy(roundedMoney.toString())
  text3.textContent = "Total money gained from this loan: $" + commaIfy(round(roundedMoney - 100).toString());
  }
  refresh()