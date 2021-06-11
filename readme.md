
**BRAIN OF THE ELEVATORS - PROJECT 3 (Pirple course (Keeping Up With the Javascripts: ES6)**

-Code is a bit messy because I wanted to make it look like a real building (from the top to the bottom floors are 10,9,8,7... and it made things confusing),but there are a lot of comments.

-Explanation:

There are two elevators in this building: Elevator A which goes from lobby to the penthouse,and an elevator B which goes into the basement ,but not at the penthouse.
Variables, functions,classes, id's - are all marked with "_A" (for an elevator A) and "_B" (for an elevator B).
99% of the code is the same for both elevators, the difference is just that an elevator B goes -1 floor,and not 10th. That's why there is "-1" in displayingCF_B function. It is also commented in the code.
Most of the code is commented.
Below it is described an elevator A. Everything works the same for an elevator B.


Current floor (currentFloor_A) is by default at lobby (0).

For buttons beside doors (buttonCall_A), we added click event listener: To fire callingTheElevator_A function. Also, we added event listeners for all buttons inside an elevator (choosingfloor_A): to fire the same function, callingTheElevator_A.

In mentioned function, we added logic:
If currentFloor_A is equal to rightFloor_A - currentFloor_A is the floor on which button is pressed. We had to create rightFloor_A because the building is created like so it looks like real building (lobby at the bottom of the page and penthouse at the top), so some new variables had to be declared(rightDoors_A, sosFloor_A). So, our indexes are reversed, index of the lobby button (when calling elevator) is 10. Variable rightFloor_A helps us open the doors on the right place. (For example, if we want to go to the 8th floor, it's index is 2,not 8).
So,If this condition is true - doors are opened at this floor. When doors are opened, if no floor is chosen for 12 seconds,doors are closed (closingTheDoors_A function).
Next condition - if currentFloor_A is bigger than rightFloor_A - it means, if we call an elevator from the floor which is above current floor. In this case, after one second, doors are closed and timer (timerUp_A) starts to count and calls goDown_A function. 
*goDown_A function: Here,we also have couple of if statements. Our currentFloor_A is getting less by 1 floor every time function is called. It's first condition: Again, if currentFloor_A is the same as rightFloor_A -  we are clearing timer and opening the doors. We got into the willing floor,and action is over.
Second condition: If SOS button is clicked while elevator is transporting ,we imidiately clear timer again and open the doors on the next floor. SOS button is represented outside of an elevator because doors are closed while it transports and it can not be pushed. Doors remain OPEN until RESET button inside is pushed (resetElevator_A function). 
And next condition, if none of the above is true, we call again goDown_A function, and all again until our first condition is true. (every one second function is executed,it means traveling from one floor to another lasts for one second)
To get back to the function callingTheElevator_A: Our third and last condition is ELSE statement: If none of above conditions are true, which means if rightFloor_A is bigger than currentFloor_A - the function goUp_A is executed - just the same as goDown_A, only currentFloor_A gets bigger by 1 every time function is executed. It means, our elevator goes up.
Thanks to the displayingCF_A (displaying current floor) function,we are able to see in every moment on which floor is our elevator.
