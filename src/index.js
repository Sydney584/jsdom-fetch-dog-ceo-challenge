console.log('%c HI', 'color: firebrick')
console.log('%c HI', 'color: firebrick')
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
  const breeds = [];

  document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    
  });
  
 const breedUrl = "https://dog.ceo/api/breeds/list/all"
 fetch(breedUrl)
 .then(res=> res.json())
 .then(results => {
     results.message.forEach()
 })
