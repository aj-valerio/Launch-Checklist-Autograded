// Write your JavaScript code here!//

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function(event) {
    console.log("Page is loaded");
    window.alert("All fields are required");
    let form = document.querySelector("form");
    let submitButton = document.getElementById("formSubmit");
    submitButton.addEventListener("click", function(event){
        console.log(form);
        event.preventDefault();
        formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
        event.preventDefault();
        if (launchStatus.innerHTML === "Shuttle Not Ready for Launch"){
            event.preventDefault();
            alert("Shuttle Not Ready for Launch");
        }
        event.preventDefault();
    });
    
    
    

    // let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    
 });