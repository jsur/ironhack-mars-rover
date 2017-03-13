var myRover = {
  position: [0,0],
  direction: 'N',
  number: 1
};

var myRover2 = {
  position: [9,9],
  direction: 'S',
  number: 2
};

var grid = [
  [0,1,2,3,4,5,6,7,8,9],   //x
  [0,1,2,3,4,5,6,7,8,9]    //y
];

//Movement functions

function goForward(rover, roverNumber) {
  switch(rover.direction) {
    case 'N':
      if(obstacleHandler('F', rover)) {
        return;
      } else {
        rover.position[1]++;
        isRoverOverBoardHandler(rover, roverNumber);
        updateRoverPositionDiv(rover.position[0], rover.position[1], roverNumber);
        roverCollisionHandler(myRover, myRover2);
        updateRoverPositionCellColor(rover, roverNumber);
      }
      break;
    case 'E':
      if(obstacleHandler('F', rover)) {
        return;
      } else {
        rover.position[0]++;
        isRoverOverBoardHandler(rover, roverNumber);
        updateRoverPositionDiv(rover.position[0], rover.position[1], roverNumber);
        roverCollisionHandler(myRover, myRover2);
        updateRoverPositionCellColor(rover, roverNumber);
      }
      break;
    case 'S':
      if(obstacleHandler('F', rover)) {
        return;
      } else {
        rover.position[1]--;
        isRoverOverBoardHandler(rover, roverNumber);
        updateRoverPositionDiv(rover.position[0], rover.position[1], roverNumber);
        roverCollisionHandler(myRover, myRover2);
        updateRoverPositionCellColor(rover, roverNumber);
      }
      break;
    case 'W':
      if(obstacleHandler('F', rover)) {
        return;
      } else {
        rover.position[0]--;
        isRoverOverBoardHandler(rover, roverNumber);
        updateRoverPositionDiv(rover.position[0], rover.position[1], roverNumber);
        roverCollisionHandler(myRover, myRover2);
        updateRoverPositionCellColor(rover, roverNumber);
      }
      break;
  }

  if(roverNumber == 2) {
    console.log("New Rover 2 Position: [" + myRover2.position[0] + ", " + myRover2.position[1] + "]");
  } else {
    console.log("New Rover 1 Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
  }
}

function goBackward(rover, roverNumber) {
  switch(rover.direction) {
    case 'N':
      if(obstacleHandler('B', rover)) {
        return;
      } else {
        rover.position[1]--;
        isRoverOverBoardHandler(rover, roverNumber);
        updateRoverPositionDiv(rover.position[0], rover.position[1], roverNumber);
        roverCollisionHandler(myRover, myRover2);
        updateRoverPositionCellColor(rover, roverNumber);
      }
      break;
    case 'E':
      if(obstacleHandler('B', rover)) {
        return;
      } else {
        rover.position[0]--;
        isRoverOverBoardHandler(rover, roverNumber);
        updateRoverPositionDiv(rover.position[0], rover.position[1], roverNumber);
        roverCollisionHandler(myRover, myRover2);
        updateRoverPositionCellColor(rover, roverNumber);
      }
      break;
    case 'S':
      if(obstacleHandler('B', rover)) {
        return;
      } else {
        rover.position[1]++;
        isRoverOverBoardHandler(rover, roverNumber);
        updateRoverPositionDiv(rover.position[0], rover.position[1], roverNumber);
        roverCollisionHandler(myRover, myRover2);
        updateRoverPositionCellColor(rover, roverNumber);
      }
      break;
    case 'W':
      if(obstacleHandler('B', rover)) {
        return;
      } else {
        rover.position[0]++;
        isRoverOverBoardHandler(rover, roverNumber);
        updateRoverPositionDiv(rover.position[0], rover.position[1], roverNumber);
        roverCollisionHandler(myRover, myRover2);
        updateRoverPositionCellColor(rover, roverNumber);
      }
      break;
  }

  if(roverNumber == 2) {
    console.log("New Rover 2 Position: [" + myRover2.position[0] + ", " + myRover2.position[1] + "]");
  } else {
    console.log("New Rover 1 Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
  }

}

function turnLeftOrRight(direction, rover, roverNumber) {
  if (direction === 'left') {
    if (rover.direction == 'N') {
      rover.direction = 'W';
      if (roverNumber == 2) {
        updateRoverDirectionDiv(rover.direction, 2);
      } else {
        updateRoverDirectionDiv(rover.direction, 1);
      }
      return;
    }
    if (rover.direction == 'E') {
      rover.direction = 'N';
      if (roverNumber == 2) {
        updateRoverDirectionDiv(rover.direction, 2);
      } else {
        updateRoverDirectionDiv(rover.direction, 1);
      }
      return;
    }
    if (rover.direction == 'S') {
      rover.direction = 'E';
      if (roverNumber == 2) {
        updateRoverDirectionDiv(rover.direction, 2);
      } else {
        updateRoverDirectionDiv(rover.direction, 1);
      }
      return;
    }
    if (rover.direction == 'W') {
      rover.direction = 'S';
      if (roverNumber == 2) {
        updateRoverDirectionDiv(rover.direction, 2);
      } else {
        updateRoverDirectionDiv(rover.direction, 1);
      }
      return;
    }
  }
  if (direction === 'right') {
    if (rover.direction == 'N') {
      rover.direction = 'E';
      if (roverNumber == 2) {
        updateRoverDirectionDiv(rover.direction, 2);
      } else {
        updateRoverDirectionDiv(rover.direction, 1);
      }
      return;
    }
    if (rover.direction == 'E') {
      rover.direction = 'S';
      if (roverNumber == 2) {
        updateRoverDirectionDiv(rover.direction, 2);
      } else {
        updateRoverDirectionDiv(rover.direction, 1);
      }
      return;
    }
    if (rover.direction == 'S') {
      rover.direction = 'W';
      if (roverNumber == 2) {
        updateRoverDirectionDiv(rover.direction, 2);
      } else {
        updateRoverDirectionDiv(rover.direction, 1);
      }
      return;
    }
    if (rover.direction == 'W') {
      rover.direction = 'N';
      if (roverNumber == 2) {
        updateRoverDirectionDiv(rover.direction, 2);
      } else {
        updateRoverDirectionDiv(rover.direction, 1);
      }
      return;
    }
  }
}

//Handle a series of commands (f,b,l,r)

function commandArrayHandler(commandArray, rover) {
  for(var i = 0; i < commandArray.length; i++) {
    if(commandArray[i] == 'f') {
      goForward(rover, rover.number);
    }
    if(commandArray[i] == 'b') {
      goBackward(rover, rover.number);
    }
    if(commandArray[i] == 'r') {
      turnLeftOrRight('right', rover, rover.number);
    }
    if(commandArray[i] == 'l') {
      turnLeftOrRight('left', rover, rover.number);
    }
  }
  updateRoverPositionDiv(rover.position[0], rover.position[1], rover.number);
  updateRoverPositionCellColor(rover, rover.number);
}

//Handle rover warps

function isRoverOverBoardHandler(rover) {
  if (rover.position[0] > 9) {
    console.log('Grid border met!');
    rover.position[0] = 0;
  }
  if(rover.position[0] < 0) {
    console.log('Grid border met!');
    rover.position[0] = 9;
  }
  if (rover.position[1] > 9) {
    console.log('Grid border met!');
    rover.position[1] = 0;
  }
  if(rover.position[1] < 0) {
    console.log('Grid border met!');
    rover.position[1] = 9;
  }
}

//Handle obstacles

function obstacleHandler(heading, rover) {

  var nextPosition = [];

  if(heading == 'F') {
    if(rover.direction == 'N') {
      nextPosition.push(rover.position[0]);
      nextPosition.push(rover.position[1] + 1);
    }
    if(rover.direction == 'E') {
      nextPosition.push(rover.position[0] + 1);
      nextPosition.push(rover.position[1]);
    }
    if(rover.direction == 'S') {
      nextPosition.push(rover.position[0]);
      nextPosition.push(rover.position[1] - 1);
    }
    if(rover.direction == 'W') {
      nextPosition.push(rover.position[0] - 1);
      nextPosition.push(rover.position[1]);
    }
  }
  //Reversed when going backwards
  if(heading == 'B') {
    if(rover.direction == 'N') {
      nextPosition.push(rover.position[0]);
      nextPosition.push(rover.position[1] - 1);
    }
    if(rover.direction == 'E') {
      nextPosition.push(rover.position[0] - 1);
      nextPosition.push(rover.position[1]);
    }
    if(rover.direction == 'S') {
      nextPosition.push(rover.position[0]);
      nextPosition.push(rover.position[1] + 1);
    }
    if(rover.direction == 'W') {
      nextPosition.push(rover.position[0] + 1);
      nextPosition.push(rover.position[1]);
    }
  }

  //Warping has to be taken care of before checking for obstacles

  if (nextPosition.includes(-1) || nextPosition.includes(10)) {
    isRoverOverBoardHandler(rover);
  } else {
    var nextString = nextPosition.toString();
    var roverNextPos = '[' + nextString + ']';
    var isNextObstacle = document.getElementById(roverNextPos).classList.contains("obstacle");

    if (isNextObstacle) {
      console.log('Next cell is an obstacle, can\'t go further.');
      return true;
    }
  }
}

//Handle rover collisions

function roverCollisionHandler(rover1, rover2) {
  if(JSON.stringify(rover1.position) == JSON.stringify(rover2.position)) {
    console.log('Rover collision! Resetting both rovers back to square one.');
    rover1.position = [0,0];
    rover2.position = [9,9];
    updateRoverPositionCellColor(rover1, rover1.number);
    updateRoverPositionCellColor(rover2, rover2.number);
    updateRoverPositionDiv(rover1.position[0], rover1.position[1], rover1.number);
    updateRoverPositionDiv(rover2.position[0], rover2.position[1], rover2.number);
  }
}

//UI helper div functions

function updateRoverPositionDiv(positionX, positionY, roverNumber) {
  if(roverNumber == 2) {
    document.getElementById("position2").innerHTML = 'Rover 2 position is: [' + positionX + "," + positionY + "]";
  } else {
    document.getElementById("position1").innerHTML = 'Rover 1 position is: [' + positionX + "," + positionY + "]";
  }
}

function updateRoverDirectionDiv(direction, roverNumber) {
  if (roverNumber == 2) {
    document.getElementById("direction2").innerHTML = 'Rover 2 direction is: ' + direction;
  } else {
    document.getElementById("direction1").innerHTML = 'Rover 1 direction is: ' + direction;
  }
}

function updateRoverPositionCellColor(rover, roverNumber) {
  var roverString = rover.position.toString();
  var roverPos = '[' + roverString + ']';
  if(roverNumber == 2) {
    document.querySelector(".roverPosition2").classList.remove("roverPosition2");
    document.getElementById(roverPos).classList.add("roverPosition2");
  } else {
    document.querySelector(".roverPosition1").classList.remove("roverPosition1");
    document.getElementById(roverPos).classList.add("roverPosition1");
  }
}

//TARKISTA COMMANDARRAYHANDLERIN TOIMINTA!!!!!!!!
