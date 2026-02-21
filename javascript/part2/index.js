const favMovie = "male";

let guess = prompt("guess fav movie :");

while( guess != favMovie){
   if( guess == "quit"){
    console.log("you quit");
    break;
   }
    guess = prompt("wrong guess plz ty again");
}

if( guess == favMovie){
    console.log("Congratus");
}