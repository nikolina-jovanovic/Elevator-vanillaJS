
//////////////////// ELEVATOR A ///////////////////


//CONSTANTS:

const buttonCall_A = document.querySelectorAll(".button_A");
const numbers_A = document.querySelectorAll(".numbers_A");
const choosingfloor_A = document.querySelectorAll(".choosingfloor_A");
const displayCF_A = document.querySelectorAll(".display_A");
const resetBTN_A = document.querySelectorAll(".resetBTN_A");
const sos_A = document.getElementById("sos_A");

//VARIABLES:

var currentFloor_A = 0;
var floorWhichCalls_A;
var timerUp_A;
var timerDown_A;
var gettingClassName_A;
var rightFloor_A;
var rightDoors_A;
var close_A;
var x_A;
var sosClicked_A = false;



// Calling the elevator using buttons beside an elevator doors:

buttonCall_A.forEach((btn) => {
  btn.addEventListener("click",callingTheElevator_A)
});

// Choosing willing floor inside of an elevator:

choosingfloor_A.forEach((each)=> {
  each.addEventListener("click",callingTheElevator_A); 
})


function callingTheElevator_A(){
  

  floorWhichCalls_A = this.id; //We use this because we put our floors just like in real building,lobby at the bottom and penthouse at the top. So, our indexes are reversed, index of the lobby button (when calling elevator) is 10.

  gettingClassName_A = this.className;
  rightFloor_A = gettingClassName_A.match(/\d/g).join(""); //We use this to open the doors on the right floor;



  // Displaying current floor on every floor:
  
  function displayingCF_A(){
    x_A = document.getElementsByClassName("currFloor_A");
    for(var n = 0; n < x_A.length; n++){
      x_A[n].innerHTML = currentFloor_A;
    }
  }

  // Closing the doors:

  function closingTheDoors_A(){
    rightDoors_A = buttonCall_A[currentFloor_A].className.match(/\d/g).join("");
    numbers_A[rightDoors_A].style.display = "none";
    displayCF_A[rightDoors_A].style.backgroundColor = "transparent";
    
  }


  // Go up:

  function goUp_A(){

    // Clearing the timer of previous countdown:
    clearTimeout(close_A);
    close_A = null;

    currentFloor_A = currentFloor_A + 1;
    displayingCF_A()
    
    if(currentFloor_A == rightFloor_A){
      clearTimeout(timerUp_A);
      timerUp_A = null;

      setTimeout(function(){
        numbers_A[floorWhichCalls_A].style.display = "flex";
        displayCF_A[floorWhichCalls_A].style.background = "rgb(61, 158, 188)";
      },1000);
      
      // Closing the doors 12 seconds after not picking the willing floor:
      close_A = setTimeout(closingTheDoors_A,12000);

    }else if(sosClicked_A == true){
      clearTimeout(timerUp_A);
      timerUp_A = null;

      var sosFloor_A = buttonCall_A[currentFloor_A].className.match(/\d/g).join("");
      numbers_A[sosFloor_A].style.display = "flex";
      displayCF_A[sosFloor_A].style.background = "rgb(61, 158, 188)";
      sosClicked_A = false;
      
      // RESET button on the floor where doors were open in an emergency case:
      resetBTN_A.forEach((reset)=> {
        reset.addEventListener("click",resetElevator_A)
      }
      )
    
      function resetElevator_A(){
        numbers_A[sosFloor_A].style.display = "none";
        displayCF_A[sosFloor_A].style.backgroundColor = "transparent";
      }

      return false;

    }else{
      setTimeout(goUp_A,1000);
    }
  }

  
  // Go down function:

  function goDown_A(){

    // Clearing the timer of previous countdown:
    clearTimeout(close_A);
    close_A = null;


    currentFloor_A = currentFloor_A - 1;
    displayingCF_A()

    if(currentFloor_A == rightFloor_A){
      clearTimeout(timerDown_A);
      timerDown_A = null;

      setTimeout(function(){
        numbers_A[floorWhichCalls_A].style.display = "flex";
        displayCF_A[floorWhichCalls_A].style.background = "rgb(61, 158, 188)";
      },1000)

      // Closing the doors 12 seconds after not picking the willing floor:
      close_A = setTimeout(closingTheDoors_A,12000);

    }else if(sosClicked_A == true){
      clearTimeout(timerDown_A);
      timerDown_A = null;

      var sosFloor_A = buttonCall_A[currentFloor_A].className.match(/\d/g).join("");
      numbers_A[sosFloor_A].style.display = "flex";
      displayCF_A[sosFloor_A].style.background = "rgb(61, 158, 188)";
      sosClicked_A = false;
      
      // RESET button on the floor where doors were open in an emergency case:
      resetBTN_A.forEach((reset)=> {
        reset.addEventListener("click",resetElevator_A)
      }
      )
    
      function resetElevator_A(){
        numbers_A[sosFloor_A].style.display = "none";
        displayCF_A[sosFloor_A].style.backgroundColor = "transparent";
      }

      return false;

    }else{
      setTimeout(goDown_A,1000);
    }


  }
  
  

  /// Setting timers ///

  if(currentFloor_A == rightFloor_A){
    displayingCF_A();
    setTimeout(function(){
      numbers_A[floorWhichCalls_A].style.display = "flex";
      displayCF_A[floorWhichCalls_A].style.background = "rgb(61, 158, 188)";
    },1000)

    // Closing the doors 12 seconds after not picking the willing floor:
    setTimeout(closingTheDoors_A,12000);


  }else if(currentFloor_A > rightFloor_A){
    setTimeout(closingTheDoors_A,1000);
    timerDown_A = setTimeout(goDown_A,2000);
  }else{
    setTimeout(closingTheDoors_A,1000);
    timerUp_A = setTimeout(goUp_A,2000);
  }

  // RESET button:

  resetBTN_A.forEach((reset)=> {
    reset.addEventListener("click",resetElevator_A)
  }
  )

  function resetElevator_A(){
    numbers_A[floorWhichCalls_A].style.display = "none";
    displayCF_A[floorWhichCalls_A].style.backgroundColor = "transparent";
  }

}

