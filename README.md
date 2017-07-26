# portfolioviz
Most of the pertinent code is in script2.js

I need help to append the returned data to a chart rather than simply print them to the body. I realize I will need the historical data, rather than the now data to do a time-series chart.

The symbols.csv file is a list of all of the ticker symbols to iterate through and append to the end of the api url call. 
The "for copying and pasting" file contains the amount of each stock owned. For future use once I can get the JSON price data to be useable. 

In the long run, I'd like to it to give me current price of each stock, multiply it by the amount held (to show volume, and significant ownership vs minor shares) and then use that as the area determiner in the streamgraph (https://bl.ocks.org/mbostock/4060954).

