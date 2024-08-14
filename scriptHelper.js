// Write your helper functions here!

require('cross-fetch/polyfill');

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
//  }

let missionTarget = document.getElementById("missionTarget");
 
 function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }
    else if (isNaN(testInput) === true){
        return "Not a Number";
    }
    else if (isNaN(testInput) === false){
        return "Is a Number";
    }
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevelL = document.querySelector("input[name=fuelLevel]");
    const cargoMassKg = document.querySelector("input[name=cargoMass]");
    let faultyItemsList = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let readyToLaunch = true;
    
    let validatePilotName = validateInput(pilotName.value);
    if (validatePilotName === "Empty"){
        readyToLaunch = false;
    }
    else if (validatePilotName === "Is a Number"){
        readyToLaunch = false;
    }
    else if (validatePilotName === "Not a Number"){
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
    }

    let validateCopilotName = validateInput(copilotName.value);
    if (validateCopilotName === "Empty"){
        // alert("Copilot Name is required");
        readyToLaunch = false;
    }
    else if (validateCopilotName === "Is a Number"){
        // alert("Copilot Name Invalid");
        readyToLaunch = false;
    }
    else if (validateCopilotName === "Not a Number"){
        copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
    } 

    let validateFuelLevel = validateInput(fuelLevelL.value);
    if (validateFuelLevel === "Empty"){
        // alert("Fuel Level is required");
        readyToLaunch = false;
    }
    else if (validateFuelLevel === "Not a Number"){
        // alert("Fuel Level Invalid");
        readyToLaunch = false;
    }
    else if (validateFuelLevel === "Is a Number"){
        if (fuelLevelL.value < 10000){
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            // bracket notation?
            launchStatus.style["color"] = "red";
            faultyItemsList.style["visibility"] = "visible";
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            readyToLaunch = false;
        }
        else if (fuelLevelL >= 10000){
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }
    }

    let validateCargoMass = validateInput(cargoMassKg.innerHTML);
    if (validateCargoMass === "Empty"){
        // window.alert("Cargo Mass is required");
        readyToLaunch = false;
    }
    else if (validateCargoMass === "Not a Number"){
        // window.alert("Invalid Cargo Mass");
        readyToLaunch = false;
    }
    else if (validateCargoMass === "Is a Number"){
        if (cargoMassKg > 10000){
            // bracket notation?
            faultyItemsList.style.visibility = "visible";
            faultyItemsList.cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "red";
            readyToLaunch = false;
        }
        else if (cargoMassKg <= 10000){
            faultyItemsList.cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
        }
    }

    if (readyToLaunch === true){
        launchStatus.style.color = "green";
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
//  module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet;
 module.exports.myFetch = myFetch;