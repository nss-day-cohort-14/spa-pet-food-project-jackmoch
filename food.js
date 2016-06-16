var outputEl = document.getElementById('output')

function parseDogFood() {
  // A bit more about what `this` is here. What is the execution context?
  var dogFood = JSON.parse(this.responseText);
  buildContainers(dogFood);
  // buildDogFood(dogFood);
  // Show usage of JSON.parse() here to get a POJO
}

function buildContainers(dogObject) {
  idCounter = 0;
  for (i = 0; i < dogObject.dog_brands.length; i++) {
    idCounter++;
    console.log("", idCounter);
    mainDiv = document.createElement('div');
    brandHeader = document.createElement('h1');
    brandHeader.id = "brandHeader" + [i];
    mainDiv.appendChild(brandHeader);
    outputEl.appendChild(mainDiv);

    for (j = 0; j < dogObject.dog_brands[i].types.length; j++) {
      idCounter++;
      console.log("", idCounter);
      typeHeader = document.createElement('h2');
      typeHeader.classList.add("typeHeader" + [j]);
      mainDiv.appendChild(typeHeader);
    }
  }
  buildDogFood(dogObject);
}


function buildDogFood(dogObject) {
  for (i = 0; i < dogObject.dog_brands.length; i++) {
    var currentBrand = dogObject.dog_brands[i];
    var dogBrand = currentBrand.name;
    document.getElementById(`brandHeader${i}`).innerText = dogBrand;

    for (j = 0; j < currentBrand.types.length; j++) {
      var currentType = currentBrand.types[j];
      var dogType = currentType.type;
      var currentTypeHeader = document.getElementsByClassName(`typeHeader${j}`);
      // console.log("", currentTypeHeader);
      // console.log("", dogType);
      currentTypeHeader = currentTypeHeader[j];
      // console.log("", currentTypeHeader);
      // console.log("", dogType);
      // currentTypeHeader.innerText = dogType;
      // console.log("", dogType);

      //     for (k = 0; k < currentType.volumes.length; k++) {
      //       //create an element to store content
      //       volumeHeader = document.createElement('h3');
      //       //store current object
      //       currentVolume = currentType.volumes[k];
      //       //store string to be placed into content element
      //       dogVolume = currentVolume.name;
      //       //place string in content element
      //       volumeHeader.innerText = dogVolume;
      //       //append content element to main element
      //       mainDiv.appendChild(volumeHeader);
      //       // console.log("", currentType.volumes[k].name);


      //       priceHeader = document.createElement('h4');
      //       dogPrice = currentVolume.price;
      //       priceHeader.innerText = dogPrice;
      //       mainDiv.appendChild(priceHeader);

      //       outputEl.appendChild(mainDiv);
    }
    //   }
  }
}









// function buildDogFood(dogObject) {
//   for (var i = 0; i < dogObject.dog_brands.length; i++) {
//     var mainDiv = document.createElement('div')
//     var brandHeader = document.createElement('h2');
//     mainDiv.appendChild(brandHeader)
//     var currentBrand = dogObject.dog_brands[i];
//     var dogBrand = currentBrand.name;
//     brandHeader.innerText = dogBrand;

//     for (var j = 0; j < currentBrand.types.length; j++) {
//       var typeHeader = document.createElement('h4');
//       var currentType = currentBrand.types[j];
//       var dogType = currentType.type;
//       typeHeader.innerText = dogType
//       mainDiv.appendChild(typeHeader);

//       for (var k = 0; k < currentType.volumes.length; k++) {
//         var namePara = document.createElement('p');
//         var currentVolume = currentType.volumes[k];
//         var dogName = currentVolume.name;
//         namePara.innerText = dogName;
//         mainDiv.appendChild(namePara)

//         var pricePara = document.createElement('p');
//         var dogPrice = currentVolume.price;
//         pricePara.innerText = dogPrice;
//         mainDiv.appendChild(pricePara);
//       }
//       outputEl.appendChild(mainDiv);
//     }
//   }
// }

// for (var thing in dogObject) {
//   var currentThing = dogObject[thing];
//   // console.log(">>>", thing);
//   // console.log(">>>", dogObject[thing]);
//   for (var nextThing in currentThing) {
//     var brandThing = currentThing[nextThing];
//     // console.log("????", nextThing);
//     // console.log("????", currentThing[nextThing]);
//     for (var guessWhat in brandThing) {
//       // console.log("Hey:", brandThing[guessWhat]);
//     }
//   }
// }

// function doSomething(yarp) {
//   for (var p = 0; p < yarp.types.length; p++) {
//     console.log("HRY", yarp.types[p]);
//   }
//   console.log(yarp);
// }

// dogObject.dog_brands.forEach(doSomething)





// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", parseDogFood);
// myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "dogs.json");

// Tell the XHR object to start
myRequest.send();


// outputEl.innerHTML += ` 
//     <div>
//       <h2>${dogObject.dog_brands[0].name}</h2>
//       <h3>${dogObject.dog_brands[0].types[0].type}</h3>
//       <h3>${dogObject.dog_brands[0].types[0].volumes[0].name}</h3>
//       <h3>${dogObject.dog_brands[0].types[0].volumes[0].price}</h3>
//       <h3>${dogObject.dog_brands[0].types[0].volumes[1].name}</h3>
//       <h3>${dogObject.dog_brands[0].types[0].volumes[1].price}</h3>
//       <h3>${dogObject.dog_brands[0].types[1].type}</h3>
//       <h3>${dogObject.dog_brands[0].types[1].volumes[0].name}</h3>
//       <h3>${dogObject.dog_brands[0].types[1].volumes[0].price}</h3>
//       <h3>${dogObject.dog_brands[0].types[1].volumes[1].name}</h3>
//       <h3>${dogObject.dog_brands[0].types[1].volumes[1].price}</h3>

//       <h2>${dogObject.dog_brands[1].name}</h2>
//       <h3>${dogObject.dog_brands[1].types[0].type}</h3>
//       <h3>${dogObject.dog_brands[1].types[0].volumes[0].name}</h3>
//       <h3>${dogObject.dog_brands[1].types[0].volumes[0].price}</h3>
//       <h3>${dogObject.dog_brands[1].types[0].volumes[1].name}</h3>
//       <h3>${dogObject.dog_brands[1].types[0].volumes[1].price}</h3>
//       <h3>${dogObject.dog_brands[1].types[1].type}</h3>
//       <h3>${dogObject.dog_brands[1].types[1].volumes[0].name}</h3>
//       <h3>${dogObject.dog_brands[1].types[1].volumes[0].price}</h3>
//       <h3>${dogObject.dog_brands[1].types[1].volumes[1].name}</h3>
//       <h3>${dogObject.dog_brands[1].types[1].volumes[1].price}</h3>                
//     </div>
//   `