// from data.js
var tableData = data;
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through `data` and console.log each ufo data object
function showTable(data) {
  data.forEach(function (ufoData) {
    // console.log(ufoData);
    // Step 2:  Use d3 to append one table row `tr` for each ufo data object
    var row = tbody.append("tr");
    // // Step 3:  Use `Object.entries` to console.log each ufo data value
    Object.entries(ufoData).forEach(function ([key, value]) {
      // console.log(key, value);
      // Step 4: Append a cell to the row for each value
      // in the ufo data object
      var cell = row.append("td");
      // Step 5: Use d3 to update each cell's text with
      cell.text(value);
    });
  });
};

showTable(tableData);

// Select the submit button in the html file
var clickHandler = d3.select("#filter-btn");

// Create event handlers 
clickHandler.on("click", function () {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clearing the previous table data
  tbody.html("");

  // Get the value property of the input elememnts
  var inputDateTime = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  console.log(inputDateTime, inputCity,inputState,inputCountry,inputShape);

  // Filter data with selected values
  // Set up tableData as filteredData
  var filteredData = tableData;

  if (inputDateTime) {
    filteredData = filteredData.filter(data => data.datetime === inputDateTime);
  };

  if (inputCity) {
    filteredData = filteredData.filter(data => data.city === inputCity);
  };

  if (inputState) {
    filteredData = filteredData.filter(data => data.state === inputState);
  };

  if (inputCountry) {
    filteredData = filteredData.filter(data => data.country === inputCountry);
  };

  if (inputShape) {
    filteredData = filteredData.filter(data => data.shape === inputShape);
  };

  // Delete entered values from the input box when the search data showed
  d3.selectAll('input').property('value','');

showTable(filteredData);

  // Display filtered data to website
  filteredData.forEach(function (selectedData) {
    // console.log(selectedData);
    // Use d3 to append one table row `tr` for each ufo data object
    var row = tbody.append("tr");
    // // Use `Object.entries` to console.log each ufo data value
    Object.entries(selectedData).forEach(function ([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo data object
      var cell = row.append("td");
      // Use d3 to update each cell's text with
      cell.text(value);
    });
  });
});