# portfolioviz
Most of the clean, pertinent code is in script2.js. 

tester2 messy is all the things I'm working through. 
Tester3 will show four different ways to call the stock prices, most importantly, this has the historical stock data call.

I need help to append the returned data to a chart rather than simply print them to the body.

All you should need is the symbols.csv file and either tester3.html or tester.html + script2.js

The symbols.csv file is a list of all of the ticker symbols to iterate through and append to the end of the api url call. 
The "for copying and pasting" file contains the amount of each stock owned. For future use once I can get the JSON price data to be useable. 

In the long run, I'd like to it to give me current price of each stock, multiply it by the amount held (to show volume, and significant ownership vs minor shares) and then use that as the area determiner in the streamgraph (https://bl.ocks.org/mbostock/4060954). In the longer run, I'm going to be showing news headlines that relate to the holdings as well (cross that bridge when I come to it).

