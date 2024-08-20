// Write your JavaScript code here!//

// const { pickPlanet } = require("./scriptHelper");



window.addEventListener("load", function() {
    console.log("Page is loaded");
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilotNameField = document.querySelector("input[name=pilotName]");
        let pilot = pilotNameField.value;
        let copilotNameField = document.querySelector("input[name=copilotName]");
        let copilot = copilotNameField.value;
        let fuelLevelField = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevelField.value;
        let cargoMassField = document.querySelector("input[name=cargoMass]");
        let cargoMass = cargoMassField.value;
        console.log(pilot, copilot, fuelLevel, cargoMass);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });
    
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets);
    console.log(planet);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
});