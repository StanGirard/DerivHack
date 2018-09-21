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

readFiles('/Users/remilm/git/DerivHack/tools/json/')
readFiles('/Users/remilm/git/DerivHack/tools/UC3_TradeEvents/')

//const path = '/Users/remilm/git/DerivHack/tools/UC3_TradeEvents/BHNAFG4NEC_TERMINATION.json'
//initAsynchronousJsonLoading(path)
