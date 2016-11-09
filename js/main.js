var computer = Math.floor(Math.random()*100);
console.log(computer);


function game() {
      var user = document.querySelector(".guess").value;
      console.log(user);
  
    if (user > computer) {
        document.getElementById("guessResponse").innerHTML = "<br> You're too high!";
    } else if (user < computer) {
        document.getElementById("guessResponse").innerHTML = "<br> You're too low!";
    } else if (user == computer) {
        document.getElementById("guessResponse").innerHTML = "<br> Great Guess!";
    } else {
        document.getElementById("guessResponse").innerHTML = "<br> Just picke something!";
    }
}



// var max = 100
// var min = 1

// function getRandom(min,max){
//     return Math.random() * (max-min) + min;
// }

// var guessResponse;
// if (guessResponse)