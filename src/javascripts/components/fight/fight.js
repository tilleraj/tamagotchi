import util from '../../helpers/util';
import './fight.scss';

let strength = 50;

const getStrength = () => strength;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="fightHeader">Fight</h3>';
  domString += `<h3 id="strengthHeader">${strength}</h3>`;
  domString += '<div class="btn-container">';
  domString += '<button id="run">Run Away</button>';
  domString += '<button id="violence">Commit Violence</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
  document.getElementById('run').addEventListener('click', () => {
    strength += 1;
    if (strength > 100) {
      strength = 100;
    }
    domStringBuilder();
  });
  document.getElementById('violence').addEventListener('click', () => {
    strength -= 10;
    if (strength < 0) {
      strength = 0;
    }
    domStringBuilder();
  });
};

const printFight = () => {
  domStringBuilder();
};

export default { printFight, getStrength };
