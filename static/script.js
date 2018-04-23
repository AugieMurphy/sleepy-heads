var body = d3.select("body");
var curTime = 0;

/*========================SELECT CHART========================*/

var activity = "avg_weekly";

var getActivity = function(){
    activity = document.getElementById("activity").value;
}

/*======================BAR CHART======================*/


var tx; //this must equal the time in the clock. e.g. if time == 10, then tx=d.t10
var time = 0;
var chart = d3.select(".bar_chart");
var height = chart.node().getBoundingClientRect().height;
var width = chart.node().getBoundingClientRect().width;
chart = chart.attr("width", width).attr("height", height);
var xAxis = d3.scaleLinear()
    .range([0, width]);
var bar;

d3.csv("/static/hourly.csv", function(error, data) {
    if (error) throw error;

    data.forEach(function (d)  {
	d.Activity = d.Activity; //?
	switch (curTime) {
	case 0:
	    d.tx = +d.t0;
	    break;
	case 1:
	    d.tx = +d.t1;
	    break;
	case 2:
	    d.tx = +d.t2;
	    break;
	case 3:
	    d.tx = +d.t3;
	    break;
	case 4:
	    d.tx = +d.t4;
	    break;
	case 5:
	    d.tx = +d.t5;
	    break;
	case 6:
	    d.tx = +d.t6;
	    break;
	case 7:
	    d.tx = +d.t7;
	    break;
	case 8:
	    d.tx = +d.t8;
	    break;
	case 9:
	    d.tx = +d.t9;
	    break;
	case 10:
	    d.tx = +d.t10;
	    break;
	case 11:
	    d.tx = +d.t11;
	    break;
	case 12:
	    d.tx = +d.t12;
	    break;
	case 13:
	    d.tx = +d.t13;
	    break;
	case 14:
	    d.tx = +d.t14;
	    break;
	case 15:
	    d.tx = +d.t15;
	    break;
	case 16:
	    d.tx = +d.t16;
	    break;
	case 17:
	    d.tx = +d.t17;
	    break;
	case 18:
	    d.tx = +d.t18;
	    break;
	case 19:
	    d.tx = +d.t19;
	    break;
	case 20:
	    d.tx = +d.t20;
	    break;
	case 21:
	    d.tx = +d.t21;
	    break;
	case 22:
	    d.tx = +d.t22;
	    break;
	case 23:
	    d.tx = +d.t23;
	}
	console.log("does this work");
	console.log(curTime);
	return d;
    });
    console.log(data);
    console.log(data[0]["Activity"]); //this prints sleeping

    // xAxis.domain([0, d3.max(data, function(d) {
    //   return d.tx; })]);
    xAxis.domain([0, 1]);
    var barHeight = height / data.length;

    bar = chart.selectAll("g")
	.data(data)
	.enter()
	.append("g")
	.attr("transform", function(d, i) {
            return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", function(d) {
            return xAxis(d.tx); })
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) {
            return xAxis(d.tx) + 40; })
        .attr("y", barHeight / 2)
        .text(function(d) { return d.Activity; });

    bar.append("text")
        .attr("x", function(d) {
            return xAxis(d.tx); })
        .attr("y", barHeight / 2)
        .text(function(d) { return d.tx * 100; });


    // .transition().duration(2000)
    // .style("width", function(d) {
    //   return d * 10 + "px"; })
    // .attr("transform", function(d, i) {
    //   return "translate(0," + i * barHeight + ")"; });



}); //end of d3.csv

var inter = setInterval(function() {
    updateBar();
}, 100);

