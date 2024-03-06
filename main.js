const qoute = document.getElementById("quote");
const author =document.getElementById("author");
//fetching API
const api_url ="https://api.quotable.io/random";

//Calling aysnc await 
async function getQuote(url){
    //to fetch the data from the url and await make sure that whenever this task is running another operations should wait until it finish the task
    const response = await fetch(url);

    //to convert the AJAX file int Json we have to use json() method
    var data = await response.json();

    //to display the quote 
    qoute.innerHTML = data.content;

    //to display the author name
    author.innerHTML = data.author;
}

//to post the tweet
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}

getQuote(api_url);