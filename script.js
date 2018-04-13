var hr;
var min;
var sec;

var getTimes = function(){
    var currTime = new Date();
    hr = currTime.getHours();
    min = currTime.getMinutes();
    sec = currTime.getSeconds();
}

getTimes();

var time = function(){
    var clockData = [
	{
	    "unit": "second",
	    "value": sec
	},
	{
	    "unit": "minute",
	    "value": min
	},
	{
	    "unit": "hour",
	    "value": hr
	}
    ];

    return clockData;
}

var pi = Math.PI;

var scaleS = function(){
    d3.scaleLinear().domain([0, 59 + 999/1000]).range([0, 2 * pi]);
}
var scaleM = function(){
    d3.scaleLinear().domain([0, 59 + 59/60]).range([0, 2 * pi]);
}
var scaleH = function(){
    d3.scaleLinear().domain([0, 11 + 59/60]).range([0, 2 * pi]);
}

/**
   var activity = "";

var getSelection = function(){
    activity = document.getElementById("activity").value;
}
**/

var data = [2, 4, 7, 12];


var body = d3.select("body");

var svg = body.append("svg")
    .attr("width",500)
    .attr("height",500)
    .style("border-style","solid")
    .style("border-width","5px");

  var handBackLength = function(d) {
    if (d[0] == "second")
      return Math.round(0.25 * 250)
    else
      return Math.round(0.10 * 250)
  }

  var handLength = function(d) {
    if (d[0] == "hour")
      return Math.round(0.45 * 250)
    else
      return Math.round(0.90 * 250)
  }

var rotationTransform = function(d) {
    var angle = 0;
    if(d.unit == "hour"){
	angle = (d[1] % 12) * 30;
    }
    else{
	angle = d[1] * 6;
    }
    return "rotate(" + angle + "," + 250 + "," + 250 + ")"
}

var create = function(){
    var hourTickLength = Math.round(250*0.2);
    var minuteTickLength = Math.round(250*0.075);
    var clock = svg.append("svg:circle")
	.attr("r",250)
	.attr("fill", "LightSteelBlue")
	.attr("class","clock outercircle")
	.attr("stroke", "black")
	.attr("stroke-width",5)
	.attr("transform", "translate(" + (250) +  "," + (250) + ")")
	.enter();

    for (var i = 0; i < 60; i+=1) {
      var tickLength, tickClass
      if ((i % 5) == 0) {
        tickLength = hourTickLength
        tickClass = "hourtick"
      }
      else {
        tickLength = minuteTickLength
          tickClass = "minutetick"
      }
	svg.append("line")
            .attr("class", tickClass + " face")
            .attr("x1", 250)
            .attr("y1", 4)
            .attr("x2", 250)
            .attr("y2", 200 + tickLength)
            .attr("transform", "rotate(" + i * 6 + "," + 250 + "," + 250 + ")")
    }
    
    var center = svg.append("svg:circle")
	.attr("r",15)
	.attr("fill", "black")
	.attr("class", "clock innercircle")
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

    minHand = svg.append("line")
	.attr("stroke","black")
	.attr("stroke-width",5)
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

setInterval(tick);


