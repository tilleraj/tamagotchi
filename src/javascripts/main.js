import eat from './components/eat/eat';
import fight from './components/fight/fight';
import pet from './components/pet/pet';
import play from './components/play/play';
import sleep from './components/sleep/sleep';
import progress from './components/progress/progress';

import '../styles/main.scss';

const init = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
  sleep.printSleep();
  progress.printProgress();
  progress.updateProgress();
  document.getElementById('app').addEventListener('click', progress.updateProgress);
  pet.printPet();
};

init();
