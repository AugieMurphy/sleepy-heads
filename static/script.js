var body = d3.select("body");

/*========================BAR CHART========================*/

var activity = "avg_weekly";

var getActivity = function(){
    activity = document.getElementById("activity").value;
}

/*======================BAR CHART======================*/
var activity_header = []
var activity_time = []
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(activity_time);
var barEnter = barUpdate.enter().append("div");
barEnter.transition().duration(2000).style("width", function(d) {
  return d * 10 + "px"; });
barEnter.text(function(d) { return d; });
bar.data(activity_header).append("p").attr("style", "float:none").text(function(d){
  return d; });





/*========================PIE CHART========================*/
var dataset = [];
var sleeping, ingestion, household, buying, caring_house, caring_not_house, working, education, organizing, leisuresports, social, other, pieSVG, arc, pie, path;
var init, update;

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
    //console.log(sleeping["avg_weekly"]);
    dataset = [sleeping,ingestion,household,buying, caring_house, caring_not_house, working, education, organizing, leisuresports, social, other];


//var dataset = [sleeping,ingestion,household,buying, caring_house, caring_not_house, working, education, organizing, leisuresports, social, other];


// d3.csv("https://gist.githubusercontent.com/d3noob/fa0f16e271cb191ae85f/raw/bf896176236341f56a55b36c8fc40e32c73051ad/treedata.csv", function(data){
//     console.log(data);
    // });


    pieSVG = body.append("svg");
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


  init = function(){
    activity = document.getElementById("activity").value;
    console.log(activity);
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
	    .attr("transform", "translate(" + (width / 2) +  "," + (height / 2) + ")");
    }

  update = function() {
    console.log("hi");


  }

    // setInterval(init);
// init();

});
// init();

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
    }
}

getTimes();

var pi = Math.PI;

var svg = body.append("svg")
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

//var slider =
    //d3.slider();
    //.value(1000)
    //.on("slide", function(evt, value){
	//setInterval(tick, value);
    //});


setInterval(tick,1/10000);