// SOS button:

sos_A.addEventListener("click", SOS_A);

function SOS_A(){
  sosClicked_A = true;
}











//////////////////////////ELEVATOR B ////////////////////////////////////


//CONSTANTS:

const buttonCall_B = document.querySelectorAll(".button_B");
const numbers_B = document.querySelectorAll(".numbers_B");
const choosingfloor_B = document.querySelectorAll(".choosingfloor_B");
const displayCF_B = document.querySelectorAll(".display_B");
const resetBTN_B = document.querySelectorAll(".resetBTN_B");
const sos_B = document.getElementById("sos_B");

//VARIABLES:

var currentFloor_B = 0;
var floorWhichCalls_B;
var timerUp_B;
var timerDown_B;
var gettingClassName_B;
var rightFloor_B;
var rightDoors_B;
var close_B;
var x_B;
var sosClicked_B = false;


// Calling the elevator:

buttonCall_B.forEach((btn) => {
  btn.addEventListener("click",callingTheElevator_B)
});

// Calling the elevator using buttons beside an elevator doors:

choosingfloor_B.forEach((each)=> {
  each.addEventListener("click",callingTheElevator_B); 
})


function callingTheElevator_B(){
  

  floorWhichCalls_B = this.id; //We use this because we put our floors just like in real building,lobby at the bottom and penthouse at the top. So, our indexes are reversed, index of the lobby button (when calling elevator) is 10.

  gettingClassName_B= this.className;
  rightFloor_B = gettingClassName_B.match(/\d/g).join(""); //We use this to open the doors on the right floor;



  // Displaying current floor on every floor:
  
  function displayingCF_B(){
    x_B = document.getElementsByClassName("currFloor_B");
    for(var n = 0; n < x_B.length; n++){
      x_B[n].innerHTML = currentFloor_B - 1; //we added "-1" because we want basement to be displayed
    }
  }

  // Closing the doors:

  function closingTheDoors_B(){
    rightDoors_B = buttonCall_B[currentFloor_B].className.match(/\d/g).join("");
    numbers_B[rightDoors_B].style.display = "none";
    displayCF_B[rightDoors_B].style.backgroundColor = "transparent";
    
  }


  // Go up function:

  function goUp_B(){
    //Clearing the timer of previous countdown:
    clearTimeout(close_B);
    close_B = null;

    currentFloor_B = currentFloor_B + 1;
    displayingCF_B()
    
    if(currentFloor_B == rightFloor_B){
      clearTimeout(timerUp_B);
      timerUp_B = null;

      setTimeout(function(){
        numbers_B[floorWhichCalls_B].style.display = "flex";
        displayCF_B[floorWhichCalls_B].style.background = "rgb(77, 87, 147)";
      },1000);
      
      //Closing the doors 7 seconds after not picking the willing floor:
      close_B = setTimeout(closingTheDoors_B,12000);

    }else if(sosClicked_B == true){
      clearTimeout(timerUp_B);
      timerUp_B = null;

      var sosFloor_B = buttonCall_B[currentFloor_B].className.match(/\d/g).join("");
      numbers_B[sosFloor_B].style.display = "flex";
      displayCF_B[sosFloor_B].style.background = "rgb(61, 158, 188)";
      sosClicked_B = false;
      
      // RESET button on the floor where doors were open in an emergency case:
      resetBTN_B.forEach((reset)=> {
        reset.addEventListener("click",resetElevator_B)
      }
      )
    
      function resetElevator_B(){
        numbers_B[sosFloor_B].style.display = "none";
        displayCF_B[sosFloor_B].style.backgroundColor = "transparent";
      }

      return false;

    }else{
      setTimeout(goUp_B,1000);
    }
  }

  
  // Go down function:

  function goDown_B(){

    //Clearing the timer of previous countdown:
    clearTimeout(close_B);
    close_B = null;


    currentFloor_B = currentFloor_B - 1;
    displayingCF_B()

    if(currentFloor_B == rightFloor_B){
      clearTimeout(timerDown_B);
      timerDown_B = null;

      setTimeout(function(){
        numbers_B[floorWhichCalls_B].style.display = "flex";
        displayCF_B[floorWhichCalls_B].style.background = "rgb(77, 87, 147)";
      },1000)

      // Closing the doors 12 seconds after not picking the willing floor:
      close_B = setTimeout(closingTheDoors_B,12000);

    }else if(sosClicked_B == true){
      clearTimeout(timerDown_B);
      timerDown_B = null;

      var sosFloor_B = buttonCall_B[currentFloor_B].className.match(/\d/g).join("");
      numbers_B[sosFloor_B].style.display = "flex";
      displayCF_B[sosFloor_B].style.background = "rgb(77, 87, 147)";
      sosClicked_B = false;
      
      // RESET button on the floor where doors were open in an emergency case:
      resetBTN_B.forEach((reset)=> {
        reset.addEventListener("click",resetElevator_B)
      }
      )
    
      function resetElevator_B(){
        numbers_B[sosFloor_B].style.display = "none";
        displayCF_B[sosFloor_B].style.backgroundColor = "transparent";
      }

      return false;

    }else{
      setTimeout(goDown_B,1000);
    }


  }
  
  

  /// Setting timers ///

  if(currentFloor_B == rightFloor_B){
    displayingCF_B();
    setTimeout(function(){
      numbers_B[floorWhichCalls_B].style.display = "flex";
      displayCF_B[floorWhichCalls_B].style.background = "rgb(77, 87, 147)";
    },1000)

    // Closing the doors 12 seconds after not picking the willing floor:
    setTimeout(closingTheDoors_B,12000);


  }else if(currentFloor_B > rightFloor_B){
    setTimeout(closingTheDoors_B,1000);
    timerDown_B = setTimeout(goDown_B,2000);
  }else{
    setTimeout(closingTheDoors_B,1000);
    timerUp_B = setTimeout(goUp_B,2000);
  }

  // RESET button:

  resetBTN_B.forEach((reset)=> {
    reset.addEventListener("click",resetElevator_B)
  }
  )

  function resetElevator_B(){
    numbers_B[floorWhichCalls_B].style.display = "none";
    displayCF_B[floorWhichCalls_B].style.backgroundColor = "transparent";
  }

}

