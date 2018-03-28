const apiai = require('apiai');

// api key dialoglow
const app = apiai("a05d6152b73148b09f1e3ee398fddf21");
const APIAI_SESSION_ID = 'Manuel_Galindez';

const getRest = (query) => {
  const request = app.textRequest(query, {
      sessionId: APIAI_SESSION_ID
  });

  const responseFromAPI = new Promise((resolve, reject) => {
    request.on('error', (error) => {
      reject(error);
    });
    request.on('response', (response) => {
      resolve(response.result.fulfillment.speech);
    });
    request.on('unhandledRejection', (response => {
      console.log(response);
    }))
  })

  request.end();
  return responseFromAPI;

}

module.exports = { getRest }
