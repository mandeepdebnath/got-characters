const url = "https://thronesapi.com/api/v2/Characters";
const searchInput = document.querySelector(".searchInput");
let gotCharacters = [];

//Function to call API
async function getCharacters() {
  try {
    let res = await fetch(url); //fetching the data from API
    gotCharacters = await res.json(); //converting the promise into JSON data
    renderCharacters(gotCharacters); //running the function to display characters with the fetched data
    console.log(gotCharacters);
  } catch (error) {
    console.log(error);
  }
}
getCharacters();
//<--------!!-------->

//Function to render and display all characters from API
async function renderCharacters(characters) {
  let html = "";

  characters.map((character) => {
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
}
//<--------!!-------->

//Function to render and display filtered character based on search input
searchInput.addEventListener("keyup", (e) => {
  searchString = e.target.value.toLowerCase();

  const filteredCharacters = gotCharacters.filter((character) => {
    return (
      character.fullName.toLowerCase().includes(searchString) ||
      character.title.toLowerCase().includes(searchString)
    );
  });
  renderCharacters(filteredCharacters);
});
//<--------!!-------->
