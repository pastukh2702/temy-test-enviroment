import userListInit from './components/usersList/init';
import addUser from './components/registerForm/addUser';
import * as validators from './components/registerForm/validators';
import * as selectsFill from './components/registerForm/selectsFill';


let form = document.forms.registerForm;
let submit = form.elements.button;

form.addEventListener('change', validators.inputValidStatus); //realtime validator ;)

selectsFill.CountrySelectFill(); //getData into selects

userListInit(); //get user list


submit.addEventListener('click', addUser) // post user data








