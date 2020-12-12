// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover('http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg', 'Sunsets and Sorrows', 'sunsets', 'sorrows')
];
var title = document.querySelector('.cover-title');
var image = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var makeOwnPage = document.querySelector('.form-view');
var homePage = document.querySelector('.home-view');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var viewSavedPage = document.querySelector('.saved-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDescriptor1 = document.querySelector('#descriptor1');
var userDescriptor2 = document.querySelector('#descriptor2');
var createBookButton = document.querySelector('.create-new-book-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var currentCover = {};


// Add your event listeners here 👇
window.addEventListener('load', getRandomCover);
randomCoverButton.addEventListener('click', getRandomCover);
makeNewButton.addEventListener('click', showForm);
homeButton.addEventListener('click', goHome);
viewSavedButton.addEventListener('click', viewSaved);
createBookButton.addEventListener('click', createBook);
saveCoverButton.addEventListener('click', saveCover);
savedCoversSection.addEventListener('dblclick', deleteCover);



// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  title.innerText = titles[getRandomIndex(titles)];
  image.src = covers[getRandomIndex(covers)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(image.src, title.innerText, tagline1.innerText, tagline2.innerText);
}

function showForm() {
  makeOwnPage.classList.remove('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedPage.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
}

function goHome() {
  makeOwnPage.classList.add('hidden');
  homePage.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedPage.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function viewSaved() {
  makeOwnPage.classList.add('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedPage.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
      <div class="mini-cover">
        <img id=${savedCovers[i].id} class="mini-cover" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">
          A tale of
          <span class="tagline-1">${savedCovers[i].tagline1}</span>
          and
          <span class="tagline-2">${savedCovers[i].tagline2}</span>
        </h3>
      </div>
    `;
  }
}

function createBook() {
  event.preventDefault();
  image.src = userCover.value;
  title.innerText = userTitle.value;
  tagline1.innerText = userDescriptor1.value;
  tagline2.innerText = userDescriptor2.value;
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDescriptor1.value, userDescriptor2.value);
  currentCover = new Cover(image.src, title.innerText, tagline1.innerText, tagline2.innerText);
  goHome();
}

function saveCover() {
  if (savedCovers.includes(currentCover)) {
    return
  } else {
    savedCovers.push(currentCover);
  }
}


function deleteCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (event.target.id == savedCovers[i].id) {
      savedCovers.splice(i, 1);
    }
  }
  viewSaved();
}