// SOS button:

sos_B.addEventListener("click", SOS_B);

function SOS_B(){
  sosClicked_B= true;
}

























//////////////////// ELEVATOR B ///////////////////

// //CONSTANTS:

// const buttonCall_B = document.querySelectorAll(".button_B");
// const numbers_B = document.querySelectorAll(".numbers_B");
// const choosingfloor_B = document.querySelectorAll(".choosingfloor_B");
// const displayCF_B = document.querySelectorAll(".display_B");
// const resetBTN_B = document.querySelectorAll(".resetBTN_B");
// const sos_B = document.getElementById("sos_B");

// //VARIABLES:

// var currentFloor_B = 0;
// var floorWhichCalls_B;
// var timerUp_B;
// var timerDown_B;
// var gettingClassName_B;
// var rightFloor_B;
// var close_B;
// var x_B;
// var sosClicked_B = false;

// ////Event listener for choosing willing floor:

// choosingfloor_B.forEach((each)=> {
//   each.addEventListener("click",callingTheElevator_B);
// })


// // Calling the elevator:

// buttonCall_B.forEach((btn) => {
//   btn.addEventListener("click",callingTheElevator_B)
// });

// function callingTheElevator_B(){

//   floorWhichCalls_B = this.id; //We use this because we put our floors just like in real building,lobby at the bottom and penthouse at the top. So, our indexes are reversed, index of the lobby button (when calling elevator) is 10.

//   gettingClassName_B = this.className;
//   rightFloor_B = gettingClassName_B.match(/\d/g).join(""); //We use this to open the doors on the right floor;
 


//   //Displaying current floor on every floor:
  
//   function displayingCF_B(){
//     x_B = document.getElementsByClassName("currFloor_B");
//     for(var n = 0; n < x_B.length; n++){
//       x_B[n].innerHTML = currentFloor_B - 1; // we added "-1" because we want basement to be displayed;
//     }
//   }

//   //Closing the doors:
  
