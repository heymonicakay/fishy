import {getBunchOfFish} from "./showMeThoseFish.js"

// The function "getBunchOfFish" pulls in the copy of the Array, "bunchOfFish"
// Now that Array can be used in this component. 

// The function getBunchOfFish needs a container (VARIABLE) to put the Array "bunchOfFish" into

const fishTank = getBunchOfFish()

// Now the VAR fishTank contains a copy of the ARRAY bunchOfFish which contains all the fish (OBJECTS) and their PROPERTIES
// To iterate over that array, we write a FOR OF loop. 

for (const thisFish of fishTank) {

    // We want the log the data of each individual fish Object contained in the Array.
    // We have called those Objects "thisFish"
    console.log(thisFish)
}
