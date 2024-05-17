// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const stateURL = `${baseServerURL}/states`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// ------- fetching the data -------------

let pagenumber = 0;
let totalCount = 0;
let gdp = "";
let field = "";
let fieldName = '';
window.addEventListener("load", () => {
  fetchAndRenderUsers() 
});

function fetchAndRenderUsers(){
  let url;
  if(field===""){

     url = `${stateURL}?_page=${pagenumber}&_limit=5&_sort=${gdp}`;

  } else if(field==="region"){
    console.log('working',gdp,field );
     url = `${stateURL}?_page=${pagenumber}&_limit=5&_sort=${gdp}&region=${fieldName}`;
     console.log(url);
  } else if(field === "stateName"){
    url = `${stateURL}?_page=${pagenumber}&_limit=5&_sort=${gdp}&stateName=${fieldName}`;
  console.log(fieldName,url);
  } else if(field === "language"){
    url = `${stateURL}?_page=${pagenumber}&_limit=5&_sort=${gdp}&language=${fieldName}`;

  }
  fetch(url).then((res) => { totalCount = res.headers.get("X-Total-Count"); console.log(totalCount); return res.json()})
   .then((data) => {
    console.log(data);
     mainSection.innerHTML = null;
     paginationWrapper.innerHTML = null;
     const cardList = getCardList(data);
     const paginationButtons = getPaginationButtons();
     mainSection.append(cardList);
 
   })
   .catch((err) => console.log(err));
}



function getCardList(data) {

  
  let cardList = document.createElement("div");
  cardList.classList.add("card-list");
  data.map((ele, index) => {
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", index+1);

    let cardImage = document.createElement("div");
    cardImage.className = "card-img";

    let image = document.createElement("img");
    image.src = ele.image;
    image.alt = "state";
    cardImage.appendChild(image);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let stateName = document.createElement("h5");
    stateName.className = "card-stateName";
    stateName.innerText = ele.stateName;

    function pTagCreator(className) {
      let pTag = document.createElement("p");
      pTag.className = className;
      return pTag;
    }

    let cardCapital = pTagCreator("card-capital");
    cardCapital.innerText = ele.capital;
    let cardPopulation = pTagCreator("card-population");
    cardPopulation.innerText = ele.population;
    let cardRegion = pTagCreator("card-region");
    cardRegion.innerText = ele.region;
    let cardLanguage = pTagCreator("card-language");
    cardLanguage.innerText = ele.language;

    let cardGDPRankings = pTagCreator("card-GDPRanking");
    cardGDPRankings.innerText = ele.GDPRanking;
    let cardTourismPlaces = pTagCreator("card-tourismPlaces");
    cardTourismPlaces.innerText = ele.tourismPlaces.join(" ,");

    let cardLink = document.createElement("a");
    cardLink.innerText = "Edit";
    cardLink.href = "#";
    cardLink.className = "card-link";
    cardLink.addEventListener("click", (e) => {
      e.preventDefault();
      updateStateIdInput.value = ele.id;
      updatestateNameInput.value = ele.stateName;
      updateStateImageInput.value = ele.image;
      updateStatecapitalInput.value = ele.capital;
      updateStatepopulationInput.value = ele.population;
      updateStatelanguageInput.value = ele.language;
      updateStateGDPRankingInput.value = ele.GDPRanking;
      updateStateRegionInput.value = ele.region;
      updateStatetourismPlacesInput.value = ele.tourismPlaces;

      updateGDPStateId.value = ele.id;
      updateGDPRankingStateGDPRanking.value = ele.GDPRanking;
 })
    cardLink.setAttribute("data-id", ele.id);

    let cardButton = document.createElement("button");
    cardButton.innerText = "Delete";
    cardButton.className = "card-button";
    cardButton.addEventListener("click", (e) => {
         e.preventDefault();
         fetch(`${stateURL}/${ele.id}`, {
          method: "DELETE",
        }).then((res) => {  return res.json()})
        .then((data) => {
          console.log(data);
          fetchAndRenderUsers();
        })
        .catch((err) => console.log(err));;
      
    })
    cardButton.setAttribute("data-id", ele.id);

    cardBody.append(
      stateName,
      cardCapital,
      cardPopulation,
      cardRegion,
      cardLanguage,
      cardGDPRankings,
      cardTourismPlaces,
      cardLink,
      cardButton
    );
    card.append(cardImage, cardBody);
    cardList.append(card);
  });


  return cardList;
}



function getPaginationButtons(){
  let numberOfButtons = Math.ceil(totalCount/5);

  for(let i=0; i<numberOfButtons; i++){
    let button = document.createElement('button');
    button.setAttribute('class', 'pagination-button');
    button.innerText = i+1;
    button.addEventListener('click', (event) =>{
      event.preventDefault();
       pagenumber = i+1;
      //  url = `${stateURL}?_page=${pagenumber}&_limit=5`
       fetchAndRenderUsers();
    })
    paginationWrapper.append(button);

  }
}



