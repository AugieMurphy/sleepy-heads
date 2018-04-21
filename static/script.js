var body = d3.select("body");

/*========================SELECT CHART========================*/

var activity = "avg_weekly";

var getActivity = function(){
    activity = document.getElementById("activity").value;
}

/*======================BAR CHART======================*/
var activity_header = []
var activity_time = []

d3.csv("/static/hourly.csv", function(error, data) {
    if (error) throw error;

    data.forEach(function (d)  {
	d.Activity = d.Activity; //?
	d.t0 = +d.t0; //plus makes sure it's a number
	d.t1 = +d.t1;
	d.t2 = +d.t2;
	d.t3 = +d.t3;
	d.t4 = +d.t4;
	d.t5 = +d.t5;
	d.t6 = +d.t6;
	d.t7 = +d.t7;
	d.t8 = +d.t8;
	d.t9 = +d.t9;
	d.t10 = +d.t10;
	d.t11 = +d.t11;
	d.t12 = +d.t12;
	d.t13 = +d.t13;
	d.t14 = +d.t14;
	d.t15 = +d.t15;
	d.t16 = +d.t16;
	d.t17 = +d.t17;
	d.t18 = +d.t18;
	d.t19 = +d.t19;
	d.t20 = +d.t20;
	d.t21 = +d.t21;
	d.t22 = +d.t22;
	d.t23 = +d.t23;
    });
    console.log(data);
    console.log(data[0]["Activity"]); //this prints sleeping
    //var chart = d3.select(".bar");
    //var bar = chart.selectAll("div");
    //var barUpdate = bar.data(data["Sleeping"]);
    //var barEnter = barUpdate.enter().append("div");
    var bars = svg.selectAll(".bar")
	.data(data)
	.enter()
	.append("g");
    bars.append("rect")
	.attr("class", "bar")
	.attr("y", function(d) {
	    return
    barEnter.transition().duration(2000).style("width", function(d) {
	return d * 10 + "px"; });
    barEnter.text(function(d) { return d; });
    bar.data(activity_header).append("p").attr("style", "float:none").text(function(d){
	return d; });


})});



/*========================PIE CHART========================*/
var dataset = [];
var sleeping, ingestion, household, buying, caring_house, caring_not_house, working, education, organizing, leisuresports, social, other, pieSVG, arc, pie, path,text;
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
	.innerRadius(100)
	.outerRadius(radius);
	pie = d3.pie();


  init = function(){
    //activity = document.getElementById("activity").value;
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
	  .attr("transform", "translate(" + (width / 2) +  "," + (height / 2) + ")")
	  .transition()
	  .ease(d3.easeLinear)
	  .duration(1000)
	  .attrTween("d", pieTween);

      text = pieSVG.selectAll("text")
      	  .transition()
	  .ease(d3.easeLinear)
	  .duration(2000)
	  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")";})
	  .attr("dy", ".35em")
	  .text(function(d) {
	      if (activity == "avg_weekly"){
		  return d.data.avg_weekly;
	      }
	      else if (activity == "avg_weekend"){
		  return d.data.avg_weekend;
	      }
	      else if (activity == "percent_weekly"){
		  return d.data.percent_weekly;
	      }
	      else if (activity == "percent_weekend"){
		  return d.data.percent_weekend;
	      }
	      else if (activity == "pro_weekly"){
		  return d.data.pro_weekly;
	      }
	      else{
		  return d.data.pro_weekend;
	      }
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
		.duration(2000)
		.attrTween("d", pieTween);
	}
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
