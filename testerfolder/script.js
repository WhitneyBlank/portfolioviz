
  //d3.csv(portfolio.csv)
  //.row(function(d) {
    //d.date = new Date(d.Timestamp * 1000);
    //return d;
  //})
//  .get(function(error, rows) { renderChart(rows); });

//function renderChart(data) {
  //var chart = fc.chart.linearTimeSeries()
    //    .xDomain(fc.util.extent(data, 'date'))
      //  .yDomain(fc.util.extent(data, ['open', 'close']));

  //var area = fc.series.area()
    //    .yValue(function(d) { return d.open; });

//  chart.plotArea(area);

  //d3.select('#time-series')
    //    .datum(data)
      //  .call(chart);
//}

//d3.tsv("symbols.tsv", function(data) {
    // use data here
  //  var str = data;
    //var xox = str.split(' ');
    //console.log(xox);
//});
var i, arr =[];

var splat;
var ps;
var waht;
var url = 'https://nasdaqviz.herokuapp.com/api/v1.1/markets/data/nsdaq/realtime/BLK';
//var jsonObject;
var blah;
var splart;
    

//     ( function getStockPrice(){
//          // var urltwo = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+splat+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
//          //var fullprice = "default";
//          $.getJSON(url+"BLK", function (jsonData){
//          // fullprice = jsonData.Price;
//         //ps = jsonData.query.results.quote.YearLow;
//          ps =jsonData['Price'];
//          //callback(ps);
//          console.log(ps);


//   });
// })();

var symbols = d3.csv("symbols.csv", function(data){
    var arrayLength = data.length;
    for (var i = 0; i< arrayLength; i++){
      var tickersymbol = data.ticker;
      splat = data[i];
      //console.log(splat);
    
    $.getJSON(url, function (jsonData){
        //ps = jsonData.query.results.quote.YearLow;
         ps =jsonData['Price'];
         console.log(ps);

 })
     };
  });


    // //(function getStockPrice(){
    //      // var urltwo = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+splat+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
    //      //var fullprice = "default";
    //      $.getJSON(url, function (jsonData){
    //      // fullprice = jsonData.Price;
    //      //ps = jsonData.query.results.quote.YearLow;
    //      ps =jsonData['Price'];
    //      //callback(ps);
    //      console.log(ps);


    //      });
     //   });
//
  
//         function getStockPrice(splat, callback){
//          // var urltwo = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+splat+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
//          var fullprice = "default";
//          $.getJSON(url+"BLK", function (jsonData){
//          // fullprice = jsonData.Price;
//         //ps = jsonData.query.results.quote.YearLow;
//          ps = data['Price'];
//          callback(ps);
//          console.log(ps);


//   });
// }
// getStockPrice(data,function(Price){
//   console.log(ps);
// });
 
//var blah = 
// getStockPrice(url+splat, function(Price){
//   //blah = Price;
//   ps;
//   console.log(ps);
//   //call(Price);
//  // console.log(Price);
// });
//console.log(blah['Price']);


 // }
 //     });
 //  };


// var jqxhr = $.getJSON(url+"BLK", function() {
//   console.log( "success" );
//   console.log(['Price']);
// })
//   .done(function() {
//     console.log( "second success" );
//   })
//   .fail(function() {
//     console.log( "error" );
//   })
//   .always(function() {
//     console.log( "complete" );
//   });
 
// // Perform other work here ...
 
// // Set another completion function for the request above
// jqxhr.complete(function() {
//   console.log( "second complete" );
// });

// jqxhr.complete(function('Price')(){
//   console.log('Price');
// }



//var url = 'https://nasdaqviz.herokuapp.com/api/v1.1/markets/data/nsdaq/realtime/';
// var urltwo = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
//var prices = $.getJSON(urltwo, function(data, success) {
  //   //data is the JSON string

  // ps = data.query.results.quote.YearLow;
  //    console.log(ps);
  // });


// //var waht = JSON.stringify(prices);
// console.log(url['Price']);
// var prices = d3.json(url, function(json){
// //console.log(json['Price']);
// splat = json;
// ps = json['Price'];
// });




// (function() {
//  $.getJSON( url, {
//     tags: "Price",
//     tagmode: "any",
//     format: "json"
//   })
//     .done(function( data ) {
//       $.each( data.items, function( i, item ) {
//         $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//         if ( i === 3 ) {
//           return false;
//           waht = data;
//           console.log(data);
//         }
//       });
//     });
// })();

// $.getJSON( url, function( json ) {
//   //( "JSON Data: " + json.Price );
//   //waht = json.Price;
//   this.price = json.Price;
//   //console.log(waht);
//  }.bind(this));

// console.log(this.Price);
// waht = "BLK";
// function getStockPrice(waht, callback){
//   var fullprice = "default";
//   $.getJSON(url+waht, function (jsonData){
//     fullprice = jsonData.Price;
//     callback(fullprice);
//   });
// }
 
// var blah = getStockPrice(waht, function(Price){
//   blah = Price;
//   console.log(Price);
// });


 




// console.log(blah);



// var myData = getSomething();

// function getSomething(){
//     var result = null;
//     $.ajax(
//         async: false;
//         url: url,
//         data: {data},
//         dataType: "json",
//         success: function(data){
//             result = data;
//         }
//     );
//     return result;
// }

// console.log(myData);

// function getSomething(){
//     $.getJSON(url, {data}, myCallback)
// }

// function myCallback(data){
//     // Do some processing!
//     var xox = data['Price'];
//     console.log(xox);
// }

//console.log(xox);




