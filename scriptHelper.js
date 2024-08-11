// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput == ""){
        return "Empty";
    }
    else if (isNaN(testInput) === false){
        return "Is a Number";
    }
    else if (isNaN(testInput) === true){
        return "Not a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    let fuelLevelL = document.getElementById("fuelLevel");
    let cargoMassKg = document.getElementById("cargoMass");
    let faultyItemsList = document.getElementById("faultyItems");

    let validatePilotName = validateInput(pilotName.innerHTML);
    if (validatePilotName === "Empty"){
        window.alert("Pilot Name is required");
    }
    else if (validatePilotName === "Is a Number"){
        window.alert("Pilot Name Invalid");
    }
    else if (validatePilotName === "Not a Number"){
        faultyItemsList.pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    }

    let validateCopilotName = validateInput(copilotName.innerHTML);
    if (validateCopilotName === "Empty"){
        window.alert("Copilot Name is required");
    }
    else if (validateCopilotName === "Is a Number"){
        window.alert("Copilot Name Invalid");
    }
    else if (validateCopilotName === "Not a Number"){
        faultyItemsList.copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;
    } 

    let validateFuelLevel = validateInput(fuelLevelL.innerHTML);
    if (validateFuelLevel === "Empty"){
        window.alert("Fuel Level is required");
    }
    else if (validateFuelLevel === "Not a Number"){
        window.alert("Fuel Level Invalid");
    }
    else if (validateFuelLevel === "Is a Number"){
        if (fuelLevel < 10000){
            faultyItemsList.setAttribute("style", "visibility: visible");
            faultyItemsList.fuelStatus.innerHTML = `Fuel level too low for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "red";
        }
        else if (fuelLevel >=10000){
            faultyItemsList.fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }
    }

    let validateCargoMass = validateInput(cargoMassKg.innerHTML);
    if (validateCargoMass === "Empty"){
        window.alert("Cargo Mass is required");
    }
    else if (validateCargoMass === "Not a Number"){
        window.alert("Invalid Cargo Mass");
    }
    else if (validateCargoMass === "Is a Number"){
        if (cargoLevel > 10000){
            list.setAttribute("style", "visibility: visible");
            faultyItemsList.cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            faultyItemsList.style.color = "red";
        }
        else if (cargoLevel <= 10000){
            faultyItemsList.cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
        }
    }

    if (launchStatus.style.color = "green"){
        list.setAttribute("style", "visibility: visible");
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;