const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".dog-gallery");
const button = document.querySelector(".add-dog");

function addNewDoggo() {
  fetch(DOG_URL)
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      img.className = "image";
      doggos.appendChild(img);
    });
}

button.addEventListener("click", addNewDoggo);
