/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function makeRequest(url, verb, data, callBack) {

    var httpRequest = new XMLHttpRequest();

    httpRequest.open(verb, url);


    if (verb === 'GET') {
        httpRequest.send(null);
    } else {
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        httpRequest.send(data);
    }

    httpRequest.addEventListener('load', callBack.bind(httpRequest));
    httpRequest.addEventListener('error', callBack.bind(httpRequest));
}

function makeRequestPromise(url, verb, data) {

    var promise = new Promise(httpPromise);

    function httpPromise(resolve, reject) {
 

        var httpRequest = new XMLHttpRequest();

        httpRequest.open(verb, url);


        if (verb === 'GET') {
            httpRequest.send(null);
        } else {
            httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            httpRequest.send(data);
        }

        httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
        httpRequest.addEventListener('error', httpReject.bind(httpRequest));


        function httpResolve() {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(this.response));
            } else {
                reject(this.statusText);
                alert(this.statusText);
            }
        }
        function httpReject() {
            reject(this.statusText);
            alert(this.statusText);
        }

    }
    return promise;
}