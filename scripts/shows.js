const apiKey = "<7b95bc92-a319-4ff5-a56a-47ea95497abd>";

//creating header container for dates / venue / location
let parentTable = document.querySelector(".table__full");

let tableContainerTop = document.createElement('div');
tableContainerTop.classList.add('table__container-one');
parentTable.appendChild(tableContainerTop);

let dateHeaderTop = document.createElement('p');
dateHeaderTop.classList.add('table__header-date-one');
dateHeaderTop.innerText = ("DATES");
tableContainerTop.appendChild(dateHeaderTop);

let venueHeaderTop = document.createElement('p');
venueHeaderTop.classList.add('table__header-venue-one');
venueHeaderTop.innerText = ("VENUE");
tableContainerTop.appendChild(venueHeaderTop);

let locationHeaderTop = document.createElement('p');
locationHeaderTop.classList.add('table__header-location-one');
locationHeaderTop.innerText = ("LOCATION");
tableContainerTop.appendChild(locationHeaderTop);

//getting data from API
upcomingShows = () => {
  axios
    .get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
    .then(response => {
      response.data.forEach(show => {
        showDates(show);
      })
    })
    .catch(error => {
      console.log(error);
    })
};
upcomingShows();

//create containers and input data from API
showDates = (show) => {
  let tableContainer = document.createElement('div');
  tableContainer.classList.add('table__container');
  parentTable.appendChild(tableContainer);

  let dateHeader = document.createElement('p');
  dateHeader.classList.add('table__header-date');
  dateHeader.innerText = ("DATE");
  tableContainer.appendChild(dateHeader);

  let tableDate = document.createElement('p');
  tableDate.classList.add("table__date");
  tableDate.innerText = `${show.date}`;
  tableContainer.appendChild(tableDate);

  let venueHeader = document.createElement('p');
  venueHeader.classList.add('table__header-venue');
  venueHeader.innerHTML = ("VENUE");
  tableContainer.appendChild(venueHeader);

  let tableVenue = document.createElement('p');
  tableVenue.classList.add("table__venue");
  tableVenue.innerText = `${show.place}`
  tableContainer.appendChild(tableVenue);

  let locationHeader = document.createElement('p');
  locationHeader.classList.add('table__header-location');
  locationHeader.innerHTML = ("LOCATION");
  tableContainer.appendChild(locationHeader);

  let tableLocation = document.createElement('p');
  tableLocation.classList.add("table__location");
  tableLocation.innerText = `${show.location}`;
  tableContainer.appendChild(tableLocation);

  let tableButton = document.createElement('button');
  tableButton.classList.add("table__button");
  tableButton.innerHTML = ("BUY TICKETS");
  tableContainer.appendChild(tableButton);
};
