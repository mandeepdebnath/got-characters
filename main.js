const url = "https://thronesapi.com/api/v2/Characters";


//Function to call API
async function getCharacters() {
  try {
    let res = await fetch(url); //fetching the data from API
    return await res.json();  //converting the promise into JSON
  } catch (error) {
    console.log(error);
  }
}
//<--------!!-------->
async function renderUsers() {
  let characters = await getCharacters();
  console.log(characters);
  let html = "";

  characters.forEach((character) => {
    let htmlSegment = `<div class="character d-flex justify-content-between my-2 p-3 col-sm-5">
    <div class="info">
    <h3 id="name">${character.fullName}</h3>
    <h5>aka "${character.title}"</h5>
    <span>Family: ${character.family}</span>
    
    </div>
    <img src="${character.imageUrl}" alt="image not found"/>
  </div>`;

    html += htmlSegment;
  });

  let characterCard = document.querySelector(".characterCard");
  characterCard.innerHTML = html;

  // characterElement.appendChild(nameElement);
}

renderUsers();