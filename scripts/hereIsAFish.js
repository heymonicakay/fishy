// export because this component does something that no other module does 
// export because the task this component performs is vital to the survival of other modules in this doc
// export because sharing is caring

export const cookedFish = (rawFish) => {

    // 
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="${rawFish.image}" /></div>
            <div class="fish__name">${rawFish.name}</div>
            <div class="fish__species">${rawFish.species}</div>
            <div class="fish__length">${rawFish.length}</div>
            <div class="fish__location">${rawFish.location}</div>
            <div class="fish__diet">${rawFish.food}</div>
        </section>
    `
}