function updateBar() {
    console.log("Updatating bar chart...")
    d3.csv("/static/hourly.csv", function(error, data) {
	if (error) throw error;

	data.forEach(function (d)  {
  	    d.Activity = d.Activity; //?
	    switch (curTime) {
	    case 0:
		d.tx = +d.t0;
		break;
	    case 1:
		d.tx = +d.t1;
		break;
	    case 2:
		d.tx = +d.t2;
		break;
	    case 3:
		d.tx = +d.t3;
		break;
	    case 4:
		d.tx = +d.t4;
		break;
	    case 5:
		d.tx = +d.t5;
		break;
	    case 6:
		d.tx = +d.t6;
		break;
	    case 7:
		d.tx = +d.t7;
		break;
	    case 8:
		d.tx = +d.t8;
		break;
	    case 9:
		d.tx = +d.t9;
		break;
	    case 10:
		d.tx = +d.t10;
		break;
	    case 11:
		d.tx = +d.t11;
		break;
	    case 12:
		d.tx = +d.t12;
		break;
	    case 13:
		d.tx = +d.t13;
		break;
	    case 14:
		d.tx = +d.t14;
		break;
	    case 15:
		d.tx = +d.t15;
		break;
	    case 16:
		d.tx = +d.t16;
		break;
	    case 17:
		d.tx = +d.t17;
		break;
	    case 18:
		d.tx = +d.t18;
		break;
	    case 19:
		d.tx = +d.t19;
		break;
	    case 20:
		d.tx = +d.t20;
		break;
	    case 21:
		d.tx = +d.t21;
		break;
	    case 22:
		d.tx = +d.t22;
		break;
	    case 23:
		d.tx = +d.t23;
	    }
	    return d;
	});
	xAxis.domain([0, 1]);
	var barHeight = height / data.length;

	bar = chart.selectAll("g")
	    .data(data)
	    .attr("transform", function(d, i) {
		return "translate(0," + i * barHeight + ")"; });

	// bar.selectAll("rect")
	//    .style("width", function(d) {
	//      console.log(curTime);
	//      console.log(d.tx);
	//      return xAxis(d.tx); })
	//    .attr("height", barHeight - 1);
	// .transition().duration(1000);

	bar.selectAll("rect").remove();

	bar.append("rect")
            .attr("width", function(d) {
		return xAxis(d.tx); })
            .attr("height", barHeight - 1);


	bar.selectAll("text")
	    .remove(); //removes and then readds it below

	bar.append("text")
	    .attr("x", function(d) {
		return xAxis(d.tx) + 40; })
	    .attr("y", barHeight / 2)
	    .text(function(d) { return d.Activity; });

	bar.append("text")
	    .attr("x", function(d) {
		return xAxis(d.tx); })
	    .attr("y", barHeight / 2)
	    .text(function(d) { return d.tx * 100; });


    });
}



/*========================PIE CHART========================*/
var dataset = [];
var sleeping, ingestion, household, buying, caring_house, caring_not_house, working, education, organizing, leisuresports, social, other, pieSVG, arc, pie, path,tooltip, legend;
var init, update;

var legendRectSize = 18;
var legendSpacing = 4;
var colorScheme = ["lightgreen", "lightsteelblue", "red", "green", "maroon", "orange", "steelblue", "purple", "goldenrod", "blue", "cyan", "navy"];

var color = d3.scaleOrdinal()
	.range(colorScheme);

