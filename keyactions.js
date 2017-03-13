function roverMove(e) {

//Rover 1

  if(e.code == 'ArrowUp') {
    goForward(myRover, 1);
  }
  if(e.code == 'ArrowDown') {
    goBackward(myRover, 1);
  }
  if(e.code == 'ArrowLeft') {
    turnLeftOrRight('left', myRover, 1);
  }
  if(e.code == 'ArrowRight') {
    turnLeftOrRight('right', myRover, 1);
  }

//Rover 2

  if(e.code == 'KeyW') {
    goForward(myRover2, 2);
  }
  if(e.code == 'KeyS') {
    goBackward(myRover2, 2);
  }
  if(e.code == 'KeyA') {
    turnLeftOrRight('left', myRover2, 2);
  }
  if(e.code == 'KeyD') {
    turnLeftOrRight('right', myRover2, 2);
  }
}

window.addEventListener('keydown', roverMove);
