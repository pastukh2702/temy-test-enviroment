const render = (users)  => {
    usersList.innerHTML = '';
    users.forEach((user) => {
        usersList.innerHTML += 
        `
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>+${user.phone_number}</td>
                <td>${user.country_id}, ${user.state_id}, ${user.city_id}</td>
                <td>${user.createdAt}</td>
            </tr>
        `
    })
}

export {render}