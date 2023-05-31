// Async function to fetch brewery data from API
async function getBrewery() {
  try {  // Try Catch blocks for handling error
      let res = await fetch("https://api.openbrewerydb.org/v1/breweries");
      let brewery = await res.json();
      console.log(brewery);
      return brewery;
  }
  catch(error) {
      console.log("Error");
  }
}

// Create header element and logo image
let header = document.createElement("header");
let logoImg = document.createElement("img");
logoImg.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUijMdql6AgfV3N6iVVROD6SLXOygINSGBT_tYUVhD5Q&usqp=CAU&ec=48600112");
logoImg.setAttribute("alt","Logo");
logoImg.setAttribute("id","logoImg");

// Set header ID
header.setAttribute("id","headerID");
header.appendChild(logoImg);
document.body.appendChild(header);

// Create search section
let searchDiv = document.createElement("div");
searchDiv.setAttribute("id","searchDiv");

let searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("id", "searchInput");
searchInput.setAttribute("placeholder", "Search by brewery name");

let searchButton = document.createElement("button");
searchButton.setAttribute("id", "searchButton");
searchButton.innerText = "Search";

searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);

document.body.appendChild(searchDiv);

// Function to display breweries on the page
async function breweryFunction(page) {
  let data = await getBrewery(); // Array that has all Brewery details as JSON

  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  let parent = document.getElementById("parent");

  if (parent) {
    // Remove existing content
    parent.remove();
  }

  parent = document.createElement("div");
  parent.setAttribute("id","parent");

  const searchTerm = searchInput.value.toLowerCase().trim(); // Get the search term

  let filteredData = data.filter((brewery) =>
     brewery.name.toLowerCase().includes(searchTerm)
  );

  for (let i = startIndex; i < endIndex && i < data.length; i++) {    
      let child = document.createElement("div");
      child.setAttribute("id", "child");

      // Adding image to the container
      let image = document.createElement("img");
      image.setAttribute("id","img");
      image.setAttribute("src","https://images.pexels.com/photos/5858085/pexels-photo-5858085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
      child.appendChild(image);
      
      // Adding Brewery Name to the container
      let h2 = document.createElement("h2");
      h2.setAttribute("id","breweryName");
      h2.innerHTML = data[i].name;
      child.appendChild(h2);

      // Adding Brewery Type to the container
      let h3 = document.createElement("p");
      h3.setAttribute("id","breweryType");
      h3.innerHTML = `Brewery Type: <b>${data[i].brewery_type}</b>`;
      child.appendChild(h3);

      // Adding Address to the container
      let loc_h1 = document.createElement("h4");
      let address = data[i].address_1 +", "+ data[i].state +", "+ data[i].city +", "+ data[i].country;
      loc_h1.setAttribute("id","Location");
      loc_h1.innerHTML = "Address: " + address;
      child.appendChild(loc_h1);

      // Adding website link with symbol to the container
      let websiteLink = document.createElement("a");
      websiteLink.setAttribute("href", data[i].website_url);
      websiteLink.setAttribute("target", "_blank");
      websiteLink.innerText = "Click here  ";
      let websiteIcon = document.createElement("i");
      websiteIcon.setAttribute("class", "fa-solid fa-link");
      websiteLink.appendChild(websiteIcon);
      child.appendChild(websiteLink);

      // Adding phone number to the container
      let phoneNum = document.createElement("p");
      phoneNum.innerHTML = `Phone: ${data[i].phone}`;
      child.appendChild(phoneNum);

      parent.appendChild(child);  // Appending the container to the parent
  }

  document.body.appendChild(parent);  // Appending the parent to the body of document

  generatePagination(totalPages, page);
}

// Function to generate pagination buttons
async function generatePagination(totalPages, currentPage) {
  let paginationDiv = document.getElementById("pagination");

  if (paginationDiv) {
     // Remove existing pagination div
     paginationDiv.remove();
  }
  
  paginationDiv = document.createElement("div");
  paginationDiv.setAttribute("id", "pagination");

  // Create buttons for each page
  for (let i = 1; i <= totalPages; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    if (i === currentPage) {
      button.classList.add("active");
    }
    button.addEventListener("click", function () {
      breweryFunction(i);
    });
    paginationDiv.appendChild(button);
  }

  document.body.appendChild(paginationDiv);
}

// Event listener for search button click
searchButton.addEventListener("click", function () {
  breweryFunction(1);
});

// Event listener for search input change
searchInput.addEventListener("input", function () {
   breweryFunction(1);
});

// Initial call to display breweries on page load
breweryFunction(1);
