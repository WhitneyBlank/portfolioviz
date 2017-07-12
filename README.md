# trumpsite

I switched into the new code using script2.js (as a new file)   tester.html is updated to seek script2.js 

The symbols.csv file is a list of all of the ticker symbols to iterate through and append to the end of the api url call. 
The "for copying and pasting" file contains the amount of each stock owned. For future use once I can get the JSON price data to be useable. 

Most of the code is in script.js. I think I have it cleaned up enough to see what I was trying, but I left all of the commented out code to show what a mess I've been and how many different things I've tried!

Basically, I can get the JSON to tell the console the current price of the stock via both api urls but I can't get that number to be useable outside of its own funciton. Nor can I get it to iterate through all of the ticker symbols and generate prices for each. I can, however, get it to just interate through the symbols.csv and tell the console all of the tickers in the spreadsheet, but that part was easy.

In the long run, I'd like to it to give me current price of each stock, multiply it by the amount held (to show volume, and significant ownership vs minor shares) and then use that as the area determiner in the streamgraph (https://bl.ocks.org/mbostock/4060954).

To do this, I need just to 1) access the returned price from the json (outside of its own function) and be able to multiply it. And 2) be able to go automatically through all the different symbols. (Slightly less critical since I could just do that manually (for all 190 holdings haha).
