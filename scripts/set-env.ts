import { writeFile } from 'fs';
import { argv } from 'yargs';
import { existsSync, mkdirSync } from 'fs';
/**
 * @author Bradley Taniguchi
 * @description
 * This file takes environment variables, for the firebase config.
 */
require('dotenv').config();

const dir = './src/environments';
const environment = argv.environment;
const isProd = environment === 'prod';
const hmr = !!argv.hmr;
const fileName = `environment.${argv.environment === 'prod' ? argv.environment : ''}`;
const targetPath = `./src/environments/${fileName}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  hmr: ${hmr},
  apiUrl: '${process.env.API_URL}',
  firebase: {
    apiKey: '${process.env.FIREBASE_APIKEY}',
    authDomain: '${process.env.FIREBASE_AUTHDOMAIN}',
    databaseURL: '${process.env.FIREBASE_DATABASEURL}',
    projectId: '${process.env.FIREBASE_PROJECTID}',
    storageBucket: '${process.env.FIREBASE_STORAGEBUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGINGSENDERID}',
  }
};
`;
if (!existsSync(dir)) {
  //console.log('made environments directory');
  mkdirSync(dir);
}

writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    console.log('err: ', err);
  }

  console.log(`Output generated at ${targetPath}`);
});