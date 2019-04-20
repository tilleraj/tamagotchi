import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import '../styles/main.scss';

const init = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
  sleep.printSleep();
};

init();
