import util from '../../helpers/util';
import './play.scss';

let fun = 50;

const getFun = () => fun;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="playHeader">Play</h3>';
  domString += `<h3 id="funHeader">${fun}</h3>`;
  domString += '<div class="btn-container">';
  domString += '<button id="super">Super Fun</button>';
  domString += '<button id="slightly">Slightly Fun</button>';
  domString += '</div>';
  util.printToDom('play', domString);
  document.getElementById('super').addEventListener('click', () => {
    fun += 50;
    if (fun > 100) {
      fun = 100;
    }
    domStringBuilder();
  });
  document.getElementById('slightly').addEventListener('click', () => {
    fun += 2;
    if (fun > 100) {
      fun = 100;
    }
    domStringBuilder();
  });
};

const printPlay = () => {
  domStringBuilder();
};

export default { printPlay, getFun };
