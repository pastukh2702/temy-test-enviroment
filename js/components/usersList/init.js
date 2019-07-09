import * as readers from './readers';
import * as renders from './render';
import getData from '../services/getData';

const init = () => {
    getData(`users`)
    .then(users => users.json())
    .then(users => {
        return getData(`cities`)
        .then(cities => cities.json())
        .then(readers.cityReader(users))
    })
    .then((users) => {
        return getData(`states`)
        .then(states => states.json())
        .then(readers.stateReader(users))
    })
    .then((users) => {
        return getData(`countries`)
        .then(countries => countries.json())
        .then(readers.countryReader(users))
    })
    .then(readers.dateReader)
    .then(renders.render)
    .catch(()=> {
        console.error("ERROR ROUTER: Check router! getData(router) in usersList/init()");
    });
}

export default init;