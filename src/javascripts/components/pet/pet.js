import util from '../../helpers/util';
import './pet.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div id="petContainer">';
  domString += '  <img src="../../../../assets/rowlet.gif" alt="A cute Rowlet bounces patiently">';
  domString += '</div>';
  util.printToDom('pet', domString);
};

const printPet = () => {
  domStringBuilder();
};

export default { printPet };
