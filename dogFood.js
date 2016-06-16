var outputEl = document.getElementById('output')

function parseDogFood() {
  var dogFood = JSON.parse(this.responseText);
  buildDogContainers(dogFood);
  // Show usage of JSON.parse() here to get a POJO
}

function buildDogContainers(dogObject) {
  var idCounter = 0;
  for (i = 0; i < dogObject.dog_brands.length; i++) {
    idCounter++;
    var mainDogDiv = document.createElement('div');
    mainDogDiv.classList.add('mainDogDiv');
    var dogBrandHeader = document.createElement('h1');
    dogBrandHeader.id = "dogBrandHeader" + [i];
    dogBrandHeader.classList.add('dogBrandHeader');
    mainDogDiv.appendChild(dogBrandHeader);
    outputEl.appendChild(mainDogDiv);

    for (j = 0; j < dogObject.dog_brands[i].types.length; j++) {
      idCounter++;
      var dogTypeDiv = document.createElement('div');
      dogTypeDiv.classList.add('dogTypeDiv');
      mainDogDiv.appendChild(dogTypeDiv);
      var dogTypeHeader = document.createElement('h2');
      dogTypeHeader.classList.add('dogTypeHeader');
      dogTypeHeader.id = "dogTypeHeader" + idCounter;
      dogTypeDiv.appendChild(dogTypeHeader);

      for (k = 0; k < dogObject.dog_brands[i].types[j].volumes.length; k++) {
        idCounter++;
        var dogVolumePriceDiv = document.createElement('div');
        dogVolumePriceDiv.classList.add('dogVolumePriceDiv');
        dogTypeDiv.appendChild(dogVolumePriceDiv);
        var dogVolumeHeader = document.createElement('h3');
        dogVolumeHeader.classList.add('dogVolumeHeader')
        dogVolumeHeader.id = "dogVolumeHeader" + idCounter;
        dogVolumePriceDiv.appendChild(dogVolumeHeader);

        var dogPriceHeader = document.createElement('h4');
        dogPriceHeader.classList.add('dogPriceHeader');
        dogPriceHeader.id = "dogPriceHeader" + idCounter;
        dogVolumePriceDiv.appendChild(dogPriceHeader);
      }
    }
  }
  buildDogFood(dogObject);
}


function buildDogFood(dogObject) {
  var idCounter = 0;
  for (i = 0; i < dogObject.dog_brands.length; i++) {
    idCounter++;
    var currentDogBrand = dogObject.dog_brands[i];
    var dogBrand = currentDogBrand.name;
    document.getElementById(`dogBrandHeader${i}`).innerText = dogBrand;

    for (j = 0; j < currentDogBrand.types.length; j++) {
      idCounter++;
      var currentDogType = currentDogBrand.types[j];
      var dogType = currentDogType.type;
      var currentDogTypeHeader = document.getElementById(`dogTypeHeader${idCounter}`);
      currentDogTypeHeader.innerText = dogType;

      for (k = 0; k < currentDogType.volumes.length; k++) {
        idCounter++;
        var currentDogVolume = currentDogType.volumes[k];
        var dogVolume = currentDogVolume.name;
        var currentDogVolumeHeader = document.getElementById(`dogVolumeHeader${idCounter}`);
        currentDogVolumeHeader.innerText = dogVolume

        var dogPrice = currentDogVolume.price;
        var currentDogPriceHeader = document.getElementById(`dogPriceHeader${idCounter}`);
        currentDogPriceHeader.innerText = dogPrice;
      }
    }
  }
}


// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", parseDogFood);
// myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "dogs.json");

// Tell the XHR object to start
myRequest.send();