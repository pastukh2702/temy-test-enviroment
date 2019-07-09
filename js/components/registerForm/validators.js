const inputValidStatus = (area) => {
    if(area.target.required){
        if(area.target.validity.valid == true){
            area.target.classList.add('is-valid');
            area.target.classList.remove('is-invalid');
        }else{
            area.target.classList.add('is-invalid');
            area.target.classList.remove('is-valid');
        } 
    }   
}

const autoValidStatus = (area) => {
    if(area.required){
        if(area.validity.valid == true && area.disabled == false){
            area.classList.add('is-valid');
            area.classList.remove('is-invalid');
        }else{
            area.classList.add('is-invalid');
            area.classList.remove('is-valid');
        } 
    }   
}

const isEmpty = (str) => {
    if(str.trim().length == 0){
        return str;
    } else {
        return null;
    }
}

export {inputValidStatus, autoValidStatus, isEmpty};