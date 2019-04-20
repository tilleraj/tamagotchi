import util from '../../helpers/util';
import './sleep.scss';

let energy = 50;

const getEnergy = () => energy;

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="sleepHeader">Sleep</h3>';
  domString += `<h3 id="energyHeader">${energy}</h3>`;
  domString += '<div class="btn-container">';
  domString += '<button id="nap">Quick Nap</button>';
  domString += '<button id="slumber">Deep Slumber</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  document.getElementById('nap').addEventListener('click', () => {
    energy += 50;
    if (energy > 100) {
      energy = 100;
    }
    domStringBuilder();
  });
  document.getElementById('slumber').addEventListener('click', () => {
    energy += 60;
    if (energy > 100) {
      energy = 100;
    }
    domStringBuilder();
  });
};

const printSleep = () => {
  domStringBuilder();
};

export default { printSleep, getEnergy };
