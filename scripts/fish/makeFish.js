    /** this function, "makeFish", is responsible for using the data contained within the Object, "thisFish", 
   * to "make" (return) the HTML representation of a <section> "fish--card" including all of the 
   * Properties in separate <div>s
   */

export const makeFish = (thisFish) => {

// we pass in the argument of "thisFish"
    // "thisFish" is an Object which includes all of the Properties of a single fish.
    // "thisFish" is contained withing the Array "bunchOfFish"

    return `
        <section class="fish card card--fish">
            <div><img  class="fish__image image--card" src="${thisFish.image}" /></div>
            <div class="fish__name">${thisFish.name}</div>
            <div class="fish__species">${thisFish.species}</div>
            <div class="fish__length">${thisFish.length}</div>
            <div class="fish__location">${thisFish.location}</div>
            <div class="fish__diet">${thisFish.food}</div>
        </section>
    `
}

// All of the data used in this component is stored, managed, and exported by the doc showMeThoseFish.js