d3.csv("/static/table2.csv", function(data) {
    sleeping = data[0];
    ingestion = data[1];
    household = data[2];
    buying = data[3];
    caring_house = data[4];
    caring_not_house = data[5];
    working = data[6];
    education = data[7];
    organizing = data[8];
    leisuresports = data[9];
    social = data[10];
    other = data[11];
    dataset = [sleeping,ingestion,household,buying, caring_house, caring_not_house, working, education, organizing, leisuresports, social, other];

    console.log(dataset);

    //var dataset = [sleeping,ingestion,household,buying, caring_house, caring_not_house, working, education, organizing, leisuresports, social, other];


    // d3.csv("https://gist.githubusercontent.com/d3noob/fa0f16e271cb191ae85f/raw/bf896176236341f56a55b36c8fc40e32c73051ad/treedata.csv", function(data){
    //     console.log(data);
    // });


    pieSVG = d3.select("#chart").append("svg");
    var height = 500;
    var width = 500;
    var radius = height / 2;



    pieSVG.attr("width", width)
	.attr("height", height)
	.style("border-style","solid")
	.style("border-width","5px")
	.append("g")
	.attr("transform", "translate(" + (width / 2) +  "," + (height / 2) + ")");

    arc = d3.arc()
	.innerRadius(0)
	.outerRadius(radius);

    pie = d3.pie();

    tooltip = d3.select("#chart")
	.append("div")
	.attr("class", "tooltip");

    tooltip.append("div")
	.attr("class", "label");

    tooltip.append("div")
	.attr("class", "hour");

    init = function(){
	//activity = document.getElementById("activity").value;
	console.log("testing = " + activity);
	pie.value( function(d){
	    if( activity == "avg_weekly" ){ console.log(d.avg_weekly); return d.avg_weekly; }
	    else if( activity == "avg_weekend" ){ console.log(d.avg_weekend); return d.avg_weekend; }
	    else if( activity == "percent_weekly" ){ return d.percent_weekly; }
	    else if( activity == "percent_weekend" ){ return d.percent_weekend; }
	    else if( activity == "pro_weekly" ){ return d.pro_weekly; }
	    else if( activity == "pro_weekend" ){ return d.pro_weekend; }

	});

	path = pieSVG.selectAll("path")
	    .data(pie(dataset))
	    .enter()
	    .append("path")
	    .attr("d", arc)
	    .attr("fill", function(d, i) {
		if( i  == 0 ){ return "lightgreen"; }
		else if( i == 1 ){ return "lightsteelblue"; }
		else if( i == 2 ){ return "red"; }
		else if( i == 3 ){ return "green"; }
		else if( i == 4 ){ return "maroon"; }
		else if( i == 5 ){ return "orange"; }
		else if( i == 6 ){ return "steelblue"; }
		else if( i == 7 ){ return "purple"; }
		else if( i == 8 ){ return "goldenrod"; }
		else if( i == 9 ){ return "blue"; }
		else if( i == 10 ){ return "cyan"; }
		else if( i == 11 ){ return "navy"; }
	    })
	    .attr("transform", "translate(" + (width / 2) +  "," + (height / 2) + ")")

	path.on('mouseover', function(d){
	    tooltip.select('.label').html(d.data.Activity.toUpperCase()).style('color','black');
	    tooltip.select('.label').html(d.data.Activity);

	    if( activity == "avg_weekly" ){
		console.log("testing = " + d.data.avg_weekly);
		tooltip.select('.hour').html(d.data.avg_weekly + ' hour'); }
	    else if( activity == "avg_weekend" ){
		tooltip.select('.hour').html(d.data.avg_weekend + ' hour');}
	    else if( activity == "percent_weekly" ){
		tooltip.select('.hour').html(d.data.percent_weekly + ' %'); }
	    else if( activity == "percent_weekend" ){
		tooltip.select('.hour').html(d.data.percent_weekend + ' %'); }
	    else if( activity == "pro_weekly" ){
		tooltip.select('.hour').html(d.data.pro_weekly + ' hour'); }
	    else if( activity == "pro_weekend" ){
		tooltip.select('.hour').html(d.data.pro_weekend + ' hour'); }

	    tooltip.style('display', 'block');
	    tooltip.style('opacity',2);
	});

	path.on("mousemove", function(d){
	    tooltip.style("top", (d3.event.layerY + 10) + "px")
		.style("left", (d3.event.layerX - 25) + "px");
	});

	path.on('mouseout', function() {
			tooltip.style('display', 'none');
			tooltip.style('opacity',0);
		});
	



    }
    var pieTween = function(b){
	b.innerRadius = 0;
	var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	return function(t){ return arc(i(t)); };
    }
    init();

    update = function() {
	if( activity == document.getElementById("activity").value ){}
	else{
	    activity = document.getElementById("activity").value;
	    path = pieSVG.selectAll("path")
		.data(pie(dataset))
		.attr("d", arc)
		.attr("fill", function(d, i) {

		    if( i  == 0 ){ return "lightgreen"; }
		    else if( i == 1 ){ return "lightsteelblue"; }
		    else if( i == 2 ){ return "red"; }
		    else if( i == 3 ){ return "green"; }
		    else if( i == 4 ){ return "maroon"; }
		    else if( i == 5 ){ return "orange"; }
		    else if( i == 6 ){ return "steelblue"; }
		    else if( i == 7 ){ return "purple"; }
		    else if( i == 8 ){ return "goldenrod"; }
		    else if( i == 9 ){ return "blue"; }
		    else if( i == 10 ){ return "cyan"; }
		    else if( i == 11 ){ return "navy"; }

		})
		.attr("transform", "translate(" + (width / 2) +  "," + (height / 2) + ")")
		.transition()
		.ease(d3.easeLinear)
		.duration(500)
		.attrTween("d", pieTween);
	}
    }


});
/*========================  CLOCK  ========================*/


