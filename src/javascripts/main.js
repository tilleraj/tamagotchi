import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import '../styles/main.scss';

const init = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
};

init();
