import * as validators from './validators';
import postData from '../services/postData';
import userListInit from '../usersList/init';

let form = document.forms.registerForm;

let countrySelect = form.elements.inputCountry;
let stateSelect = form.elements.inputState;
let citySelect = form.elements.inputCity;

let name = form.elements.inputName;
let email = form.elements.inputEmail;
let phone_number = form.elements.inputPhone;
let address = form.elements.inputAddress;
let about_me = form.elements.inputAbout;

const formReset = () => {
    form.reset();
    for (let i = 0; i < form.elements.length; i++) {
        form.elements[i].classList.remove('is-valid')
    }
    countrySelect.selectedIndex = 0;
    
    citySelect.options.length = '';
    citySelect[citySelect.options.length] = new Option('Choose city', '', false, false);
    citySelect.disabled = true;

    stateSelect.options.length = '';
    stateSelect[stateSelect.options.length] = new Option('Choose state', '', false, false);
    stateSelect.disabled = true;
}

const addUser = (e) => {
    e.preventDefault()
    for (let i = 0; i < form.elements.length; i++) {
        validators.autoValidStatus(form.elements[i])
    }
    if(form.checkValidity()){
        let user = {
            name: name.value,
            email: email.value,
            phone_number: Number(phone_number.value),
            address: validators.isEmpty(address.value),
            about_me: validators.isEmpty(about_me.value),
            country_id: countrySelect.options[countrySelect.selectedIndex].value,
            state_id: stateSelect.options[stateSelect.selectedIndex].value,
            city_id: citySelect.options[citySelect.selectedIndex].value
        }
        postData(user,'users')
        .then(userListInit)
        .then(formReset);
    };
}

export default addUser;