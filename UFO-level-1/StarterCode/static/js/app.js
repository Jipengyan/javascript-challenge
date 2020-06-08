// from data.js
var tableData = data;
console.log(tableData);
// select the table body
var tbody = d3.select("tbody");
// Put data in each column
tableData.forEach(function(input_data){
    console.log(input_data);
    // append one table row 'tr' to each input_data object
    var row = tbody.append("tr");
    // use object.entries to show the value in input_data
    Object.entries(input_data).forEach(function([keys, value]){
        console.log(keys, value);
        // append a cell to the row
        var cell = row.append("td");
        cell.text(value);
    });
});

// select the button
var filter_button = d3.select("#filter-btn");
filter_button.on("click", function(){
    tbody.html("");
    // select the input data
    var input = d3.select("#datetime");
    // get the value property of date, state, shape
    var inputvalue = input.property("value");
    console.log(inputvalue);
    // filter data
    var filter_data = tableData.filter(property => property.datetime ===inputvalue);
    console.log(filter_data);
    
    filter_data.forEach(function(selecteddata){
        console.log(selecteddata);
        // append one table row 'tr' to each input_data object
        var row = tbody.append("tr");
        // use object.entries to show the value in input_data
        Object.entries(selecteddata).forEach(function([keys, value]){
            console.log(keys, value);
            // append a cell to the row
            var cell = row.append("td");
            cell.text(value);
        });
    });
});