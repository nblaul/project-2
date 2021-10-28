// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("data_salary.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;
  
    // Use the map method with the arrow function to return all the filtered movie titles.
    var language = data.map(survey =>  survey.language);
    console.log(language);

    // Use the map method with the arrow function to return all the filtered movie metascores.
    var salary = data.map(movies => movies.avg_salary);
    console.log(salary);

    // Use the map method with the arrow function to return all the filtered movie metascores.
    var year = data.map(movies => movies.survey_year);
    console.log(year);
  
    // Trace1 for the Greek Data
    var trace1 = {
      x: data.map(row => row.year),
      y: data.map(row => row.salary),
      text: data.map(row => row.greekName),
      name: "Greek",
      type: "bar",
      orientation: "h"
    };
  
    // data
    var chartData = [trace1];
  
    // Apply the group bar mode to the layout
    var layout = {
      title: "Greek gods search results",
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", chartData, layout);
  });
  