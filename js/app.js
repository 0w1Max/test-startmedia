import {dataCarsObj, dataResultObj} from './data.js';
import {renderRiderTable} from './rider-table-view.js';

console.log(dataCarsObj);
console.log(dataResultObj);

renderRiderTable(dataCarsObj);

const idBtn = document.querySelector('.id-btn');
const totalResultBtn = document.querySelector('.total-result');
const firstResultBtn = document.querySelector('.first-result');
const secondResultBtn = document.querySelector('.second-result');
const thirdResultBtn = document.querySelector('.third-result');
const fourthResultBtn = document.querySelector('.fourth-result');

idBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    dataCarsObj.sort((a, b) => b.id - a.id);
    renderRiderTable(dataCarsObj);
});

totalResultBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    dataCarsObj.sort((a, b) => b.result - a.result);
    renderRiderTable(dataCarsObj);
});

firstResultBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    dataCarsObj.sort((a, b) => b.allResults[0] - a.allResults[0]);
    renderRiderTable(dataCarsObj);
});

secondResultBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    dataCarsObj.sort((a, b) => b.allResults[1] - a.allResults[1]);
    renderRiderTable(dataCarsObj);
});

thirdResultBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    dataCarsObj.sort((a, b) => b.allResults[2] - a.allResults[2]);
    renderRiderTable(dataCarsObj);
});

fourthResultBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    dataCarsObj.sort((a, b) => b.allResults[3] - a.allResults[3]);
    renderRiderTable(dataCarsObj);
});
