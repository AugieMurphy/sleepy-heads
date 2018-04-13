var svg = document.getElementById("s");

var data = [2, 4, 7, 12];

var pieChart = function(){
    var container = d3.select("svg");
    var clock = d3.pie()
	.value(function(d){
	    return d;
	});

    var arc = d3.arc()
	.innerRadius(0)
	.outerRadius( (Math.min(500,500)) / 2);

    var color = d3.scaleOrdinal( d3.schemeCategory20b );

    var path = svg.selectAll('path')
	.data(clock(data))
	.enter()
	.append('path')
	.attr('d', arc)
	.attr('fill', function(d, i){
	    return color(d.data.label);
	};

}
