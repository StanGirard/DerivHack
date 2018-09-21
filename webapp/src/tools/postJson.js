import {XMLHttpRequest} from 'xmlhttprequest'

export const switchIdentity = (nodeIdentity, json) => {
  switch (nodeIdentity) {
    case 'DEALER-D01':
        postJsonLoaded('10073', json);
        break;
    case 'DEALER-D02':
        postJsonLoaded('10083', json);
        break;
    case 'DEALER-D03':
        postJsonLoaded('10093', json);
        break;
    case 'CCP-P01':
        postJsonLoaded('10103', json);
        break;
    case 'CLIENT-C01':
        postJsonLoaded('10023', json);
        break;
    case 'CLIENT-C02':
        postJsonLoaded('10033', json);
        break;
    case 'CLIENT-C03':
        postJsonLoaded('10043', json);
        break;
    case 'CLIENT-C04':
        postJsonLoaded('10053', json);
        break;
    case 'CLIENT-C05':
        postJsonLoaded('10063', json);
        break;
    case 'BNO-DTN':
        postJsonLoaded('10013', json);
        break;

    default:
        break;
  }
}


const postJsonLoaded = (port, loadedJson) => {
    const url = `http://antid0te.fr:${port}/api/memberApi/persistCDMEvent`
    console.log(url)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      console.log("Test: " + xhr.readyState + " , " + xhr.status)
    	if (xhr.readyState == 4 && xhr.status == '200') {
        console.log("SUCCESS")
    		console.log(xhr.responseText);
    	} else {
        console.log("Failure")
    		console.error(xhr.responseText);
    	}
    }
    xhr.send(JSON.stringify(loadedJson));
}

const postJson = (port, jsonToSend) => {
    const url = `http://antid0te.fr:${port}/api/memberApi/persistCDMEvent`
    console.log(url)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      console.log("Test: " + xhr.readyState + " , " + xhr.status)
    	if (xhr.readyState == 4 && xhr.status == '200') {
        console.log("SUCCESS")
    		console.log(xhr.responseText);
    	} else {
        console.log("Failure")
    		console.error(xhr.responseText);
    	}
    }
    xhr.send(jsonToSend);
}
