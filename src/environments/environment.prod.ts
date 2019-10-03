// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  API_URL: 'https://ripleytestapi.herokuapp.com/api',
  firebase: {
    apiKey: "AIzaSyA5s1Xi5fYf4Sg4ROgh39xTc1X9JNK-0e0",
    authDomain: "pruebaripley-80533.firebaseapp.com",
    databaseURL: "https://pruebaripley-80533.firebaseio.com",
    projectId: "pruebaripley-80533",
    storageBucket: "pruebaripley-80533.appspot.com",
    messagingSenderId: "113502942852"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
