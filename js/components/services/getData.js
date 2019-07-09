
const getData = (router) => {

    let url = `http://localhost:7000`;

    return fetch(`${url}/${router}`)
    .catch(() => {
        console.log("ERROR CONNECTION: Check port or your mockserver!");
    });
    
}

export default getData;