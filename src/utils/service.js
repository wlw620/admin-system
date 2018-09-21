import axios from 'axios';
axios.defaults.withCredentials = true;
let defOpts = {
  headers: {
    'Content-Type': 'application/json'
  }
};
let Service = (options) => {
  return new Promise((resolve, reject) => {
    if (!options || !options.url) {
      return reject({
        status: 700,
        statusText: 'params error'
      });
    }
    let opts = Object.assign({}, defOpts, options);
    return axios(opts).then(res => {
      if (res && res.status === 200) {
        resolve(res.data);
      } else {
        reject(res);
      }
    }).catch(e => {
      reject(e);
    });
  });
}

export default Service;
