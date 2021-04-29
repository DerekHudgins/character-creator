// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
import { getCharacterImage } from './functions.js';
const StrSelectEl = document.getElementById ('Str-select');
const HapSelectEl = document.getElementById ('hap-select');
const IntelSelectEl = document.getElementById ('Intel-select');
const CreateBtnEl = document.getElementById ('Create-Btn');
const CharImg = document.getElementById ('char-one');

CreateBtnEl.addEventListener('click', () =>{
    const happyLvl = HapSelectEl.value;
    const intelLvl = IntelSelectEl.value;
    const strongLvl = StrSelectEl.value;
    CharImg.src = getCharacterImage(happyLvl, intelLvl, strongLvl);
});





