/*========================  TIMELINE  ========================*/

var line_chart = d3.select(".line_chart");
var height = line_chart.node().getBoundingClientRect().height;
var width = line_chart.node().getBoundingClientRect().width;
line_chart = line_chart.attr("width", width)
    .attr("height", height);
var g = line_chart.append("g");
var yAxis = d3.scaleLinear()
    .range([0, width]);

var selectedActivity = "PersonalCareAndSleep";
var xAxis = d3.scaleTime().range([0, width]);
var yAxis = d3.scaleLinear().range([height, 0]);
var valueline = d3.line()
    .x(function(d) { return xAxis(d); })
    .y(function(d) { return yAxis(d); });
var tdata;

// console.log("code gets to this point")

d3.csv("static/life.csv", function (error,data) {

  if (error) throw error;
  data.forEach(function(d) {
    d.Activity = d.Activity;
    d.a15to19 = +d.a15to19;
    d.a20to24 = +d.a20to24;
    d.a25to34 = +d.a25to34;
    d.a35to44 = +d.a35to44;
    d.a45to54 = +d.a45to54;
    d.a55to64 = +d.a55to64;
    d.a75 = +d.a75
    return d;
  })
  xAxis.domain([0, 8])
  yAxis.domain([0, 15]);


  // g.append("g")
  //  .attr("transform", "translate(0," + height + ")")
  console.log("ho");
  console.log(data);
  if (function(d) {return d.Activity} == selectedActivity) {
    tdata = [d.a15to19, d.a20to24, d.a25to34, d.a35to44, d.a45to54, d.a55to64, d.a75]
  }
  g.append("path")
    .data(data)
    .attr("class", "line")
    .attr("d", valueline);
  svg.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(xAxis));
 svg.append("g")
    .call(d3.axisLeft(yAxis));

    if (error) throw error;
    data.forEach(function(d) {
	d.Activity = d.Activity;
	d.a15to19 = +d.a15to19;
	d.a20to24 = +d.a20to24;
	d.a25to34 = +d.a25to34;
	d.a35to44 = +d.a35to44;
	d.a45to54 = +d.a45to54;
	d.a55to64 = +d.a55to64;
	d.a75 = +d.a75
	return d;
    })
    xAxis.domain([0, 8])
    yAxis.domain([0, 15]);


    // g.append("g")
    //  .attr("transform", "translate(0," + height + ")")
    console.log("ho");
    console.log(data);
    if (function(d) {return d.Activity} == selectedActivity) {
	tdata = [d.a15to19, d.a20to24, d.a25to34, d.a35to44, d.a45to54, d.a55to64, d.a75]
    }
    g.append("path")
	.data(tdata)
	.attr("class", "line")
	.attr("d", valueline);
    svg.append("g")
	.attr("transform", "translate(0," + height + ")")
	.call(d3.axisBottom(x));
    svg.append("g")
	.call(d3.axisLeft(y));

});
