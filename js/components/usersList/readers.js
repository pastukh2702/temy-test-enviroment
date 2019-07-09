const cityReader = (users) => (cities) => {
    users.forEach((user, index) => {
        cities.forEach((city) => {
            if(user.city_id == city.id){
                user.city_id = city.name;
            }
        })
    })
      return users;
}

const stateReader = (users) => (states) => {
    users.forEach((user, index) => {
        states.forEach((state) => {
            if(user.state_id == state.id){
                user.state_id = state.name;
            }
        })
    })
      return users;
}

const countryReader = (users) => (countries) => {
    users.forEach((user, index) => {
        countries.forEach((country) => {
            if(user.country_id == country.id){
                user.country_id = country.name;
            }
        })
    })
      return users;
}

const dateReader = (users) => {
    
    users.forEach((user) => {
        let s = user.createdAt;
        
        let time = new Date(s);

        let month = time.getMonth();
        let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Octr', 'Nov', 'Dec'];

        let day = time.getDate();
        let year = time.getFullYear();

        let hrs = time.getHours();
        let min = time.getMinutes();
        // let sec = time.getSeconds();
        if(hrs < 9){
            hrs = `0${hrs}`;
        }
        if(min < 9){
            min = `0${min}`;
        }
        // if(sec < 9){
        //     sec = `0${sec}`;
        // }

        user.createdAt = `${year}, ${monthNames[month]} ${day},  ${hrs}:${min}`;
    })
    return users;
}

export {cityReader, stateReader, countryReader, dateReader};