var tshirts = [
    {
      id: 1,
      name: "T-Shirt 1",
      size: ["S", "M", "XL"],
      price: 75,
      image: "pp imaes/jersey1.jpg"
    },
    {
      id: 2,
      name: "T-Shirt 2",
      size: [ "M", "L", "XL"],
      price: 90,
      image: "pp imaes/jersey2.jpg"
    },
    {
      id: 3,
      name: "T-Shirt 3",
      size: ["S", "M", "L", "XL"],
      price: 80,
      image: "pp imaes/jersey3.jpg"
    },
    {
    id:4,
    name:"T-Shirt 4",
    size:["S","L","XL"],
    price:85,
    image:"tshirt5.jpg"
  },
  {
    id:5,
    name:"T-Shirt 5",
    size:["S","L"],
    price:90,
    image:"tshirt6.jpg"
  },
  {
    id:6,
    name:"T-Shirt6",
    size:[ "S","L","XXL"],
    price:65,
    image:"tshirt7.jpg"
  }
  ];
  
  // Function to search for T-shirts
  function searchTshirts() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var searchResults = [];
  
    // Filter matching T-shirts based on the search term
    searchResults = tshirts.filter(function(tshirt) {
      return tshirt.name.toLowerCase().includes(searchTerm);
    });
  
    // Display search results
    displaySearchResults(searchResults);
  }
  
  // Function to display search results
  function displaySearchResults(results) {
    var searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = "";
  
    if (results.length === 0) {
      searchResultsDiv.innerHTML = "No results found.";
      return;
    }
  
    results.forEach(function(tshirt) {
      var tshirtDiv = document.createElement("div");
      tshirtDiv.className = "gallery";
      tshirtDiv.innerHTML = `
        <img src="${tshirt.image}" alt="${tshirt.name}" width="500" height="300">
        <div class="desc">
          <h3>${tshirt.name}</h3>
          <h4>S - M - L - XL</h4>
          <h4>${tshirt.price} DT</h4>
        </div>
      `;
      searchResultsDiv.appendChild(tshirtDiv);
    });
  }




  function searchTshirts() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var minPrice = parseFloat(document.getElementById("minPriceInput").value) || 0;
    var maxPrice = parseFloat(document.getElementById("maxPriceInput").value) || Infinity;
    var selectedSizes = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(function(checkbox) {
      return checkbox.value;
    });
  
    var searchResults = tshirts.filter(function(tshirt) {
      return (
        tshirt.name.toLowerCase().includes(searchTerm) &&
        tshirt.price >= minPrice &&
        tshirt.price <= maxPrice &&
        (selectedSizes.length === 0 || tshirt.size.some(size => selectedSizes.includes(size)))
      );
    });
  
    // Display search results
    displaySearchResults(searchResults);
  }