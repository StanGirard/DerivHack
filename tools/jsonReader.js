import fs from 'fs'
import {switchIdentity} from './postJson'

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
