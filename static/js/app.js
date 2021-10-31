// set the dimensions and margins of the graph
var width = 1000
var height = 500

// append the svg object to the body of the page

var svg = d3.select("#my_dataviz")
        .append("svg")
            .attr("width", width)
            .attr("height", height)


var button = d3.select("#button");
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#example-form-input");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    // Set the span tag in the h1 element to the text
    // that was entered in the form
    //d3.select("h1>span").text(inputValue);

    var test = parseInt(inputValue)
    console.log(test)

    d3.select("#my_dataviz").selectAll("svg", "div.Tooltip").remove("svg", "div.Tooltip");
    var svg = d3.select("#my_dataviz")
            .append("svg")
                .attr("width", width)
                .attr("height", height)
    
    d3.json("lang_pct.json", function(data) {

        console.log(test)

        data = data.filter(function(d){return d.survey_year == test})

        var color = d3.scaleOrdinal()
						.domain(['Android', 'AngularJS', 'APL', 'Arduino/RaspberryPi', 'Assembly', 'Bash/Shell', 'Bash/Shell/PowerShell', 'C', 'C#', 'C++', 'C++11', 'Cassandra', 'Clojure', 'Cloud(AWS,GAE,Azure,etc.)', 'Cobol', 'CoffeeScript', 'CommonLisp', 'Cordova', 'Crystal', 'CSS', 'Dart', 'Delphi',  'Delphi/Object Pascal', 'Elixir', 'Erlang', 'F#', 'Go', 'Groovy', 'Hack', 'Hadoop', 'HTML', 'HTML/CSS', 'HTML5', 'iOS', 'Java', 'JavaScript', 'jQuery', 'Julia', 'Kotlin', 'LAMP', 'LISP', 'Lua', 'Matlab', 'MongoDB', 'Node.js', 'Objective-C', 'Ocaml', 'Perl', 'PHP', 'PowerShell', 'Python', 'R', 'ReactJS', 'Redis', 'Ruby', 'Rust', 'Salesforce', 'Scala', 'SharePoint', 'Smalltalk', 'Spark', 'SQL', 'SQLServer', 'Swift', 'TypeScript', 'VB.NET', 'VBA', 'VisualBasic', 'VisualBasic6', 'WebAssembly', 'WindowsPhone', 'WordPress'])
						.range(d3.schemePaired);
					
					// Size scale for countries
					var size = d3.scaleLinear()
						.domain([1, 100])
						.range([10,100])  // circle will be between 7 and 55 px wide
					
					// create a tooltip
					d3.select("#my_dataviz").selectAll("div.tooltip").remove("div.tooltip");
					var Tooltip = d3.select("#my_dataviz")
						.append("div")
						.style("opacity", 0)
						.attr("class", "tooltip")
						.style("background-color", "white")
						.style("border", "solid")
						.style("border-width", "2px")
						.style("border-radius", "5px")
						.style("padding", "5px")
						
					
					// Three function that change the tooltip when user hover / move / leave a cell
					var mouseover = function(d) {
						Tooltip
						.style("opacity", 1)
					}
					var mousemove = function(d) {
						Tooltip
						.html( d.percentage.toFixed(2) + "% of people surveyed in " + d.survey_year + " said they had experience with " + d.language )
						.style("left", (d3.mouse(this)[0]+20) + "px")
						.style("top", (d3.mouse(this)[1]) + "px")
					}
					var mouseleave = function(d) {
						Tooltip
						.style("opacity", 0)
					}
					
					
					// Initialize the circle: all located at the center of the svg area
						var node = svg.append("g")
							.selectAll("circle")
							.data(data)
							.enter()
							.append("circle")
							.attr("class", "node")
							.attr("r", function(d){ return size(d.percentage)})
							.attr("cx", width / 2)
							.attr("cy", height / 2)
							.style("fill", function(d){ return color(d.language)})
							.style("fill-opacity", 0.8)
							.attr("stroke", "black")
							.style("stroke-width", 1)
							.on("mouseover", mouseover) // What to do when hovered
							.on("mousemove", mousemove)
							.on("mouseleave", mouseleave)
							.call(d3.drag() // call specific function when circle is dragged
								.on("start", dragstarted)
								.on("drag", dragged)
								.on("end", dragended));
					
					// Features of the forces applied to the nodes:
					var simulation = d3.forceSimulation()
						.force("center", d3.forceCenter().x(width*.5).y(height*.5)) // Attraction to the center of the svg area
						.force("charge", d3.forceManyBody().strength(.5)) // Nodes are attracted one each other of value is > 0
						.force("collide", d3.forceCollide().strength(.1).radius(function(d){ return (size(d.percentage)+.5) }).iterations(1)) // Force that avoids circle overlapping
					
					// Apply these forces to the nodes and update their positions.
					// Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
					simulation
						.nodes(data)
						.on("tick", function(d){
							node
								.attr("cx", function(d){ return d.x; })
								.attr("cy", function(d){ return d.y; })
						});
					
					// What happens when a circle is dragged?
                    function dragstarted(d) {
                        if (!d3.event.active) simulation.alphaTarget(.03).restart();
                        d.fx = d.x;
                        d.fy = d.y;
                      }
                      function dragged(d) {
                        d.fx = d3.event.x;
                        d.fy = d3.event.y;
                      }
                      function dragended(d) {
                        if (!d3.event.active) simulation.alphaTarget(.03);
                        d.fx = null;
                        d.fy = null;
					}
				
					})
                }