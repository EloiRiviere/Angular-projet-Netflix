// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase';

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyDJR8SxMR6cfAj0M-K2WG6lG2gVI_cHHRo',
    authDomain: 'login-test-7a44e.firebaseapp.com',
    databaseURL: 'https://login-test-7a44e.firebaseio.com',
    projectId: 'login-test-7a44e',
    storageBucket: 'login-test-7a44e.appspot.com',
    messagingSenderId: '942154828666',
    appId: '1:942154828666:web:681fbbc9f9f868a96c64c3',
    measurementId: 'G-EMFF5VQRNY'
  },
  imgSmallUrl: 'https://image.tmdb.org/t/p/w500',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
