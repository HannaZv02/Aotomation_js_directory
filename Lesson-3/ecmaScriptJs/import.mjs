// import {numModule as numberOverride, strModule, boolModule} from './export.mjs'; 
import * as moduleData from './export.mjs';
import chalk from 'chalk';

// console.log(moduleData.strModule);
// console.log(moduleData.numModule);
// console.log(moduleData.boolModule);    

console.log(chalk.blue(moduleData.default));
console.log(chalk.green(moduleData.strModule));
console.log(chalk.yellow(moduleData.numModule));
console.log(chalk.red(moduleData.boolModule));
