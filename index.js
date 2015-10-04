import Rx, { Observable } from 'rx';
import jQuery from 'jquery';

function ajax(url) {
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve({ a: 1, b: 2, url });
      }, 1000)
    }
  );
}

const requestStream = Observable.just('https://api.github.com/users');

const responseStream = requestStream
  .flatMap(requestUrl => {
    return Observable.fromPromise(ajax(requestUrl));
  });

responseStream.subscribe(response => {
  console.log(response);
})