var hr=0;
var min=0;
var sec=0;

var getTimes = function(){
    sec +=1;
    if( sec < 59 ){
	sec+=1;
    }
    else if( min < 59){
	if( (min % 12/5)== 0 && min != 0 ){
	    hr+=1;
	}
	sec=0;
	min+=1;
    }
    else{
	min = 0;
	sec = 0;
	hr += 1;
	curTime = (curTime + 1) % 24
	console.log("Current hour:");
	console.log(curTime);
    }
}

getTimes();

var pi = Math.PI;

var svg = d3.select(".clock")
    .attr("width",500)
    .attr("height",500)
    .style("border-style","solid")
    .style("border-width","5px");

var create = function(){
    var clock = svg.append("circle")
	.attr("r",250)
	.attr("fill", "LightSteelBlue")
	.attr("stroke", "black")
	.attr("stroke-width",5)
	.attr("transform", "translate(" + (250) +  "," + (250) + ")")
	.enter();

    var center = svg.append("circle")
	.attr("r",15)
	.attr("fill", "black")
	.attr("transform", "translate(" + (250) +  "," + (250) + ")");

    for( var i = 0; i < 60; i+=1 ){
	var twoX, twoY, oneX, oneY;
	twoX = Math.cos(2*i*pi/60)*250 + 250;
	twoY = Math.sin(2*i*pi/60)*250 + 250;
	oneX = Math.cos(2*i*pi/60)*240 + 250;
	oneY = Math.sin(2*i*pi/60)*240 + 250;
	if( i%5 == 0 ){
	    oneX = Math.cos(2*i*pi/60)*230 + 250;
	    oneY = Math.sin(2*i*pi/60)*230 + 250;
	}

	var tickers = svg.append("line")
	    .attr("x1",oneX)
	    .attr("y1",oneY)
	    .attr("x2",twoX)
	    .attr("y2",twoY)
	    .attr("stroke","black")
	    .attr("stroke-width",5);

    }

}

create();
var secHand, minHand, hrHand;

var set = function(){
    secHand = svg.append("line")
	.attr("stroke","red")
	.attr("stroke-width",2)
	.attr("x1",250)
	.attr("y1",250)
	.attr("x2", Math.cos(2*(sec-15)*pi/60)*200 + 250)
	.attr("y2", Math.sin(2*(sec-15)*pi/60)*200 + 250);

    minHand = svg.append("line")
	.attr("stroke","black")
	.attr("stroke-width",3)
	.attr("x1",250)
	.attr("y1",250)
	.attr("x2", Math.cos(2*(min-15)*pi/60)*200 + 250)
	.attr("y2", Math.sin(2*(min-15)*pi/60)*200 + 250);

    hrHand = svg.append("line")
    	.attr("stroke","black")
	.attr("stroke-width",5)
	.attr("x1",250)
	.attr("y1",250)
	.attr("x2", Math.cos(2*(hr-15)*pi/60)*150 + 250)
	.attr("y2", Math.sin(2*(hr-15)*pi/60)*150 + 250);

}
set();

var tick = function(){
    getTimes();
    secHand.attr("x2", Math.cos(2*(sec-15)*pi/60)*200 + 250)
    	.attr("y2", Math.sin(2*(sec-15)*pi/60)*200 + 250);

    minHand.attr("x2", Math.cos(2*(min-15)*pi/60)*200 + 250)
	.attr("y2", Math.sin(2*(min-15)*pi/60)*200 + 250);

    hrHand.attr("x2", Math.cos(2*(hr-15)*pi/60)*150 + 250)
	.attr("y2", Math.sin(2*(hr-15)*pi/60)*150 + 250);
}

setInterval(tick,1/10000);

//var slider =
//d3.slider();
//.value(1000)
//.on("slide", function(evt, value){
//setInterval(tick, value);
//});



/*========================  Hour Display  ========================*/
var interHour = setInterval(function() {
          updateHour();
        }, 100);
hour_div = d3.select(".hour_display");
hour_div.append("h3").text(curTime);
var updateHour = function() {
  hour_div.selectAll("h3").remove();
  hour_div.append("h3").text(curTime);
}

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
