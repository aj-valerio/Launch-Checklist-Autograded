// Write your JavaScript code here!//



window.addEventListener("load", function() {
    console.log("Page is loaded");
    window.setTimeout(function () { alert("All fields are required"); }, 1000);
    let form = document.querySelector("form");
    // let submitButton = document.getElementById("formSubmit");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");

        formSubmission(document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        console.log(form);
        event.preventDefault();
    
        // if (launchStatus.innerHTML === "Shuttle Not Ready for Launch"){
        //     event.preventDefault();
        //     alert("Shuttle Not Ready for Launch");
        // }
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