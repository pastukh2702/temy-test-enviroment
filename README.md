# [temy-test-enviroment](https://temy.co/) - "User registration with json server"

Hello there) It's my temy-test-enviroment results.

# Installation

```bash
git clone https://github.com/pastukh2702/temy-test-enviroment.git
cd temy-test-enviroment
npm i
npm run dev
```

or use only ``` npm run json-server ``` for testing.

Navigate to `index.html` or use [parcel](https://parceljs.org/).

# Features

- Add users into json base
- Cool validation
- Wpack used
- Convenient use of components

# Possible error and their solution

Port is already used. 
Solution - navigate to 'json-server/server.js' and change port variable
```
server.listen(port, () => {
    console.log('JSON Server is running')
});
```
Then 'js/components/service/getData' and '.../postData' and change port variable to the one that was chosen in server.js
```let url = `http://localhost:port`;```

# Author

- [Volodymyr Pastukh](https://www.facebook.com/pastvolodymyr)
