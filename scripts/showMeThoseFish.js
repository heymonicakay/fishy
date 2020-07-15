
// Other components need to be able to access the (fish)Data, but they don't like it raw 

// This component collects each of the (fish)Objects....

const bunchOfFish = [

    // .... assigns the unique (fish)Properties to each one respectively...

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

// ... and would ya look at that! We've got a lovely little (fish)Array!

// This component is responsible for making the (fish)Data accessible to the other components
// In order to do that, the (fish)Data must be exported

export const getAFish = () => {
    //.slice -makes a copy!
    return bunchOfFish.slice()
    // because we don't want other components to mess with the stored data.
}

export const giveAFish = (fish) => {
    bunchOfFish.push(fish)
}