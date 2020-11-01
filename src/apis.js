const url = 'http://localhost:5000/api/misc';


async function api(url, options) {
  try {
    let response = await fetch(url, options)
    .catch(err => {
      return new Promise((resolve, reject) => reject(err));
    });
    if(response.ok) {
      return response;
    } else {
      return new Promise((resolve, reject) => reject(response));
    }
  } catch (err) {
    return new Promise((resolve, reject) => reject(err));
  }
}

async function addQuery(query) {
  let response = await api(`${url}/addQuery`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({query})
  })
  .then(data => data.json())
  .catch(err => err);

  return response;
}
const apis = {
  addQuery
};
export default apis;