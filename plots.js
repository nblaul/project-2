// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("data_salary.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;
  
    function filterSurvey(survey) {
        return survey.survey_year == 2021;
      }

    // Use filter() to pass the function as its argument
    var filteredResults = importedData.filter(filterSurvey);

    //  Check to make sure your are filtering your movies.
    console.log(filteredResults);

    // Use the map method with the arrow function to return all the filtered movie titles.
    // var language = filteredResults[0]['language'];
    var language = filteredResults.map(survey =>  survey.language);
    console.log(language);

    // Use the map method with the arrow function to return all the filtered movie metascores.
    var salary = filteredResults.map(survey =>  survey.avg_salary);
    console.log(salary);

    // Use the map method with the arrow function to return all the filtered movie metascores.
    var year = filteredResults['survey_year'];
    console.log(year);
  
    // Trace1 for the Greek Data
    var trace1 = {
      x: salary,
      y: language,
      // text: data.map(row => row.language),
      name: "Greek",
      type: "bar",
      orientation: "h"
    };
  
    // data
    var chartData = [trace1];
  
    // Apply the group bar mode to the layout
    var layout = {
      title: "Salary by Language (2021)",
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
  