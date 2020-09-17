window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let pilot = document.querySelector("input[name=pilotname]");
       let copilot = document.querySelector("input[name=copilotname]");
       let fuel = document.querySelector("input[name=fuellvl]");
       let cargo = document.querySelector("input[name=cargomass]");

              if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
                  alert("All fields are required!");
                  event.preventDefault();
              } else if(pilot.value.toLoweCase() != pilot.value.toUpperCase() || copilot.value.toLoweCase() != copilot.value.toUpperCase() ||
                    isNaN(fuel.value) || isNaN(cargo.value) ){
                    alert("Make sure to enter valid information for each field!");
                    event.preventDefault();
              }
              
              
    });
 });