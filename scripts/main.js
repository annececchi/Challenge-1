//Brandastof

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
//google.charts.setOnLoadCallback(drawChart2);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Brandstof', 'Liters'],
      ['Beschikbare brandstof', 72],
      ['Verbruikte brandstof', 28],
    ]);

    var options = {
      pieHole: 0.4,
      pieSliceTextStyle: {
        color: 'white',
        fontSize: 20,
        
      },
      legend: 'none',
      backgroundColor:'transparent',
        slices: {0: {color: '#48548F'}, 1:{color: '#AEA9D2'},}
    };
    

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
}


//function drawChart2() {
//
//    var data = google.visualization.arrayToDataTable([
//      ['Effort', 'Amount given'],
//      ['My all',     100],
//    ]);
//
//    var options = {
//      pieHole: 0.5,
//      pieSliceTextStyle: {
//        color: 'black',
//      },
//      legend: 'none'
//    };
//
//    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
//    chart.draw(data, options);
//}




// Afstand over tijd





//Snelheid

window.feed = function(callback) {
  var tick = {};
  tick.plot0 = Math.ceil(350 + (Math.random() * 500));
  callback(JSON.stringify(tick));
};

var myConfig = {
 	type: "gauge",
 	globals: {
 	  fontSize: 16,
        color: 'white',
 	},
 	plotarea:{
 	  marginTop:80
 	},
 	plot:{
 	  size:'100%',
 	  valueBox: {
 	    placement: 'center',
 	    text:'%v', //default
 	    fontSize:`16`,
 	    rules:[
 	      {
 	        rule: '%v >= 700',
 	        text: '%v<br>Te hoge snelheid'
 	      },
 	      {
 	        rule: '%v < 700 && %v > 640',
 	        text: '%v<br>Hoge snelheid'
 	      },
 	      {
 	        rule: '%v < 640 && %v > 580',
 	        text: '%v<br>Normale snelheig'
 	      },
 	      {
 	        rule: '%v <  580',
 	        text: '%v<br>Te lage snelheid'
 	      }   
 	    ]
 	  }
 	},
  tooltip:{
    borderRadius:5
  },
scaleR:{
  aperture:180,
  minValue:300,
  maxValue:850,
  step:50,
  center:{
    visible:false
  },
  tick:{
    visible:false
  },
  item:{
    offsetR:0,
    rules:[
      {
        rule:'%i == 9',
        offsetX:15
      }
    ]
  },
  labels:['300','','','','','','580','640','700','750','','850',],
    fontColor: '#fff',
    ring:{
    size:60,
    rules:[
      {
        rule:'%v <= 580',
        backgroundColor:'#AEA9D2'
      },
      {
        rule:'%v > 580 && %v < 640',
        backgroundColor:'#6E72C0'
      },
      {
        rule:'%v >= 640 && %v < 700',
        backgroundColor:'#48548F'
      },
      {
        rule:'%v >= 700',
        backgroundColor:'#1A2C52'
      }      
    ]
  }
},
  refresh:{  
      type:"feed",
      transport:"js",
      url:"feed()",
      interval:2500,
      resetTimeout:3000
  },
    backgroundColor:'none',
 	plotarea:{
 	  backgroundColor:'transparent',
    },
	series : [
		{
			values : [555], // starting value
			backgroundColor:'white',
	    indicator:[10,10,10,10,0.75],
	    animation:{  
        effect:2,
        method:1,
        sequence:10,
        speed: 5000
     },
		}
	]
};

zingchart.render({ 
	id : 'myChart', 
	data : myConfig, 
	height: 480, 
	width: '100%'
});

