/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")

const addString = planets.forEach(function (planet){
    const newListItem = document.createElement('li')
    newListItem.innerHTML = planet;
    planetEl.appendChild(newListItem);
})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


const upperPlanets = planets.map(function (planet) {
    return planet.charAt(0).toUpperCase().concat(planet.slice(1).toLocaleLowerCase());

})
console.log(upperPlanets);
    

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const containesAnE = planets.filter(planet => {
    const hasE = planet.includes('e')
    return hasE
})
console.log(containesAnE);


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const makeSentence = words.reduce(
    (current, next) => current + " " + next
)
console.log(makeSentence)