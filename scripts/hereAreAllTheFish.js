// gotta import
import {getAFish} from "./showMeThoseFish.js"


// gotta export
export const FishList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--left")

    // collection of fish from showMeThoseFish.js
    const allFish = getAFish()

    let digitalFish = ""
    for(const thisFish of allFish){
        digitalFish += FishAsHTML(currentFishObj)
    }

    // updating HTML of DOM element with Fish List HTML
    contentElement.innerHTML += `
        <article class="fish-list">
            ${digitalFish}
        </article>
    `

}