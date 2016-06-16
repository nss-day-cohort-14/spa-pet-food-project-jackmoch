var outputEl = document.getElementById('output')

function parseCatFood() {
  var catFood = JSON.parse(this.responseText);
  buildCatContainers(catFood);
  // Show usage of JSON.parse() here to get a POJO
}

function buildCatContainers(catObject) {
  var idCounter = 0;
  for (i = 0; i < catObject.cat_brands.length; i++) {
    idCounter++;
    var mainCatDiv = document.createElement('div');
    mainCatDiv.classList.add('mainCatDiv');
    var catBrandHeader = document.createElement('h1');
    catBrandHeader.id = "catBrandHeader" + [i];
    catBrandHeader.classList.add('catBrandHeader');
    mainCatDiv.appendChild(catBrandHeader);
    outputEl.appendChild(mainCatDiv);

    for (j = 0; j < catObject.cat_brands[i].breeds.length; j++) {
      idCounter++;
      var catBreedDiv = document.createElement('div');
      catBreedDiv.classList.add('catBreedDiv');
      mainCatDiv.appendChild(catBreedDiv);
      var catBreedHeader = document.createElement('h2');
      catBreedHeader.id = "catBreedHeader" + idCounter;
      catBreedHeader.classList.add('catBreedHeader');
      catBreedDiv.appendChild(catBreedHeader);

      for (k = 0; k < catObject.cat_brands[i].breeds[j].volumes.length; k++) {
        idCounter++;
        var catTypeDiv = document.createElement('div');
        catTypeDiv.classList.add('catTypeDiv');
        catBreedDiv.appendChild(catTypeDiv);
        var catTypeHeader = document.createElement('h3');
        catTypeHeader.id = "catTypeHeader" + idCounter;
        catTypeHeader.classList.add('catTypeHeader');
        catTypeDiv.appendChild(catTypeHeader);

        var catVolumeHeader = document.createElement('h4');
        catVolumeHeader.id = "catVolumeHeader" + idCounter;
        catVolumeHeader.classList.add('catVolumeHeader');
        catTypeDiv.appendChild(catVolumeHeader);

        var catPriceHeader = document.createElement('h4');
        catPriceHeader.id = "catPriceHeader" + idCounter;
        catPriceHeader.classList.add('catPriceHeader');
        catTypeDiv.appendChild(catPriceHeader);
      }
    }
  }
  buildCatFood(catObject);
}


function buildCatFood(catObject) {
  var idCounter = 0;
  for (i = 0; i < catObject.cat_brands.length; i++) {
    idCounter++;
    var currentCatBrand = catObject.cat_brands[i];
    var catBrand = currentCatBrand.name;
    document.getElementById(`catBrandHeader${i}`).innerText = catBrand;

    for (j = 0; j < currentCatBrand.breeds.length; j++) {
      idCounter++;
      var currentCatBreed = currentCatBrand.breeds[j];
      var catType = currentCatBreed.breed;
      var currentCatTypeHeader = document.getElementById(`catBreedHeader${idCounter}`);
      currentCatTypeHeader.innerText = catType;

      for (k = 0; k < currentCatBreed.volumes.length; k++) {
        idCounter++;
        var currentCatVolume = currentCatBreed.volumes[k];
        var catType = currentCatVolume.type;
        var currentCatTypeHeader = document.getElementById(`catTypeHeader${idCounter}`);
        currentCatTypeHeader.innerText = catType;

        var catVolume = currentCatVolume.size;
        var currentCatVolumeHeader = document.getElementById(`catVolumeHeader${idCounter}`);
        currentCatVolumeHeader.innerText = catVolume

        var catPrice = currentCatVolume.price;
        var currentCatPriceHeader = document.getElementById(`catPriceHeader${idCounter}`);
        currentCatPriceHeader.innerText = catPrice;
      }
    }
  }
}


// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", parseCatFood);
// myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "cats.json");

// Tell the XHR object to start
myRequest.send();