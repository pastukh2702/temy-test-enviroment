const postData = (data, router) => {
    let url = 'http://localhost:7000';

    return fetch(`${url}/${router}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(alert('User added!'))
    .catch(() => {
        alert("ERROR ADDING: Check port or your mockserver!");
    });
}

export default postData;