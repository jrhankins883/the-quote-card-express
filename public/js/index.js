"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
}

/*const quotes = [
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

Let's walk through what is happening inside the loopThroughQuotes function. We are declaring a variable named quoteIndex to track where we 
are at while looping through the array of quotes. You may notice that we don't have any kind of for... loop, so how are we looping through our 
quotes object? If you look at the next line, we're calling the setInterval function. This is where the looping is happening.

setInterval takes in two arguments - a callback function and the amount of time in milliseconds that you want to pass before it calls that 
callback function again. In our case, our callback function is an anonymous function that checks if our quoteIndex is less than the length 
of the quotes array. If it is, we assign the respective quote and author elements' textContent to the values of the current quote index. 
Then we increment quoteIndex by 1. If the quoteIndex is greater then the length of the quotes array, we set the quoteIndex back to zero and 
repeat the process. This callback will be executed roughly every 3 seconds.

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

setTimeout(loopThroughQuotes, 3000);*/

async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();

/*Here we are creating an asynchronous function that will make our request to the Unsplash API. First, we create a variable to hold our API key.
Next we declare a variable to hold the endpoint that we will be touching with our fetch request. Notice that we use string interpolation here. 
Having both the endpoint with our key results in a long, ugly string. Plugging in our client id with string interpolation makes it cleaner and 
easily readable.

Next we have our try/catch block. Remember that when we use async and await, we need it to be inside a try/catch block so that we can handle 
errors. Inside the try block, we make our fetch request to the endpoint and store the result of our request variable named response. 
Don't forget that we need the await keyword to wait for the returned data before assigning it to response.

After receiving our response, we need to parse it into a data format that we can use. This is where response.json() comes in. The json() method 
of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON. 
It is an asynchronous function as well, so we need the await keyword when invoking the method. The end result is that we will receive a JavaScript 
object if the promise resolved and store it inside returnedData. To see if we are receiving any data at a quick glance or check for errors with 
our JavaScript, let's log the returned data.*/
