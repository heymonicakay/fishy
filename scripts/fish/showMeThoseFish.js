/**This component is responsible for storing, managing, and exporting the raw data collection for Martin's Fish
 * This component sorts the data into individual fishObjects (thisFish) with their respective Properties, 
 * and puts them all into an Array (bunchOfFish)
 */

const bunchOfFish = [

    {
        name: "Puffy",
        food: "Cheeseburgers",
        species: "Pufferfish",
        length: 9,
        location: "Under The Sea",
        image: "./images/pufferfish-visible.jpeg"
    },
    {
        name: "Puffy",
        food: "Cheeseburgers",
        species: "Pufferfish",
        length: 9,
        location: "Under The Sea",
        image: "./images/pufferfish-visible.jpeg"
    },
    {
        name: "Puffy",
        food: "Cheeseburgers",
        species: "Pufferfish",
        length: 9,
        location: "Under The Sea",
        image: "./images/pufferfish-visible.jpeg"
    },
]

/** Other components need to be able to access the fish data stored and organized by this component
 * so this component must EXPORT the above information, in order to make it accessible by the other components*/ 


export const getBunchOfFish = () => {
    //.slice -makes a copy!
    return bunchOfFish.slice()
    // because we don't want other components to mess with the stored data.
}