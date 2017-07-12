var i=[];
var splat;
    
var symbols = d3.csv("symbols.csv", function(data){
    var arrayLength = data.length;

    for (var i = 0; i< arrayLength; i++){
      var symbol = data[i].ticker;
      var yahooURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22"+symbol+"%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      var herokuappURL = "https://nasdaqviz.herokuapp.com/api/v1.1/markets/data/nsdaq/realtime/"+symbol;
      splat = data[i];

    // $.getJSON(herokuappURL, function(jsonData){
    //     var quote2 = jsonData['Price'];
    //     document.write("<p>"+splat+" : "+quote2+"</p>");
    // })
      

    $.getJSON(yahooURL, function (jsonData){
        var quote = jsonData.query.results.quote;

        document.write("<p>"+quote.Symbol+" : "+quote.LastTradePriceOnly+"</p>");
      }).error(function(xhr, errorType, exception) {
        var errorMessage = exception || xhr.statusText;
        
        console.log("Error "+errorMessage);
      })
     };
});
