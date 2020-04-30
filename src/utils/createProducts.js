const axios = require('axios')


// const instance = axios.create({
//     baseURL: 'localhost:3000/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });


//  axios.post('/products', {
//         name: 'Fred soap'
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });



      async function getProduct(id) {
        try {
          const response = await axios.get('/catalogue?_id=' + id);
          console.log(response);
          return response
        } catch (error) {
          console.error(error);
        }
      }

    module.exports = getProduct