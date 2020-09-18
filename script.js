window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let pilot = document.querySelector("input[name=pilotname]");
       let copilot = document.querySelector("input[name=copilotname]");
       let fuel = document.querySelector("input[name=fuellvl]");
       let cargo = document.querySelector("input[name=cargomass]");

    //    alert(isNaN(fuel.value));

              if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
                  alert("All fields are required!");
                  event.preventDefault();
              } else if(!isNaN(pilot.value) ||
                    isNaN(fuel.value) || isNaN(cargo.value) ){
                    alert("Make sure to enter valid information for each field!");
                    event.preventDefault();
              }
              
    });
 });


//  pilot.value.toLowerCase() != pilot.value.toUpperCase() || copilot.value.toLowerCase() != copilot.value.toUpperCase() ||