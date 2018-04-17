var activity = "";

var getActivity = function(){
    activity = document.getElementById("activity").value;
}

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

var body = d3.select("body");

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

