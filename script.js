// Write your JavaScript code here!//

// const { pickPlanet } = require("./scriptHelper");



window.addEventListener("load", function() {
    console.log("Page is loaded");
    let form = document.querySelector("form");
    // let submitButton = document.getElementById("formSubmit");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        list = document.getElementById("faultyItems");
        pilot = document.querySelector("input[name=pilotName]");
        copilot = document.querySelector("input[name=copilotName]");
        fuelLevel = document.querySelector("input[name=fuelLevel]");
        cargoMass = document.querySelector("input[name=cargoMass]");

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
        // console.log(list.style.visibility);
        event.preventDefault();
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