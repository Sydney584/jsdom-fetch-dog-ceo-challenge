console.log('%c HI', 'color: firebrick')
let breeds = [];
document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    loadBreedTypes();
  });
function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res=> res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }
  function addImage(dogImgUrl) {
    const container = document.querySelector('#dog-image-container');
     newImageEl = document.createElement('img');
    newImageEl.src = dogImgUrl;
    container.appendChild(newImageEl);
  }
 
  
function loadBreedTypes() {
const breedUrl = "https://dog.ceo/api/breeds/list/all"
fetch(breedUrl)
.then(res=> res.json())
.then(results => {
    breeds = Object.keys(results.message);
    updateBreedList(breeds);
    addBreedSelectListener();
});
}
function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }
