import eat from '../eat/eat';
import fight from '../fight/fight';
import play from '../play/play';
import sleep from '../sleep/sleep';
import util from '../../helpers/util';
import './progress.scss';

let progress = 50;

const getProgress = () => progress;

const updateProgress = () => {
  const full = eat.getFull();
  const strength = fight.getStrength();
  const fun = play.getFun();
  const energy = sleep.getEnergy();
  progress = (full + strength + fun + energy) / 4;
  document.getElementById('progressBar').value = progress;
  document.getElementById('progressPercent').innerHTML = `${progress.toFixed(2)}%`;
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="progressHeader">Progress</h3>';
  domString += `<progress id="progressBar" value="${progress}" max="100"></progress>`;
  domString += `<h3 id="progressPercent">${progress.toFixed(2)}%</h3>`;
  util.printToDom('progress', domString);
};

const printProgress = () => {
  domStringBuilder();
};

export default { printProgress, getProgress, updateProgress };
