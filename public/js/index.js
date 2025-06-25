"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
}

const quotes = [
    {
        quote: "Get away from her you Bitch!",
        author: "Ellen Ripley",
    },

    {
        quote: "Aww man, I just shot Marvin in the face.",
        author: "Vincent Vega",
    },

    {
        quote: "It's like I've been living in a dream where I was really invested in the Zack Snyder cut of 'Justice League'.",
        author: "Barbie",
    }
]

/*Let's walk through what is happening inside the loopThroughQuotes function. We are declaring a variable named quoteIndex to track where we 
are at while looping through the array of quotes. You may notice that we don't have any kind of for... loop, so how are we looping through our 
quotes object? If you look at the next line, we're calling the setInterval function. This is where the looping is happening.

setInterval takes in two arguments - a callback function and the amount of time in milliseconds that you want to pass before it calls that 
callback function again. In our case, our callback function is an anonymous function that checks if our quoteIndex is less than the length 
of the quotes array. If it is, we assign the respective quote and author elements' textContent to the values of the current quote index. 
Then we increment quoteIndex by 1. If the quoteIndex is greater then the length of the quotes array, we set the quoteIndex back to zero and 
repeat the process. This callback will be executed roughly every 3 seconds.*/

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);