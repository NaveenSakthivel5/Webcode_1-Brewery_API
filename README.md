# Webcode_1-Brewery_API-
 Opening Brewery API using async/await with fetch and displaying the Brewery details in a webpage


   The written code is a web application that fetches data from the Open Brewery DB API and displays information about breweries on a web page. Here is a detailed description of each part of the code:

1. `async function getBrewery()`: This is an asynchronous function that fetches data from the Open Brewery DB API. It makes a GET request to the API endpoint and retrieves a list of breweries. The function uses `await` and `fetch` to wait for the response and then parses it as JSON. The retrieved data is logged to the console and returned.

2. Creating the header and logo section:
   - `let header = document.createElement("header")`: Creates a `header` element.
   - `let logoImg = document.createElement("img")`: Creates an `img` element.
   - Setting attributes for the logo image:
     -- `logoImg.setAttribute("src", "...")`: Sets the source URL for the logo image.
     -- `logoImg.setAttribute("alt", "Logo")`: Sets the alternative text for the logo image.
     -- `logoImg.setAttribute("id", "logoImg")`: Sets the ID attribute for the logo image.
   - Setting the ID attribute for the header: `header.setAttribute("id", "headerID")`.
   - Appending the logo image to the header: `header.appendChild(logoImg)`.
   - Appending the header to the `document.body`.

3. Creating the search section:
   - `let searchDiv = document.createElement("div")`: Creates a `div` element.
   - Setting the ID attribute for the search div: `searchDiv.setAttribute("id", "searchDiv")`.
   - Creating the search input element:
     -- `let searchInput = document.createElement("input")`: Creates an `input` element.
     -- Setting attributes for the search input:
       --- `searchInput.setAttribute("type", "text")`: Sets the input type as text.
       --- `searchInput.setAttribute("id", "searchInput")`: Sets the ID attribute for the search input.
       --- `searchInput.setAttribute("placeholder", "Search by brewery name")`: Sets the placeholder text for the search input.
   - Creating the search button element:
     -- `let searchButton = document.createElement("button")`: Creates a `button` element.
     -- Setting the ID attribute for the search button: `searchButton.setAttribute("id", "searchButton")`.
     -- Setting the button text: `searchButton.innerText = "Search"`.
   - Appending the search input and search button to the search div: `searchDiv.appendChild(searchInput)` and `searchDiv.appendChild(searchButton)`.
   - Appending the search div to the `document.body`.

4. `async function breweryFunction(page)`: This is an asynchronous function that displays breweries on the web page based on the specified page number.
   - The function calls the `getBrewery()` function to fetch the brewery data from the API.
   - It defines the number of items to display per page (`itemsPerPage`) and calculates the start and end index of the breweries to be displayed based on the current page number.
   - It gets the parent container element by its ID and removes any existing content if it exists.
   - It creates a new parent container element.
   - It gets the search term from the search input and converts it to lowercase.
   - It filters the brewery data based on the search term.
   - It iterates over the filtered data and creates HTML elements to display the brewery information such as name, type, address, website link, and phone number.
   - The brewery information elements are appended to the parent container.
   - The parent container is appended to the `document.body`.
   - Finally

, the function calls the `generatePagination()` function to generate pagination buttons.

5. `async function generatePagination(totalPages, currentPage)`: This asynchronous function generates pagination buttons based on the total number of pages and the current page.
   - It gets the pagination div element by its ID and removes any existing pagination if it exists.
   - It creates a new pagination div element.
   - It creates a button for each page and adds an event listener to each button. When clicked, it calls the `breweryFunction()` function with the corresponding page number.
   - If the current page matches the button's page number, it adds the "active" class to highlight the current page.
   - The buttons are appended to the pagination div.
   - The pagination div is appended to the `document.body`.

6. Event listeners:
   - `searchButton.addEventListener("click", function () { ... })`: Adds a click event listener to the search button. When clicked, it calls the `breweryFunction()` function with the page number 1 to display breweries based on the search input.
   - `searchInput.addEventListener("input", function () { ... })`: Adds an input event listener to the search input. When the input value changes, it calls the `breweryFunction()` function with the page number 1 to display breweries based on the updated search input.

7. Initial page load:
   - The `breweryFunction(1)` function is called initially with the page number 1 to display the first page of breweries on the web page.

Overall, the code fetches brewery data from an API, displays it on a web page, provides a search functionality to filter breweries by name, and generates pagination buttons for navigation between pages of breweries.