//   function closingTheDoors_B(){
//     var rightDoors_B = buttonCall_B[currentFloor_B].className.match(/\d/g).join("");
//     numbers_B[rightDoors_B].style.display = "none";
//     displayCF_B[rightDoors_B].style.backgroundColor = "transparent";
//   }

//   ///Functions for timerUp and timerDown//////////

//   function goUp_B(){
//     //closing the previous timers:
//     clearTimeout(close_B);
//     close_B = null;

//     currentFloor_B = currentFloor_B + 1;
//     displayingCF_B()
    
//     if(currentFloor_B == rightFloor_B){
//       clearTimeout(timerUp_B);
//       timerUp_B = null;
//       setTimeout(function(){
//         numbers_B[floorWhichCalls_B].style.display = "flex";
//         displayCF_B[floorWhichCalls_B].style.background = "rgb(77, 87, 147)";
//       },1000);

//       //Closing the doors 12 seconds after not picking the willing floor:
//       close_B = setTimeout(closingTheDoors_B,12000);
//     }else if(sosClicked_B == true){
//       clearTimeout(timerUp_B);
//       timerUp_B = null;

//       var sosFloor_B = buttonCall_B[currentFloor_B].className.match(/\d/g).join("");
//       numbers_B[sosFloor_B].style.display = "flex";
//       displayCF_B[sosFloor_B].style.background = "rgb(77, 87, 147)";
//       sosClicked_B = false;
      
//       //Event listener for RESET button on the floor where doors were open in an emergency case:
//       resetBTN_B.forEach((reset)=> {
//         reset.addEventListener("click",resetElevator_B)
//       }
//       )
    
//       function resetElevator_B(){
//         numbers_B[sosFloor_B].style.display = "none";
//         displayCF_B[sosFloor_B].style.backgroundColor = "transparent";
//       }

//       return false;

//     }else{
//       setTimeout(goUp_B,1000);
//     }

//   }

  

//   function goDown_B(){
//     //Closing the previous timers:
//     clearTimeout(close_B);
//     close_B = null;

//     currentFloor_B = currentFloor_B - 1;
//     displayingCF_B()

//     if(currentFloor_B == rightFloor_B){
//       clearTimeout(timerDown_B);
//       timerDown_B = null;
//       setTimeout(function(){
//         numbers_B[floorWhichCalls_B].style.display = "flex";
//         displayCF_B[floorWhichCalls_B].style.background = "rgb(77, 87, 147)";
//       },1000);

//       //Closing the doors 12 seconds after not picking the willing floor:
//       close_B = setTimeout(closingTheDoors_B,12000);
//     }else if(sosClicked_B == true){
//       clearTimeout(timerDown_B);
//       timerDown_B = null;

//       var sosFloor_B = buttonCall_B[currentFloor_B].className.match(/\d/g).join("");
//       numbers_B[sosFloor_B].style.display = "flex";
//       displayCF_B[sosFloor_B].style.background = "rgb(77, 87, 147)";
//       sosClicked_B = false;
      
//       //Event listener for RESET button on the floor where doors were open in an emergency case:
//       resetBTN_B.forEach((reset)=> {
//         reset.addEventListener("click",resetElevator_B)
//       }
//       )
    
//       function resetElevator_B(){
//         numbers_B[sosFloor_B].style.display = "none";
//         displayCF_B[sosFloor_B].style.backgroundColor = "transparent";
//       }

//       return false;

//     }else{
//       setTimeout(goDown_B,1000);
//     }
//   }
  
  

//   ///////////////Setting timers (up and down)///////////////////

//   if(currentFloor_B == rightFloor_B){
//     displayingCF_B();
//     setTimeout(function(){
//       numbers_B[floorWhichCalls_B].style.display = "flex";
//       displayCF_B[floorWhichCalls_B].style.background = "rgb(77, 87, 147)";
//     },1000);
//     //Closing the doors 7 seconds after not picking the willing floor:
//     setTimeout(closingTheDoors_B,7000);

//   }else if(currentFloor_B > rightFloor_B){
//     setTimeout(closingTheDoors_B,1000);
//     timerDown_B = setTimeout(goDown_B,2000);
//   }else{
//     setTimeout(closingTheDoors_B,1000);
//     timerUp_B = setTimeout(goUp_B,2000);
//   }

//   // Event listener for RESET button:

//   resetBTN_B.forEach((reset)=> {
//     reset.addEventListener("click",resetElevator_B)
//   }
//   )

//   function resetElevator_B(){
//     numbers_B[floorWhichCalls_B].style.display = "none";
//     displayCF_B[floorWhichCalls_B].style.backgroundColor = "transparent";
//   }



// }

// sos_B.addEventListener("click", SOS_B);

// function SOS_B(){
//   sosClicked_B = true;
// }













