import eat from './components/eat/eat';
import play from './components/play/play';
import '../styles/main.scss';

const init = () => {
  eat.printEat();
  play.printPlay();
};

init();
