import { initSynchronousJsonLoading, initAsynchronousJsonLoading } from './jsonReader'
import fs from 'fs'

//initSynchronous("./json/CDM_NEW_CREDIT_CDSWAP2018-09-24T214054.328.json")
//initAsynchronous("./json/CDM_NEW_CREDIT_CDSWAP2018-09-24T214054.328.json")


const readFiles = (dirname) => {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      console.log(err);
      return;
    }
    filenames.forEach(function(filename) {
        initAsynchronousJsonLoading(dirname + filename)

    });
  });
}

//readFiles('/Users/stanislasgirard/Documents/Dev/DerivHack/tools/json/')
const path = '/Users/remilm/git/DerivHack/tools/UC3_TradeEvents/I9YJKBVLVV_NOVATION.json'
initAsynchronousJsonLoading(path)
