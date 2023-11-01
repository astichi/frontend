// 'use strict';

// const moduleOne = require('../js/modules/moduleOne');
// const {names, postfix} = require('../js/modules/moduleTwo');

// import moduleOne from './modules/moduleOne.js';
// import moduleTwo from './modules/moduleTwo.js';
// const {names, postfix} = moduleTwo;
import app from './modules/moduleOne.js';
// import {names, postfix as end} from './modules/moduleTwo.js';

// names.forEach(name => {
//   console.log(app(name, end));
// });

import * as data from './modules/moduleTwo.js';

data.names.forEach(name => {
  console.log(app(name, data.postfix));
});
