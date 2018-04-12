var activity = "";

var getSelection = function(){
    activity = document.getElementById("activity").value;
}


var data = [2, 4, 7, 12];

var body = d3.select("body");

var svg = body.append("svg")
    .attr("width",500)
    .attr("height",500)
    .style("border-style","solid")
    .style("border-width","5px");
    //.attr('transform', 'translate(' + (250) +  ',' + (250) + ')');

var clock = d3.pie().value(function(d){ return d; });

var arc = d3.arc()
    .innerRadius(0)
    .outerRadius((Math.min(500,500))/2);

var color = d3.scaleOrdinal(d3.schemeCategory20b);

var path = svg.selectAll('path')
    .data(clock(data))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
	return color(d.data.label);
    });
