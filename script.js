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

    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
       let pilot = document.querySelector("input[name=pilotName]");
       let copilot = document.querySelector("input[name=copilotName]");
       let fuel = document.querySelector("input[name=fuelLevel]");
       let cargo = document.querySelector("input[name=cargoMass]");

       let launchStatus = document.getElementById("launchStatus");
       let faultyItems = document.getElementById("faultyItems");
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let cargoStatus = document.getElementById("cargoStatus");

       // shuttle status

       pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`;
       copilotStatus.innerHTML= `Co-pilot ${copilot.value} is ready for launch`;
       if(fuel.value>=10000){
            fuelStatus.innerHTML= `Fuel level is good enough for launch`;}
       else{fuelStatus.innerHTML= `Fuel level is too low for launch`;}
       if(cargo.value<10000){
           cargoStatus.innerHTML = `Cargo mass is low enough for launch`;}
       else{
            cargoStatus.innerHTML = `Cargo mass is too high for launch`;}

        if(fuel.value>=10000 && cargo.value<10000){
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
            faultyItems.style.visibility = "visible";

        }else{
            launchStatus.innerHTML = `Shuttle is not ready for launch`;
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
        }


            // form validation 

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
