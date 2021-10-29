
function buildChart(selection) {
    d3.json("lang_pct.json").then(importedData => {
        var data = importedData;
        var resultsArray = data.filter(survey => 
            survey.language == selection);
        var year = resultsArray.map(survey => survey.survey_year);
        var percentage = resultsArray.map(survey => survey.percentage);
        
        console.log(year);
        console.log(percentage);

        var trace1 = [
            {
                y: percentage,
                x: year,
                type: "scatter",
                // orientation: "h"
            }
        ];

        console.log(trace1);

        var layout = {
            title: "Popularity Percentage of Language by Year",
            xaxis: {
                range: [2010, 2022],
                title: "Year"
            },
            yaxis: {
                title: "Percentage Use",
                range: [0,100]
            }
        };

        Plotly.newPlot("plot", trace1, layout);
    });
}

function init() {

    d3.json("lang_pct.json").then(function(importedData) {
        var data = importedData;
        console.log(data);
        var result = data.map(survey => survey.language);
        console.log(result);
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
    
        var languages = result.filter(onlyUnique);
        languages.sort()
        console.log(languages);
        var selector = d3.select("#selDataset");
        languages.forEach(language => {
            selector
                .append("option")
                .text(language)
                .property("value", language);
                console.log(language);
        });

        const firstData = languages[0];
        console.log(firstData);
        buildChart(firstData);
    

    });
}
    function optionChanged(newData) {
        buildChart(newData);
    }

init();






//Use the list of years to populate the select options