// state
let stateNameInput = document.getElementById("state-Name");
let stateImageInput = document.getElementById("state-image");
let statecapitalInput = document.getElementById("state-capital");
let statepopulationInput = document.getElementById("state-population");
let statelanguageInput = document.getElementById("state-language");
let stateGDPRankingInput = document.getElementById("state-GDPRanking");
let stateRegionInput = document.getElementById("state-region");
let statetourismPlacesInput = document.getElementById("state-tourismPlaces");
let stateCreateBtn = document.getElementById("add-state");

stateCreateBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  let upateData =         {
    stateName: stateNameInput.value,
    population: statepopulationInput.value,
    GDPRanking: stateGDPRankingInput.value ,
    image: stateImageInput.value,
    language: statelanguageInput.value,
    capital: statecapitalInput.value,
    region: stateRegionInput.value,
    tourismPlaces: statetourismPlacesInput.value.split(",")  // (Hint:- use .split(",") separate value by `,` and get array)
  }

  fetch(`${stateURL}`, {
    method: "POST",
    body: JSON.stringify(upateData),
    headers: {
      "Content-type": "application/json"
    }
  }).then((res) => {  return res.json()})
  .then((data) => {
    console.log(data);
    fetchAndRenderUsers();
  })
  .catch((err) => console.log(err));;

})

// Update state
let updateStateIdInput = document.getElementById("update-state-id");
let updatestateNameInput = document.getElementById("update-state-Name");
let updateStateImageInput = document.getElementById("update-state-image");
let updateStatecapitalInput = document.getElementById("update-state-capital");
let updateStatepopulationInput = document.getElementById(
  "update-state-population"
);
let updateStatelanguageInput = document.getElementById("update-state-language");
let updateStateGDPRankingInput = document.getElementById(
  "update-state-GDPRanking"
);
let updateStateRegionInput = document.getElementById("update-state-region");

let updateStatetourismPlacesInput = document.getElementById(
  "update-state-tourismPlaces"
);
let updateStateBtn = document.getElementById("update-state");


updateStateBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  let upateData =         {
    stateName: updatestateNameInput.value,
    population: updateStatepopulationInput.value,
    GDPRanking: updateStateGDPRankingInput.value ,
    image: updateStateImageInput.value,
    language: updateStatelanguageInput.value,
    capital: updateStatecapitalInput.value,
    region: updateStateRegionInput.value,
    tourismPlaces: updateStatetourismPlacesInput.value.split(",")  // (Hint:- use .split(",") separate value by `,` and get array)
  }

  fetch(`${stateURL}/${updateStateIdInput.value}`, {
    method: "PATCH",
    body: JSON.stringify(upateData),
    headers: {
      "Content-type": "application/json"
    }
  }).then((res) => {  return res.json()})
  .then((data) => {
    console.log(data);
    fetchAndRenderUsers();
  })
  .catch((err) => console.log(err));;

})



//Update GDPRanking
let updateGDPStateId = document.getElementById("update-GDP-state-id");
let updateGDPRankingStateGDPRanking = document.getElementById(
  "update-GDP-state-GDPRanking"
);
let updateGDPRankingStateBtn = document.getElementById("update-GDP-stateBtn");



updateGDPRankingStateBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  let upateData = {
    GDPRanking: updateGDPRankingStateGDPRanking.value
  };

  fetch(`${stateURL}/${updateGDPStateId.value}`, {
    method: "PATCH",
    body: JSON.stringify(upateData),
    headers: {
      "Content-type": "application/json"
    }
  }).then((res) => {  return res.json()})
  .then((data) => {
    console.log(data);
    fetchAndRenderUsers();
  })
  .catch((err) => console.log(err));;

})


//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");

sortAtoZBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  gdp = "GDPRanking";
  fetchAndRenderUsers();
  })

  let sortZtoABtn = document.getElementById("sort-high-to-low");
  sortZtoABtn.addEventListener("click", (e) =>{
    e.preventDefault();
  gdp = "-GDPRanking";

    fetchAndRenderUsers();
    });

let filterNortheast = document.getElementById("filter-North-East-India");
filterNortheast.addEventListener("click", (e) =>{
  e.preventDefault();
  field = "region";
  fieldName = "North East India";
  fetchAndRenderUsers();
  })
let filterWest = document.getElementById("filter-West-India");
filterWest.addEventListener("click", (e) =>{
  e.preventDefault();
  field = "region";
  fieldName = "West India"
  fetchAndRenderUsers();
  })
let filterNorth = document.getElementById("filter-North-India");
filterNorth.addEventListener("click", (e) =>{
  e.preventDefault();
  field = "region";
  fieldName = "North India"
  fetchAndRenderUsers();
  })
//Search by name/language
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");
searchByButton.addEventListener("click", (e) =>{
  e.preventDefault();
  field = searchBySelect.value;
  fieldName = searchByInput.value;
  if(field==="Search By"){
    field = ''
  }
  fetchAndRenderUsers();
  })


//States Data
let statesData = [];
let queryParamString = null;
let pageNumber = 1;
