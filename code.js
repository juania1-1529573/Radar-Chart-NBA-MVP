var width = 870;
var height = 700;

var dataset;

 //start with the type set to all, changes this variable everytime the dropdown for type is changed
var season = "all";
var opponent = "all";

d3.csv("data.csv", function(error, shots) {
//read in the data
  if (error) return console.warn(error);
     shots.forEach(function(d) {
     	d.loc_x = +d.loc_x;
     	d.loc_y = +d.loc_y;
      d.shot_made_flag = +d.shot_made_flag;
     	d.season = d.season;
     	d.opponent = d.opponent;
  });
//dataset is the full dataset -- maintain a copy of this at all times
  dataset = shots;
//all the data is now loaded, so draw the initial vis
  drawVis(dataset);
});

const x = d3
      .scaleLog()
      .domain([
          0,
          d3.max(dataset, function(d) {
              return d.loc_x;
          }),
      ])
      .range([0, width]);
  const y = d3
      .scaleLinear()
      .domain([
          0,
          d3.max(dataset, function(d) {
              return d.loc_y;
          }),
      ])
      .range([height, 0]);
  const color = d3
      .scaleOrdinal()
      .domain(['Made', 'Miss'])
      .range(['Blue', 'Red']);

function drawVis(dataset) {
  var g = d3
        .select('#chart-area')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g');
  


}
