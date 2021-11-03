// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("static/data_salary.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;
  // 2021 data

    function filterSurvey(survey) {
        return survey.survey_year == 2021;
      }
    // Use filter() to pass the function as its argument
    var filteredResults = importedData.filter(filterSurvey);
    //  Check to make sure your are filtering your movies.
    console.log(filteredResults);

    // Use the map method with the arrow function to return all the filtered movie metascores.
    var salary = filteredResults.map(survey =>  survey.avg_salary);
    console.log(salary);
    
  // 2017 data
    function filterSurvey1(survey) {
        return survey.survey_year == 2017;
    }  
    // Use filter() to pass the function as its argument
    var filteredResults1 = importedData.filter(filterSurvey1);
    //  Check to make sure your are filtering your movies.
    console.log(filteredResults1);

    // Use the map method with the arrow function to return all the filtered movie metascores.
    var salary1 = filteredResults1.map(survey =>  survey.avg_salary);
    console.log(salary1);

// 2018 data

  function filterSurvey2(survey) {
    return survey.survey_year == 2018;
  }
  // Use filter() to pass the function as its argument
  var filteredResults2 = importedData.filter(filterSurvey2);
  //  Check to make sure your are filtering your movies.
  console.log(filteredResults2);

  // Use the map method with the arrow function to return all the filtered movie metascores.
  var salary2 = filteredResults2.map(survey =>  survey.avg_salary);
  console.log(salary2);

// 2019 data

function filterSurvey3(survey) {
  return survey.survey_year == 2019;
}
// Use filter() to pass the function as its argument
var filteredResults3 = importedData.filter(filterSurvey3);
//  Check to make sure your are filtering your movies.
console.log(filteredResults3);

// Use the map method with the arrow function to return all the filtered movie metascores.
var salary3 = filteredResults3.map(survey =>  survey.avg_salary);
console.log(salary3);

// 2020 data

function filterSurvey4(survey) {
  return survey.survey_year == 2020;
}
// Use filter() to pass the function as its argument
var filteredResults4 = importedData.filter(filterSurvey3);
//  Check to make sure your are filtering your movies.
console.log(filteredResults4);

// Use the map method with the arrow function to return all the filtered movie metascores.
var salary4 = filteredResults4.map(survey =>  survey.avg_salary);
console.log(salary4);




    // Use the map method with the arrow function to return all the filtered movie titles.
    // var language = filteredResults[0]['language'];
    // var language = filteredResults.map(survey =>  survey.language);
    // console.log(language);


    // // Use the map method with the arrow function to return all the filtered movie metascores.
    // var year = filteredResults['survey_year'];
    // console.log(year);
  
    // Trace1 for salary
    var trace1 = {
      y: salary1,
      type: 'box',
      name: '2017',
      marker: {
        color: 'rgb(8,81,156)'
      },
      boxmean: true
    };
    
      // Trace2 for salary
      var trace2 = {
        y: salary,
        type: 'box',
        name: '2021',
        marker: {
          color: 'rgb(8,81,156)'
        },
        boxmean: true
      };

      // Trace3 for salary
      var trace3 = {
        y: salary2,
        type: 'box',
        name: '2018',
        marker: {
          color: 'rgb(8,81,156)'
        },
        boxmean: true
      };
    
      // Trace4 for salary
      var trace4 = {
        y: salary3,
        type: 'box',
        name: '2019',
        marker: {
          color: 'rgb(8,81,156)'
        },
        boxmean: true
      };

    // Trace5 for salary
    var trace5 = {
      y: salary4,
      type: 'box',
      name: '2020',
      marker: {
        color: 'rgb(8,81,156)'
          },
        boxmean: true
      };  

    // data
    var chartData = [trace1,trace3,trace4,trace5,trace2];
  
    // Apply the group bar mode to the layout
    var layout = {
      title: "Avg Salary by Year (2017-2021)",
      autosize: false,
      width: 1000,
      height: 1000,
      margin: {
        l: 100,
        r: 50,
        b: 100,
        t: 100,
        pad: 4
      },
      // paper_bgcolor: '#7f7f7f',
      plot_bgcolor: '#c7c7c7'
    };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", chartData, layout);
  });
  