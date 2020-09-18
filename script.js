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
              } else if(stringChecker(pilot.value) || stringChecker(copilot.value) ||
                    isNaN(fuel.value) || isNaN(cargo.value) || fuel.value < 0 || cargo.value < 0 ){
                    alert("Make sure to enter valid information for each field!");
                    event.preventDefault();
              }
              
    });
 });


//  pilot.value.toLowerCase() != pilot.value.toUpperCase() || copilot.value.toLowerCase() != copilot.value.toUpperCase() ||