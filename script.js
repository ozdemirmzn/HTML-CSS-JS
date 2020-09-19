function stringChecker (item){
    let check = false;
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i<item.length; i++){
            if(str.indexOf(item[i]) === -1){
                check = true;
                break;
            }
    } return check;
}

window.addEventListener("load", function() {
    // json fetch
    
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
              
              response.json().then( function(json) {
                let destination = document.querySelector("div[id=missionTarget]");
                let randomPlanet = Math.floor(Math.random() * json.length);
                destination.innerHTML = `
                <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randomPlanet].name}</li>
               <li>Diameter: ${json[randomPlanet].diameter}</li>
               <li>Star: ${json[randomPlanet].star}</li>
               <li>Distance from Earth: ${json[randomPlanet].distance}</li>
               <li>Number of Moons: ${json[randomPlanet].moons}</li>
            </ol>
            <img src="${json[randomPlanet].image}">
                `;
              });
            });

    // form validation 
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let pilot = document.querySelector("input[name=pilotName]");
       let copilot = document.querySelector("input[name=copilotName]");
       let fuel = document.querySelector("input[name=fuelLevel]");
       let cargo = document.querySelector("input[name=cargoMass]");

    

              if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
                  alert("All fields are required!");
                  event.preventDefault();
              } else if(stringChecker(pilot.value) || stringChecker(copilot.value) ||
                    isNaN(fuel.value) || isNaN(cargo.value) || fuel.value < 0 || cargo.value < 0 ){
                    alert("Make sure to enter valid information for each field!");
                    event.preventDefault();
              }
              
    });
 });
