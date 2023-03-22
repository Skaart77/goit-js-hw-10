import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries} from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const inputHandler = e => {
    const textInput = e.target.value.trim();
    
    if (!textInput) {
        [countryList, countryInfo].forEach(cleanMarkup);
        return;
    }
};

const cleanMarkup = ref => ref.innerHTML = '';


searchBox.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));