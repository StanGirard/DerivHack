import fs from 'fs'
import {switchIdentity, switchIdentityNotLoaded} from './postJson'
import axios from 'axios'
import {notify} from 'reapop'

export const casePort = {
  'DEALER-D01':10073,
  'DEALER-D02':10083,
  'DEALER-D03':10093,
  'CCP-P01':10103,
  'CLIENT-C01':10023,
  'CLIENT-C02':10033,
  'CLIENT-C03':10043,
  'CLIENT-C04':10053,
  'CLIENT-C05':10063,
  'BNO-DTN':10013
}

export const initSynchronousJsonLoading = (path) => {
  console.log('Synchronous Parsing of Json File')
  const content = fs.readFileSync(path);
  const loadedJson = JSON.parse(content);
  console.log(loadedJson.party[0].legalEntity.name)
  return loadedJson;
};

export const initAsynchronousJsonLoading = (path) => {
  console.log('Asynchronous Parsing of Json File')
  fs.readFile(path, function read(err, data) {
    if (err) {
      throw err;
    }

    const loadedJson = JSON.parse(data); // <=== Note I'm using `data`, not `content`; we don't need a `content` variable anymore
    //console.log(loadedJson);
    const nameEntity = loadedJson.party[0].legalEntity.name
    switchIdentity(nameEntity, loadedJson)
    console.log(nameEntity)
  });
}

export const initAsynchronous = (file) => {
// Define to JSON type
    try {
    console.log(file)
    const loadedJson = JSON.parse(file); // <=== Note I'm using `data`, not `content`; we don't need a `content` variable anymore
    console.log(loadedJson)
    const nameEntity = loadedJson.party[0].legalEntity.name
    return (dispatch) => {
        axios({method: 'post', url: `http://antid0te.fr:${casePort[nameEntity]}/api/memberApi/persistCDMEvent`, data: loadedJson})
      .then(function (response) {dispatch(notify({message: response.data, status: 'success', dismissible: true, dismissAfter: 3000 }))})
      .catch(function (error) {dispatch(notify({message: error.data, status: 'error', dismissible: true, dismissAfter: 3000}))})
    }
  } catch(e){
    return (dispatch) => {dispatch(notify({message: "Could not load your File !!!", status: 'error',dismissible: true, dismissAfter: 3000}))}
  }

  }
