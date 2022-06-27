console.log('%c HI', 'color: firebrick')
// Everything in here will load when the page is loaded
document.addEventListener('DOMContentLoaded', () => {

// On page load, fetches the images using the url above - from Challenge 1
    getBreeds()
// on page load, fetches all the dog breeds using the url above - from Challenge 2
    getDogBreeds() 
    addBreedNamesToDom(dogBreeds)
})

// doing this allows us to access the variable locally
let dogBreeds = []

// Challenge 1
function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        return fetch(imgUrl)
// parses the response as JSON
         .then(response => response.json())
         .then(response => {
            //console.log("response", response.message)
            const dogImageContainer = document.getElementById('dog-image-container')
// adds image elements to the DOM for each 🤔 image in the array
            response.message.forEach(url => {
                const img = document.createElement('img')
                img.src = url
                dogImageContainer.append(img);
            })
            
    })
}
// function dogImg() {
//     const picture = document.getElementById('"dog-image-container"')
//     picture.createElement('img');
//     img.src = "https://dog.ceo/api/breeds/image/rand om/4"
//     img.alt = "Dog Image"
//     picture.appendChild(img);}

// CHALLENGE 2
function getDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
        .then(response => response.json())
        .then(response => {
// Adds the breeds to the page in the <ul> provided in index.html - no longer need a const bc we made dogBreeds a global scop
            dogBreeds = Object.keys(response.message)
            addBreedNamesToDom(dogBreeds)
            
        })
}

// This function stores all the breed names and creates a list of them and adds it to DOM
function addBreedNamesToDom(dogBreeds) {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const ul = document.querySelector('#dog-breeds')
    dogBreeds.map(breed => {
        const li = document.createElement('li')
        li.textContent = breed
        ul.append(li)
    })
}

// CHALLENGE 3
// Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.
// structuring all event listeners in one spot - keeps code cleaner
document.addEventListener('click', event => {
    if(event.target.matches('li')) {
        event.target.style.color = 'pink'
    }
})

// CHALLENGE 4 
document.addEventListener('change', event => {
    if(event.target.matches('#breed-dropdown')) {
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ""
        const filteredBreeds = dogBreeds.filter(breed => dogBreeds[0] === event.target.value)
        addBreedNamesToDom(filteredBreeds)
        // ^ calling this function with an updated version after the innerHTML has been cleared
    }
})
