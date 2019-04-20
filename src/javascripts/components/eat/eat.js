import util from '../../helpers/util';
import './eat.scss';

let full = 100;

const getFull = () => full;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="eatHeader">Eat</h3>';
  domString += `<h3 id="fullHeader">${full}</h3>`;
  domString += '<div class="btn-container">';
  domString += '<button id="healthy">Healthy</button>';
  domString += '<button id="garbage">Garbage</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', () => {
    full += 10;
    if (full > 100) {
      full = 100;
    }
    domStringBuilder();
  });
  document.getElementById('garbage').addEventListener('click', () => {
    full -= 3;
    if (full < 0) {
      full = 0;
    }
    domStringBuilder();
  });
};

const printEat = () => {
  domStringBuilder();
};

export default { printEat, getFull };
