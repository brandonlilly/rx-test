import Rx, { Observable } from 'rx';

function ajax(url) {
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve({ url });
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
