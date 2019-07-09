import getData from '../services/getData';

let form = document.forms.registerForm;
let countrySelect = form.elements.inputCountry;
let stateSelect = form.elements.inputState;
let citySelect = form.elements.inputCity;

const CountrySelectFill = () => {
    getData('countries')
    .then(res => res.json())
    .then((res) => {
        countrySelect.options.length = '';
        countrySelect[countrySelect.options.length] = new Option('Choose country', '', false, false);
        countrySelect.options[0].disabled = true;

        res.forEach((country) => {
            countrySelect[countrySelect.options.length] = new Option(country.name, country.id, false, false);
        })
    })
    .catch(()=> {
        console.error("ERROR ROUTER: Check router! getData(router) in SelectFill()");
    });
}

CountrySelectFill()

const StateSelectFill = (e) => {
    stateSelect.disabled = false;
    getData('states')
    .then(res => res.json())
    .then((res) => {
        stateSelect.options.length = '';
        stateSelect[stateSelect.options.length] = new Option('Choose state', '', false, false);
        stateSelect.options[0].disabled = true;

        res.forEach((state) => {
            if(state.country_id == e.target.value){
                stateSelect[stateSelect.options.length] = new Option(state.name, state.id, false, false);
            }
        })
    })
    .catch(()=> {
        console.error("ERROR ROUTER: Check router! getData(router) in SelectFill()");
    });
}

countrySelect.addEventListener('change',StateSelectFill);

const CitySelectFill = (e) => {
    citySelect.disabled = false;
    getData('cities')
    .then(res => res.json())
    .then((res) => {
        citySelect.options.length = '';
        citySelect[citySelect.options.length] = new Option('Choose city', '', false, false);
        citySelect.options[0].disabled = true;

        res.forEach((city) => {
            if(city.state_id == e.target.value){
                citySelect[citySelect.options.length] = new Option(city.name, city.id, false, false);
            }
        })
    })
    .catch(()=> {
        console.error("ERROR ROUTER: Check router! getData(router) in SelectFill()");
    });
}

stateSelect.addEventListener('change', CitySelectFill)

export {CountrySelectFill, StateSelectFill, CitySelectFill};