var arrayOfQuotes = [

{
	"Author":"Jim Rohn",
	"Quote":"Beware of what you become in pursuit of what you want."
},
{
	"Author":"Epictetus",                                                                                              
	"Quote":"It's not what happens to you,but how you react to it that matters."
},
{
    "Author":"Frank Sinatra",
    "Quote":"The Best Revenge is Massive Success."
 },
 {
 	"Author":"Wayne Gretzy",
 	"Quote":"You Miss 100% of the shots you don't take."
 },
 {
 	"Author":"Nelson Mandela",
 	"Quote":"Resentment is like drinking poison and waiting for your enemies to die."
 },

 {
 	"Author":"Confucius",
 	"Quote":"Silence is a true friend who never betrays."

 },

 {
 	"Author":"Franklin P.Jones",
 	"Quote":"Love Does not make the world go Round. Love is what makes the Ride WorthWhile."

 },
{
	"Author":"Elbert Hubbard",
	"Quote":"Do Not Take Life too Seriously.You will not get out alive."

},
{
	"Author":"Badal Raj",
	"Quote":"The Most Valuable Gift You can Received a Honest Best Friend in Your Life."
},
{
	"Author":"Lydon B.Johnson",
	"Quote":"Yesterday is not ours to recover, but tomorrow is ours to win or lose."

}


]

function randomSelector(arrayLength){
  return Math.floor(Math.random() * arrayLength);
}

function GenerateQuotes() {
	var randomNumber=randomSelector(arrayOfQuotes.length);

	document.getElementById("QuoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].Quote + '"';
    document.getElementById("AuthorOutput").innerHTML = "-" + arrayOfQuotes[randomNumber].Author;
}